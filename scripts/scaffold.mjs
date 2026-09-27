#!/usr/bin/env node
/**
 * scaffold.mjs — crea el proyecto de hyperframes de cada curso que aun no lo
 * tiene.
 *
 * Uso:
 *   node scripts/scaffold.mjs                 -> todos los que falten
 *   node scripts/scaffold.mjs telework telerabajo   -> solo esos slugs
 *   node scripts/scaffold.mjs --list          -> muestra el estado y sale
 *
 * Un proyecto recien creado es un placeholder: `hyperframes init` deja un
 * index.html con un <h1>Title</h1> y nada mas. Lo que lo convierte en curso son
 * cuatro archivos que se copian desde courses/<slug>/:
 *
 *   BRIEF.md          que es, para quien, de que angulo, sin narracion
 *   INVESTIGACION.md  los hechos verificados y la lista de lo NO verificado
 *   frame.md          el sistema visual (el preset editorial-forest)
 *   capture/          las dos tipografias reales, para que el render no
 *                     dependa de la red
 *
 * El indice de un proyecto recien creado NO cuenta como composicion: el
 * catalogo exige que index.html referencie al menos un frame, asi que un
 * placeholder no se ofrece como si fuera el video.
 *
 * Es idempotente: un proyecto que ya existe se salta, asi que se puede correr
 * de nuevo sin miedo.
 */

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { proyectoDelCurso } from './proyectos.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COURSES_DIR = join(ROOT, 'courses');
const PROJECTS_DIR = join(ROOT, 'videos');

/* El proyecto piloto es la referencia de sistema visual: sus frame.md y sus
   dos woff2 son lo que se reparte. */
const PILOTO = 'ley-karin-plazos';

/* hyperframes init escribe las instrucciones para Claude Code en CLAUDE.md,
   identicas byte a byte a AGENTS.md. Este repo no usa Claude Code, asi que
   queda solo AGENTS.md. */
const SOLO_CLAUDE = ['CLAUDE.md'];

const args = process.argv.slice(2);
const soloListar = args.includes('--list');
const pedidos = args.filter((a) => !a.startsWith('--'));

function slugsDeCursos() {
  if (!existsSync(COURSES_DIR)) return [];
  return readdirSync(COURSES_DIR)
    .filter((s) => statSync(join(COURSES_DIR, s)).isDirectory())
    .sort();
}

function tipografiasDelPiloto() {
  const origen = join(PROJECTS_DIR, PILOTO, 'capture', 'assets', 'fonts');
  if (!existsSync(origen)) return [];
  return readdirSync(origen).filter((f) => f.endsWith('.woff2')).sort();
}

const slugPedidos = pedidos.length > 0 ? pedidos : slugsDeCursos();

if (slugPedidos.length === 0) {
  console.log('No hay cursos en courses/. Corre antes: node scripts/gen-courses.mjs');
  process.exit(0);
}

const tipografias = tipografiasDelPiloto();
if (tipografias.length === 0) {
  console.error(`El piloto ${PILOTO} no tiene tipografias en capture/assets/fonts.`);
  console.error('Sin ellas el scaffold no puede copiar el sistema visual.');
  process.exit(1);
}

let creados = 0;
let saltados = 0;
let fallos = 0;
/* En modo --list el bucle hace continue antes de contar, asi que el resumen se
   arma aparte. */
const faltan = [];
const yaHay = [];

