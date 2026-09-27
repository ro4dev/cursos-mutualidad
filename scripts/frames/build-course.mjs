#!/usr/bin/env node
/**
 * build-course.mjs — arma los frames de un curso desde su spec.
 *
 *   node scripts/frames/build-course.mjs <slug> [--out]
 *
 * Lee `courses/<slug>/frames.spec.mjs` (el copy ya verificado contra
 * INVESTIGACION.md), emite `videos/<carpeta>/compositions/frames/NN-*.html`
 * y deja el STORYBOARD del video al dia.
 *
 * Por que un generador y no 130 subagentes: la geometria se calcula una vez
 * en px enteros. El piloto escrito a mano acumulo cuatro bugs silenciosos
 * (selectores con digito inicial, cqw/cqh mezclados, tween sobre null,
 * tipografia a mano); con el generador las tres primeras no se pueden
 * escribir y la cuarta la revisa check-selectors.mjs antes de cada render.
 */

import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { Frame } from './emit.mjs';
import { ARQUETIPOS } from './archetypes.mjs';
import { tokens } from './tokens.mjs';
import { proyectoDelCurso, slugDelCurso } from '../proyectos.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const slug = process.argv[2];

if (!slug) {
  console.error('Uso: node scripts/frames/build-course.mjs <slug>');
  process.exit(1);
}

const specPath = join(ROOT, 'courses', slug, 'frames.spec.mjs');
if (!existsSync(specPath)) {
  console.error(`No existe ${specPath}`);
  console.error('Cada curso necesita su frames.spec.mjs con el copy verificado.');
  process.exit(1);
}

const spec = (await import(pathToFileURL(specPath).href)).default;

/* ------------------------------------------------------------------------ *
 * Guarda de corrupcion del copy.
 *
 * Este repo lo escribe una IA y la prosa larga en español sale a veces con
 * fragmentos de otros alfabetos pegados en medio de la frase. Si eso llega
 * a pantalla, el video muestra un caracter que no es del texto. Se corta aca
 * y no despues, cuando ya se renderizo.
 *
 * `°` se permite: es notacion legal chilena legitima ("Ley N° 21.643").
 * ------------------------------------------------------------------------ */
const NO_LATIN = /[Ѐ-ӿ　-〿぀-ヿ㐀-鿿가-힯]/;

const stringsDelSpec = (v, ruta = 'spec') => {
  if (typeof v === 'string') return [{ ruta, v }];
  if (Array.isArray(v)) return v.flatMap((x, i) => stringsDelSpec(x, `${ruta}[${i}]`));
  if (v && typeof v === 'object') {
    return Object.entries(v).flatMap(([k, x]) => stringsDelSpec(x, `${ruta}.${k}`));
  }
  return [];
};

/* Sin flag `g`: con `g`, `lastIndex` avanza entre llamadas y el test se
   salta strings alternados. Seinicalmente dejaria pasar la mitad. */
const sucias = stringsDelSpec(spec).filter(({ v }) => NO_LATIN.test(v.replace(/N°/g, '')));

if (sucias.length) {
  console.error(`\nCopy corrupto en ${slug}/frames.spec.mjs — ${sucias.length} string(s):\n`);
  for (const { ruta, v } of sucias.slice(0, 12)) {
    const bad = [...v.matchAll(new RegExp(NO_LATIN.source, 'g'))];
    console.error(`  ${ruta}`);
    console.error(`    ${JSON.stringify(bad.map((m) => m[0]).join(' '))}  en  ${v.slice(0, 100)}`);
  }
  process.exit(1);
}

const carpeta = proyectoDelCurso(slug);
const proyecto = join(ROOT, 'videos', carpeta);
const framesDir = join(proyecto, 'compositions', 'frames');

if (!existsSync(proyecto)) {
  console.error(`El proyecto videos/${carpeta} no existe. Corre: node scripts/scaffold.mjs ${slug}`);
  process.exit(1);
}

