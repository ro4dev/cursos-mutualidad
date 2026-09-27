#!/usr/bin/env node
/**
 * build-catalog.mjs — arma courses/catalog.json a partir de las carpetas.
 *
 * El visor Next.js lee un solo archivo. Este script lo regenera desde las
 * carpetas, de modo que agregar un curso es agregar una carpeta y correr el
 * script, no editar JSON a mano.
 *
 * Detecta el estado real de cada curso en disco, sin asumir nada:
 *  - `composicion`: solo si existe videos/<slug>/index.html Y ese archivo
 *    referencia los frames. El scaffold que crea `hyperframes init` tambien
 *    deja un index.html, pero vacio, y apuntar ahi seria mostrar un
 *    placeholder como si fuera el video.
 *  - `disponible`: solo si el MP4 existe de verdad en public/videos/.
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COURSES_DIR = join(ROOT, 'courses');
const PROJECTS_DIR = join(ROOT, 'videos');
const VIDEOS_DIR = join(ROOT, 'public', 'videos');

const AREA_ORDER = [
  'Legal / Acoso',
  'Legal / Derechos',
  'Derecho Laboral',
  'Seguridad',
  'Bienestar',
  'Cultura',
  'Habilidades',
  'Liderazgo',
  'Onboarding',
];

function composicionReal(slug) {
  const proyecto = join(PROJECTS_DIR, slug);
  const indexPath = join(proyecto, 'index.html');
  if (!existsSync(indexPath)) return null;

  const framesDir = join(proyecto, 'compositions', 'frames');
  if (!existsSync(framesDir)) return null;

  const frames = readdirSync(framesDir).filter((f) => f.endsWith('.html'));
  if (frames.length === 0) return null;

  const html = readFileSync(indexPath, 'utf8');
  const montadas = frames.filter((f) => html.includes(f.replace(/\.html$/, '')));
  if (montadas.length === 0) return null;

  return { ruta: `/composiciones/${slug}/`, frames: montadas.length, de: frames.length };
}

if (!existsSync(COURSES_DIR)) {
  console.error('courses/ no existe. Corre antes: node scripts/gen-courses.mjs <slug>');
  process.exit(1);
}

const slugs = readdirSync(COURSES_DIR).filter((s) => statSync(join(COURSES_DIR, s)).isDirectory());

const cursos = slugs
  .map((slug) => {
    const p = join(COURSES_DIR, slug, 'index.json');
    if (!existsSync(p)) return null;

    const c = JSON.parse(readFileSync(p, 'utf8'));
    const mp4 = join(VIDEOS_DIR, `${slug}.mp4`);
    const disponible = existsSync(mp4);
    const comp = composicionReal(slug);

    let status = c.status || 'research';
    if (disponible) status = 'rendered';
    else if (comp) status = 'composed';

    return {
      slug: c.slug,
      titulo: c.titulo,
      area: c.area,
      mensaje: c.mensaje,
      duracion: c.duracion,
      aspect: c.aspect,
      language: c.language,
      angle: c.angle,
      narration: Boolean(c.narration),
      status,
      fuente: c.fuente,
      video: {
        composicion: comp ? comp.ruta : null,
        framesMontadas: comp ? comp.frames : 0,
        mp4: `/videos/${slug}.mp4`,
        disponible,
        tamano: disponible ? statSync(mp4).size : null,
      },
    };
  })
  .filter(Boolean);

cursos.sort((a, b) => {
  const ai = AREA_ORDER.indexOf(a.area);
  const bi = AREA_ORDER.indexOf(b.area);
  const ra = ai === -1 ? 99 : ai;
  const rb = bi === -1 ? 99 : bi;
  if (ra !== rb) return ra - rb;
  return a.titulo.localeCompare(b.titulo, 'es');
});

const areas = [...new Set(cursos.map((c) => c.area))].sort(
  (a, b) => AREA_ORDER.indexOf(a) - AREA_ORDER.indexOf(b),
);

const catalog = {
  generado: new Date().toISOString().slice(0, 10),
  total: cursos.length,
  areas,
  cursos,
};

writeFileSync(join(COURSES_DIR, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n', 'utf8');

const conMp4 = cursos.filter((c) => c.video.disponible).length;
const compuestas = cursos.filter((c) => c.video.composicion).length;
console.log(
  `catalog.json: ${cursos.length} cursos, ${areas.length} areas, ` +
    `${compuestas} con composicion ensamblada, ${conMp4} con MP4`,
);