for (const slug of slugPedidos) {
  const cursoDir = join(COURSES_DIR, slug);
  // La carpeta del proyecto no siempre es el slug: el piloto se llama
  // ley-karin-plazos para el curso ley-karin. El mapa de proyectos.mjs es el
  // que resuelve esa diferencia.
  const carpeta = proyectoDelCurso(slug) ?? slug;
  const proyectoDir = join(PROJECTS_DIR, carpeta);

  if (!existsSync(cursoDir)) {
    console.error(`\x1b[31m✗ ${slug}: no existe courses/${slug}/\x1b[0m`);
    fallos += 1;
    continue;
  }

  if (existsSync(join(proyectoDir, 'meta.json'))) {
    const tieneFrames = existsSync(join(proyectoDir, 'compositions', 'frames'));
    yaHay.push({ slug, carpeta, tieneFrames });
    if (!soloListar) {
      console.log(`· ${slug.padEnd(30)} ya existe (${carpeta}), se salta`);
    }
    saltados += 1;
    continue;
  }

  faltan.push({ slug, carpeta });
  if (soloListar) continue;

  console.log(`\n\x1b[36m▸ ${slug}\x1b[0m`);

  // 1. hyperframes init. HYPERFRAMES_SKIP_SKILLS=1 evita que el init reinstale
  //    las skills en cada proyecto: aqui ya estan, en el raiz del repo.
  const r = spawnSync('npx', ['hyperframes', 'init', `videos/${carpeta}`], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, HYPERFRAMES_SKIP_SKILLS: '1' },
  });
  if (r.status !== 0) {
    console.error(`  hyperframes init fallo:\n${r.stderr?.toString().slice(-600) ?? '(sin stderr)'}`);
    fallos += 1;
    continue;
  }

  // 2. El index.html del placeholder se borra. Si queda, el catalogo podria
  //    tomarlo por una composicion, y un <h1>Title</h1> no es el video.
  rmSync(join(proyectoDir, 'index.html'), { force: true });

  for (const archivo of SOLO_CLAUDE) {
    rmSync(join(proyectoDir, archivo), { force: true });
  }

  // 3. Los documentos del curso.
  for (const doc of ['BRIEF.md', 'INVESTIGACION.md']) {
    const origen = join(cursoDir, doc);
    if (existsSync(origen)) {
      copyFileSync(origen, join(proyectoDir, doc));
      console.log(`  ${doc}`);
    }
  }

  // 4. El sistema visual y las tipografias del piloto.
  const frameDelPiloto = join(PROJECTS_DIR, PILOTO, 'frame.md');
  if (existsSync(frameDelPiloto)) {
    copyFileSync(frameDelPiloto, join(proyectoDir, 'frame.md'));
    console.log('  frame.md');
  }
  const destino = join(proyectoDir, 'capture', 'assets', 'fonts');
  mkdirSync(destino, { recursive: true });
  for (const fuente of tipografias) {
    copyFileSync(join(PROJECTS_DIR, PILOTO, 'capture', 'assets', 'fonts', fuente), join(destino, fuente));
  }
  console.log(`  capture/assets/fonts/ (${tipografias.length} woff2)`);

  // 5. El vinculo con el slug del curso. build-catalog y render-all lo leen de
  //    aqui para no asumir que carpeta y slug son lo mismo.
  const metaPath = join(proyectoDir, 'meta.json');
  const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
  writeFileSync(metaPath, JSON.stringify({ ...meta, course: slug }, null, 2) + '\n', 'utf8');
  console.log('  meta.json con course');

  creados += 1;
}

if (soloListar) {
  for (const { slug, carpeta, tieneFrames } of yaHay) {
    console.log(
      `· ${slug.padEnd(30)} ya existe en videos/${carpeta}${tieneFrames ? ', con frames' : ', placeholder sin frames'}`,
    );
  }
  for (const { slug, carpeta } of faltan) {
    console.log(`+ ${slug.padEnd(30)} falta (videos/${carpeta})`);
  }
  console.log(
    `\n${slugPedidos.length} cursos: ${faltan.length} por crear, ${yaHay.length} ya existen, ${fallos} sin carpeta en courses/.`,
  );
  process.exit(fallos > 0 ? 1 : 0);
}

console.log(
  `\n${creados} proyectos creados, ${saltados} saltados, ${fallos} con problemas.`,
);
if (creados > 0) {
  console.log('\nSiguiente paso por proyecto: escribir los frames en compositions/frames/');
  console.log('y despues:  node scripts/render-all.mjs <slug>');
}
process.exit(fallos > 0 ? 1 : 0);