/* La duracion se parte en partes iguales. El piloto usa 10.5s por frame con
   9.5s de ventana visible; aqui se deja 0.5s de aire al final de cada uno
   para que la transicion entrante tenga donde entrar. */
const n = spec.frames.length;
const duracion = +(spec.duracion / n).toFixed(2);
const ventana = +(duracion - 0.5).toFixed(2);

console.log(`\n${slug}  ->  videos/${carpeta}`);
console.log(`  ${n} frames x ${duracion}s  (ventana ${ventana}s)\n`);

/* Los frames viejos se borran: si un frame se renumera, el html anterior
   quedaria huerfano y el catálogo lo contaria como montaje. */
if (existsSync(framesDir)) {
  for (const old of readdirSync(framesDir)) {
    if (old.endsWith('.html')) rmSync(join(framesDir, old));
  }
} else {
  mkdirSync(framesDir, { recursive: true });
}

const paleta = tokens(spec.area);
const escritos = [];

spec.frames.forEach((fr, i) => {
  const num = String(i + 1).padStart(2, '0');
  const id = `${num}-${fr.slug}`;
  const fn = ARQUETIPOS[fr.tipo];
  if (!fn) {
    console.error(`  frame ${num}: tipo desconocido "${fr.tipo}"`);
    process.exit(1);
  }

  const f = new Frame({ id, duracion: ventana, tokens: paleta });
  try {
    fn(f, fr.datos);
  } catch (e) {
    console.error(`  frame ${num}: ${e.message}`);
    process.exit(1);
  }

  const html = f.toHTML();
  const out = join(framesDir, `${id}.html`);
  writeFileSync(out, html, 'utf8');
  escritos.push({ id, tipo: fr.tipo, titulo: fr.titulo, duracion: ventana, transition_in: fr.transition_in || 'cut' });
  console.log(`  ${id}.html  ${String(html.length).padStart(5)}b  ${fr.tipo}`);
});

writeFileSync(join(framesDir, '.build.json'), JSON.stringify(escritos, null, 2) + '\n', 'utf8');

/* El STORYBOARD del video se regenera desde el mismo spec, para que el doc
   y los frames no puedan separarse. */
const total = spec.frames.length * ventana;
const sb = [
  '---',
  'format: 1920x1080',
  `duration: ${total}s`,
  `message: ${JSON.stringify(spec.mensaje)}`,
  `arc: ${spec.arco}`,
  `audience: ${JSON.stringify(spec.audiencia)}`,
  'mode: autonomous',
  'music: none',
  '---',
  '',
  `# STORYBOARD — ${spec.titulo}`,
  '',
  '## Video direction',
  '',
  `**Estructura:** \`${spec.arco}\`. ${spec.estructura}`,
  '',
  `**Mesa de continuidad:** ${spec.continuidad}`,
  '',
  ...escritos.map((e, i) => {
    const fr = spec.frames[i];
    const beats = fr.beats.map((b) => `  - ${b}`).join('\n');
    return [
      `## Frame ${i + 1} — ${e.titulo}`,
      '',
      `- scene: ${fr.datos.grande || fr.datos.titulo || fr.datos.regla || e.tipo}`,
      '- voiceover: ""',
      `- duration: ${e.duracion}s`,
      `- poster: ${fr.poster}s`,
      `- transition_in: ${e.transition_in}`,
      '- status: animated',
      `- src: compositions/frames/${e.id}.html`,
      `- type: ${fr.tipo}`,
      `- narrationRole: ${fr.narrativeRole}`,
      `- keyMessage: ${fr.keyMessage}`,
      '',
      'Beats:',
      beats,
      '',
    ].join('\n');
  }),
  '## Continuidad',
  '',
  'Transiciones:',
  '',
  ...escritos.map((e, i) => `  - ${i + 1} -> ${i + 2}: ${e.transition_in}`).slice(0, -1),
  '',
].join('\n');

writeFileSync(join(proyecto, 'STORYBOARD.md'), sb, 'utf8');
console.log(`\n  STORYBOARD.md  ${total}s total`);
void slugDelCurso;
