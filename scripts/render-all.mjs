#!/usr/bin/env node
/**
 * render-all.mjs — arma y renderiza los videos de hyperframes.
 *
 * Uso:
 *   node scripts/render-all.mjs                  -> todos los proyectos de videos/
 *   node scripts/render-all.mjs ley-karin        -> solo ese curso
 *   node scripts/render-all.mjs --assemble-only  -> solo arma index.html
 *   node scripts/render-all.mjs --no-transitions -> no inyecta cortes
 *
 * Divide el trabajo en etapas explicitas, porque son cosas distintas y
 * conviene poder correr solo la primera:
 *
 *   compose  — lint, assemble-index, transitions inject + verify, check
 *   render   — hyperframes render -> renders/video.mp4, copiado a
 *              public/videos/<slug>.mp4 para que el visor lo ofrezca
 *
 * Un curso sin carpeta en videos/ se salta: todavia esta en etapa de
 * investigacion y no hay nada que componer.
 */

import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECTS_DIR = join(ROOT, 'videos');
const COURSES_DIR = join(ROOT, 'courses');
const PUBLIC_VIDEOS = join(ROOT, 'public', 'videos');

/* Scripts del skill faceless-explainer. El CLI de hyperframes no tiene un
   comando de ensamblado: assemble-index.mjs y transitions.mjs son los que
   escriben index.html. */
const SKILL = join(ROOT, '.agents', 'skills', 'faceless-explainer', 'scripts');
const ASSEMBLE = join(SKILL, 'assemble-index.mjs');
const TRANSITIONS = join(SKILL, 'transitions.mjs');

const args = process.argv.slice(2);
const soloAssemble = args.includes('--assemble-only');
const soloTransiciones = args.includes('--no-transitions');
const pedidos = args.filter((a) => !a.startsWith('--'));

const paso = (cmd, cmdArgs, cwd) => {
  process.stdout.write(`  $ ${cmd} ${cmdArgs.join(' ')}\n`);
  const r = spawnSync(cmd, cmdArgs, { cwd, stdio: 'inherit', shell: false });
  return r.status === 0;
};

function proyectos() {
  if (!existsSync(PROJECTS_DIR)) return [];
  const todos = readdirSync(PROJECTS_DIR).filter((s) => statSync(join(PROJECTS_DIR, s)).isDirectory());
  if (pedidos.length === 0) return todos;
  const faltan = pedidos.filter((p) => !todos.includes(p));
  if (faltan.length) {
    console.error(`No existe proyecto de hyperframes para: ${faltan.join(', ')}`);
    console.error(`Proyectos disponibles: ${todos.join(', ') || '(ninguno)'}`);
    process.exit(1);
  }
  return pedidos;
}

const lista = proyectos();

if (lista.length === 0) {
  console.log('No hay proyectos de hyperframes en videos/ todavia.');
  console.log('Cada curso se crea con:  npx hyperframes init videos/<slug>');
  process.exit(0);
}

mkdirSync(PUBLIC_VIDEOS, { recursive: true });

let ok = 0;
let fallos = 0;

for (const slug of lista) {
  const cwd = join(PROJECTS_DIR, slug);
  console.log(`\n=== ${slug} ===`);

  // Etapa 1: componer. El orden importa: lint ve los frames sueltos,
  // assemble arma index.html, transitions inyecta los cortes y verify los
  // comprueba, y check es la puerta final sobre el index ya montado.
  if (!paso('npx', ['hyperframes', 'lint'], cwd)) {
    console.log(`  lint fallo en ${slug}, se omite.`);
    fallos += 1;
    continue;
  }

  const storyboard = join(cwd, 'STORYBOARD.md');
  if (!paso('node', [ASSEMBLE, '--storyboard', storyboard, '--hyperframes', cwd], cwd)) {
    console.log(`  ensamblado fallo en ${slug}, se omite.`);
    fallos += 1;
    continue;
  }

  if (!soloTransiciones) {
    paso('node', [TRANSITIONS, 'inject', '--storyboard', storyboard, '--hyperframes', cwd], cwd);
    paso('node', [TRANSITIONS, 'verify', '--storyboard', storyboard, '--index', join(cwd, 'index.html')], cwd);
  }

  if (soloAssemble) {
    console.log(`  ${slug}: ensamblado.`);
    ok += 1;
    continue;
  }

  if (!paso('npx', ['hyperframes', 'check'], cwd)) {
    console.log(`  check fallo en ${slug}, no se renderiza.`);
    fallos += 1;
    continue;
  }

  // Etapa 2: renderizar.
  if (!paso('npx', ['hyperframes', 'render', '--quality', 'high', '--output', 'renders/video.mp4'], cwd)) {
    console.log(`  render fallo en ${slug}.`);
    fallos += 1;
    continue;
  }

  const mp4 = join(cwd, 'renders', 'video.mp4');
  if (!existsSync(mp4)) {
    console.log(`  el render dijo ok pero no hay ${mp4}`);
    fallos += 1;
    continue;
  }

  copyFileSync(mp4, join(PUBLIC_VIDEOS, `${slug}.mp4`));
  console.log(`  ${slug}: mp4 en public/videos/${slug}.mp4`);
  ok += 1;
}

console.log(`\n${ok} ok, ${fallos} con problemas.`);

if (!soloAssemble && ok > 0) {
  console.log('Regenerando el catalogo para que el visor muestre las descargas...');
  spawnSync('node', [join(ROOT, 'scripts', 'build-catalog.mjs')], { stdio: 'inherit' });
}

process.exit(fallos > 0 ? 1 : 0);
