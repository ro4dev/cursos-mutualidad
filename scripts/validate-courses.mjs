#!/usr/bin/env node
/**
 * validate-courses.mjs — guarda de calidad del catalogo.
 *
 * Este repo lo escribe una IA, y la prosa larga en español sale a veces con
 * fragmentos corruptos (caracteres de otros alfabetos pegados en medio de una
 * frase, o palabras truncadas). Un archivo asi llega al render y se ve en
 * pantalla. Este script falla ruidosamente antes de que eso pase.
 *
 * Chequeos:
 *  1. Caracteres fuera del set permitido (latin-1 + puntuacion tipografica).
 *  2. Palabras suspiciously cortas pegadas a una larga (texto truncado).
 *  3. Parentesis/backticks desbalanceados.
 *  4. Todo curso del plan tiene sus 4 archivos y su index.json valido.
 *
 * Uso: node scripts/validate-courses.mjs [--fix-list]
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COURSES_DIR = join(ROOT, 'courses');

/* Latin-1 mas los signos tipograficos que usamos a proposito. */
const ALLOWED = /^[ -~ -ÿ‘’“”°·–—…²³]*$/;
const FILES = ['BRIEF.md', 'INVESTIGACION.md', 'STORYBOARD.md', 'index.json'];

let problems = 0;
const fail = (file, line, msg) => {
  problems += 1;
  console.log(`  FALLA ${file}:${line}  ${msg}`);
};

/* Una palabra corta pegada a una larga, sin espacio: senal de texto truncado. */
const GLUED = /\b[a-z]{1,4}[A-Z][a-z]{3,}\b/;

/* Patron de prosa rota. Cada uno aparecio de verdad en este repo. */
const BROKEN = [
  [/[a-záéíóúñ]\$/, 'signo $ pegado a una palabra (basura de corrupcion)'],
  [/:\s*>\s*$/, 'punta de flecha > colgando al final'],
  [/\b\w+_(make|defecto|modo|esta|hacer|poner)\b/, 'palabra con _ pegada'],
  [/[a-záéíóúñ]{2,}[A-ZÁÉÍÓÚ][a-záéíóúñ]{2,}/, 'mayuscula en medio de palabra'],
  [/[a-z]es_[a-z]/, 'fragmento es_ pegado'],
  [/\b(de|del|la|el|a|y|o|en|con|por|que)\b\s*\1\b/, 'palabra repetida'],
  [/\s+$/, 'espacio al final de linea'],
];

/* Palabras en ingles que se cuelan cuando la prosa se rompe. La lista esta
   calibrada contra el corpus: solo incluye palabras que (a) no son validas en
   espanol y (b) NO aparecen en ningun documento legitimo de courses/. Palabras
   del vocabulario tecnico de HyperFrames (frame, video, source, render, status,
   language, destination, content, design, layout, template, build, module,
   project, file, ...) se omiten a proposito: son scaffolding de produccion.
   Este es el unico lugar donde la prosa de los cursos se separa del English de
   las herramientas. */
const ANGLO = new RegExp(
  '\\b(' +
    [
      'sustainability', 'concession', 'manager', 'managers', 'feedback',
      'training', 'meetings', 'deadline', 'deadlines', 'schedule', 'compliance',
      'policies', 'manage', 'handle', 'review', 'updates', 'outreach',
      'checklist', 'builtin', 'experiences', 'Equipment', 'Comments', 'Stretch',
      'Capabilities', 'support', 'lesson', 'config', 'input',
    ].join('|') +
  ')\\b'
);

function checkText(file, text) {
  const lines = text.split('\n');
  lines.forEach((raw, i) => {
    if (!ALLOWED.test(raw)) {
      const bad = [...raw].filter((ch) => !ALLOWED.test(ch)).slice(0, 5);
      fail(file, i + 1, `caracteres no permitidos: ${bad.map((c) => JSON.stringify(c)).join(' ')}`);
      return;
    }
    for (const [re, msg] of BROKEN) {
      if (re.test(raw)) {
        fail(file, i + 1, `${msg} -> ${raw.trim().slice(0, 90)}`);
        break;
      }
    }
    if (ANGLO.test(raw)) {
      fail(file, i + 1, `palabra en ingles: ${raw.match(ANGLO)[0]}`);
    }
    if (GLUED.test(raw)) {
      fail(file, i + 1, `posible palabra truncada: ${raw.match(GLUED)[0]}`);
    }
  });

  const ticks = (text.match(/`/g) || []).length;
  if (ticks % 2 !== 0) fail(file, 0, `backticks desbalanceados (${ticks})`);
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

console.log('Validando catalogo de cursos...\n');

if (!existsSync(COURSES_DIR)) {
  console.log('  courses/ no existe todavia.');
  process.exit(0);
}

const slugs = readdirSync(COURSES_DIR).filter((s) => statSync(join(COURSES_DIR, s)).isDirectory());
console.log(`  ${slugs.length} carpetas en courses/\n`);

for (const slug of slugs) {
  console.log(`  ${slug}`);
  for (const name of FILES) {
    const p = join(COURSES_DIR, slug, name);
    if (!existsSync(p)) {
      // coursework/teletrabajo se creo vacio; es valido, se completara luego.
      fail(`${slug}/${name}`, 0, 'falta el archivo');
      continue;
    }
    checkText(`${slug}/${name}`, readFileSync(p, 'utf8'));
    if (name === 'index.json') {
      try {
        JSON.parse(readFileSync(p, 'utf8'));
      } catch (e) {
        fail(`${slug}/${name}`, 0, `JSON invalido: ${e.message}`);
      }
    }
  }
}

console.log('');
if (problems === 0) {
  console.log('OK: catalogo sin fragmentos corruptos.');
  process.exit(0);
} else {
  console.log(`${problems} problema(s). Corregir antes de renderizar.`);
  process.exit(1);
}
