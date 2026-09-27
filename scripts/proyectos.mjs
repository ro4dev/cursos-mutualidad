/**
 * proyectos.mjs — el puente entre el slug de un curso y la carpeta de hyperframes
 * que lo compone.
 *
 * No son lo mismo, y por una razon buena: el slug identifica el curso en el
 * catalogo y en la URL publica (`courses/ley-karin/`, `/videos/ley-karin.mp4`),
 * mientras que la carpeta es el proyecto editable de HyperFrames, que se
 * nombra como se lee adentro del composition (`ley-karin-plazos`).
 *
 * El vinculo declarado es el campo "course" de `videos/<carpeta>/meta.json`.
 * Si no esta, se deduce: primero una carpeta de courses/ con el mismo nombre,
 * y si no, la unica carpeta de courses/ que sea prefijo de la carpeta del
 * proyecto. Y si tampoco, la carpeta misma.
 *
 * Se importa desde build-catalog.mjs y render-all.mjs, para que los dos
 * compartan un solo mapa y no se desincronicen.
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const COURSES_DIR = join(ROOT, 'courses');
export const PROJECTS_DIR = join(ROOT, 'videos');

/** Carpetas de courses/, ordenadas. */
export function cursos() {
  if (!existsSync(COURSES_DIR)) return [];
  return readdirSync(COURSES_DIR)
    .filter((s) => statSync(join(COURSES_DIR, s)).isDirectory())
    .sort();
}

/** Carpetas de videos/, ordenadas. */
export function proyectos() {
  if (!existsSync(PROJECTS_DIR)) return [];
  return readdirSync(PROJECTS_DIR)
    .filter((s) => statSync(join(PROJECTS_DIR, s)).isDirectory())
    .sort();
}

/** Slug del curso al que pertenece una carpeta de proyecto. */
export function slugDelCurso(carpeta) {
  const meta = join(PROJECTS_DIR, carpeta, 'meta.json');
  if (existsSync(meta)) {
    try {
      const declarado = JSON.parse(readFileSync(meta, 'utf8')).course;
      if (typeof declarado === 'string' && declarado) return declarado;
    } catch {
      // meta.json ilegible: se sigue con la deduccion de abajo.
    }
  }

  const slugs = cursos();
  if (slugs.includes(carpeta)) return carpeta;
  const queEmpiecenCon = slugs.filter((c) => carpeta.startsWith(c));
  if (queEmpiecenCon.length === 1) return queEmpiecenCon[0];

  return carpeta;
}

/** Carpeta de proyecto que compone un slug de curso, o null si no hay. */
export function proyectoDelCurso(slug) {
  for (const carpeta of proyectos()) {
    if (slugDelCurso(carpeta) === slug) return carpeta;
  }
  return null;
}
