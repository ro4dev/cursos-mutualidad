/**
 * acentuar-specs.mjs — pone tildes en las specs de frames, de a una palabra.
 *
 *   node scripts/frames/acentuar-specs.mjs <slug> [...]
 *
 * No es un corrector de ortografia: es un aplicador del detector de
 * scripts/frames/acentos.mjs, que solo sabe de un grupo acotado de palabras.
 * Lo que no conoce lo deja como esta.
 *
 * El script garantiza cuatro cosas:
 *
 *  1. Solo toca el interior de literales de string. El codigo alrededor queda
 *     byte a byte igual. Se hace con un lector propio y no con una regex sobre
 *     la linea porque el valor de una clave puede estar en la linea siguiente
 *     (`nota:\n  'texto'`) y hay objetos en una sola linea
 *     (`{ n: '02', head: 'Agresivo', gloss: '...' }`). Un trabajo por linea
 *     se comia esos casos.
 *
 *  2. Nunca toca un campo identificador. `slug`, `tipo`, `poster`,
 *     `transition_in` y `area` son claves de rutas y de nombres de archivo.
 *     Se detectan mirando la clave que precede al literal, no la linea.
 *
 *  2b. Nunca toca un comentario, y esa es la convencion del repo: el codigo
 *     se escribe en ASCII plano, el copy de pantalla va acentuado. La razon
 *     tecnica es que los comentarios citan rutas reales (`INVESTIGACION.md`)
 *     y slugs, y acentuarlos no solo es ruido: miente sobre el nombre.
 *
 *  3. Nunca cambia letras. Solo agrega diacriticos: se compara el texto antes
 *     y despues con los diacriticos eliminados y en minuscula, y tiene que dar
 *     identico. Si no, se descarta el cambio y se avisa. (Este control ya
 *     atrapo un bug: al dejar `salida` vacia cuando no habia hallazgos, se
 *     perdia el valor de la linea entera.)
 *
 *  4. Imprime cada cambio. Para revisarlo, no para confiarse.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { sinTildes } from './acentos.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

/* Campos cuyo valor es un identificador, no prosa. */
const IDENTIFICADOR = new Set(['slug', 'tipo', 'poster', 'transition_in', 'area']);

const CIERRE = { "'": "'", '"': '"', '`': '`' };

const SIN_DIACRITICOS = /[̀-ͯ]/g;
const plano = (s) => s.normalize('NFD').replace(SIN_DIACRITICOS, '').toLowerCase();

/** Misma forma con la caja del original: "COMUNICACION" -> "COMUNICACIÓN". */
function conCaja(original, acentuado) {
  if (original === original.toUpperCase() && original.length > 1) return acentuado.toUpperCase();
  if (original[0] === original[0].toUpperCase()) return acentuado[0].toUpperCase() + acentuado.slice(1);
  return acentuado;
}

/**
 * Clave a la izquierda del literal que arranca en `i`, o '' si no hay.
 *
 * Se mira para atras saltando espacios y, si aparece un `:` antes de un salto
 * de linea o de una `,` o un `{`, la clave es el identificador que lo precede.
 * Con eso `nota:\n  'x'` da `nota` y `[{ n: '1' }]` da `n`.
 */
