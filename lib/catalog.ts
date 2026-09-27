import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Catalog, Curso } from './types';

/**
 * Lectura del catalogo.
 *
 * courses/catalog.json lo escribe scripts/build-catalog.mjs. Si el archivo no
 * esta (repo recien clonado, alguien borro el cache), se reconstruye desde las
 * carpetas en vez de romper la pagina.
 *
 * No se cachea en memoria a proposito: el archivo pesa poco y durante el
 * desarrollo se regenera seguido. Un cache de modulocia mostraria un catalogo
 * viejo hasta reiniciar el servidor, que es justo cuando uno ya no recuerda
 * que lo toco.
 */

export function getCatalog(): Catalog {
  const path = join(process.cwd(), 'courses', 'catalog.json');
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as Catalog;
  } catch {
    return fallbackCatalog();
  }
}

export function getCurso(slug: string): Curso | undefined {
  return getCatalog().cursos.find((c) => c.slug === slug);
}

export function getCursosPorArea(): Map<string, Curso[]> {
  const map = new Map<string, Curso[]>();
  for (const c of getCatalog().cursos) {
    const lista = map.get(c.area) ?? [];
    lista.push(c);
    map.set(c.area, lista);
  }
  return map;
}

/** Ultimo recurso si falta catalog.json: reconstruye desde los index.json. */
function fallbackCatalog(): Catalog {
  const cursos: Curso[] = [];
  try {
    const fs = require('node:fs') as typeof import('node:fs');
    const path = require('node:path') as typeof import('node:path');
    const dir = join(process.cwd(), 'courses');
    for (const slug of fs.readdirSync(dir)) {
      const p = join(dir, slug, 'index.json');
      if (!fs.existsSync(p)) continue;
      const c = JSON.parse(fs.readFileSync(p, 'utf8'));
      cursos.push({
        ...c,
        narration: c.narration ?? false,
        status: c.status ?? 'research',
        video: {
          composicion: null,
          framesMontadas: 0,
          mp4: `/videos/${slug}.mp4`,
          disponible: false,
          tamano: null,
        },
      });
    }
  } catch {
    return { generado: 'sin-archivo', total: 0, areas: [], cursos: [] };
  }
  return {
    generado: 'reconstruido',
    total: cursos.length,
    areas: [...new Set(cursos.map((c) => c.area))].sort(),
    cursos,
  };
}