function claveDe(src, i) {
  let j = i - 1;
  while (j >= 0 && /[\s]/.test(src[j])) j--;
  if (j < 0 || src[j] !== ':') return '';
  j--;
  while (j >= 0 && /\s/.test(src[j])) j--;
  let fin = j + 1;
  while (j >= 0 && /[\w$]/.test(src[j])) j--;
  const clave = src.slice(j + 1, fin);
  if (!clave) return '';
  /* Antes de la clave tiene que haber un separador, no texto pegado. */
  if (j >= 0 && !/[\s,{([]/.test(src[j])) return '';
  return clave;
}

/**
 * Reemplaza solo dentro de literales de string, y solo los que no sean el
 * valor de un campo identificador. Devuelve el texto y la lista de cambios.
 */
function acentuar(src) {
  const cambios = [];
  const descartados = [];
  let salida = '';
  let i = 0;

  while (i < src.length) {
    const dos = src.slice(i, i + 2);

    if (dos === '/*') {
      const fin = src.indexOf('*/', i + 2);
      const hasta = fin < 0 ? src.length : fin + 2;
      salida += src.slice(i, hasta);
      i = hasta;
      continue;
    }
    if (dos === '//') {
      const fin = src.indexOf('\n', i);
      const hasta = fin < 0 ? src.length : fin;
      salida += src.slice(i, hasta);
      i = hasta;
      continue;
    }
    if (CIERRE[src[i]]) {
      const comilla = src[i];
      let j = i + 1;
      while (j < src.length && src[j] !== comilla) {
        if (src[j] === '\\') j++;
        j++;
      }
      const crudo = src.slice(i, j + 1);
      const interior = crudo.slice(1, -1);

      if (IDENTIFICADOR.has(claveDe(src, i))) {
        salida += crudo;
      } else {
        salida += comilla + acentoEn(interior, cambios, descartados) + comilla;
      }
      i = j + 1;
      continue;
    }

    salida += src[i];
    i++;
  }

  return { salida, cambios, descartados };
}

/** Aplica el detector a un interior de literal, respetando los escapes. */
function acentoEn(interior, cambios, descartados) {
  const hallazgos = sinTildes(interior);
  if (!hallazgos.length) return interior;

  /* Una sola pasada: el detector devuelve una palabra por cada forma distinta,
     y un solo replace evita el problema de re-escanear texto ya cambiado. */
  const correcciones = new Map(hallazgos.map((h) => [h.palabra, conCaja(h.palabra, h.deberia)]));
  for (const h of hallazgos) cambios.push({ de: h.palabra, a: correcciones.get(h.palabra) });

  const alternativas = [...correcciones.keys()]
    .map((p) => '(?<!\\p{L})' + p.replace(/[.*+?^$()|[\]\\]/g, '\\$&') + '(?!\\p{L})')
    .join('|');
  const patron = new RegExp(alternativas, 'gu');

  const salida = interior.replace(patron, (m) => {
    if (!correcciones.has(m)) {
      descartados.push({ palabra: m, contexto: interior.slice(0, 60) });
      return m;
    }
    return correcciones.get(m);
  });

  return salida;
}

const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error('Uso: node scripts/frames/acentuar-specs.mjs <slug> [...]');
  process.exit(1);
}

let totalCambios = 0;
let totalDescartados = 0;

for (const slug of slugs) {
  const ruta = join(ROOT, 'courses', slug, 'frames.spec.mjs');
  const antes = readFileSync(ruta, 'utf8');
  const { salida, cambios, descartados } = acentuar(antes);

  /* La invariante: si se perdio o se invento una letra, no se escribe. */
  if (plano(antes) !== plano(salida)) {
    console.error(`\n${slug}: DESCARTADO — el cambio no es solo diacriticos`);
    const a = plano(antes);
    const b = plano(salida);
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        console.error(`  primera diferencia en el caracter ${i}:`);
        console.error(`    antes:    ${JSON.stringify(a.slice(Math.max(0, i - 30), i + 30))}`);
        console.error(`    despues: ${JSON.stringify(b.slice(Math.max(0, i - 30), i + 30))}`);
        break;
      }
    }
    totalDescartados += 1;
    continue;
  }

  if (cambios.length) writeFileSync(ruta, salida, 'utf8');
  totalCambios += cambios.length;
  totalDescartados += descartados.length;

  const unicos = new Map(cambios.map((c) => [c.de, c.a]));
  console.log(`\n${slug}: ${cambios.length} cambio(s), ${unicos.size} palabra(s) distinta(s)`);
  for (const [de, a] of unicos) console.log(`  ${de}  ->  ${a}`);
  for (const d of descartados) console.log(`  (sin aplicar: "${d.palabra}" en "${d.contexto}")`);
}

console.log(`\ntotal: ${totalCambios} cambio(s), ${totalDescartados} descartado(s)\n`);
