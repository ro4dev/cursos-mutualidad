/**
 * acentos.mjs — detecta palabras del espanol que SIEMPRE llevan tilde.
 *
 * El copy que se ve en pantalla sale literal de la spec. Si la spec esta en
 * ASCII plano, el video muestra espanol sin tildes, y eso se ve amateur en un
 * curso chileno. En vez de confiar en acordarme, esto lo verifica.
 *
 * Dos mecanismos, por nivel de confianza:
 *
 * 1. REGLAS DE SUFIJO en codigo, para el grupo -cion / -sion. Es de altisima
 *    confianza y cubre un parciento de palabras de una sola vez. El plural de
 *    "relacion" es "relaciones" (con tilde, porque el acento cae en la
 *    penultima), no "relaciones" sin ella. Al ser una regla y no una lista,
 *    no depende de que alguien la haya agregado.
 *
 * 2. UNA LISTA en acentos-lista.txt para el resto, donde la regla no existe:
 *    hiatos (-ia, -ue, -io) y esdrujulas, casos donde el plural y el singular
 *    NO siguen la misma regla.
 *
 * Solo lo que es inequivoco. Una entrada dudosa produce ruido en cada spec, y
 * el ruido entrena a ignorar el chequeo.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const AQUI = dirname(fileURLToPath(import.meta.url));

/* ------------------------------------------------------------------ *
 * 1. Reglas de sufijo: -cion / -sion
 * ------------------------------------------------------------------ */

/**
 * El acento cae en la "o" o la "i" ante la terminacion.
 *
 * OJO CON EL PLURAL: `-cion` y `-sion` no tienen regla, porque el plural no
 * lleva tilde y no hay nada que decidir. "canción" es aguda de hiato y por eso
 * se escribe con tilde, pero al sumarle la "es" el acento pasa a ser
 * llano y desaparece: canci**o**nes, condi**o**nes, relacio**o**nes, presio**o**nes.
 *
 * Esto salio de un error propio. La primera version de esta tabla tenia reglas
 * para el plural y proponia "condiciónes", una palabra que no existe; la
 * invariante de acentuar-specs.mjs (los diacriticos eliminados tienen que dar
 * el mismo texto) lo agarro al primer spec con "recomendaciones".
 *
 * El orden importa igual: "presiones" no matchea `ciones$` porque termina en
 * "iones", asi que cae en la regla de -sion.
 */
const REGLAS_SUFIJO = [
  [/(.*)cion$/, '$1ción'],
  [/(.*)sion$/, '$1sión'],
];

/** Devuelve la forma acentuada segun sufijo, o null si ninguna regla aplica. */
function porSufijo(plano) {
  for (const [re, rep] of REGLAS_SUFIJO) {
    if (re.test(plano)) return plano.replace(re, rep);
  }
  return null;
}

/* ------------------------------------------------------------------ *
 * 2. Lista curada
 * ------------------------------------------------------------------ */

/** Indice plano: forma sin tilde -> forma con tilde. */
export const CON_TILDE = new Map();

for (const linea of readFileSync(join(AQUI, 'acentos-lista.txt'), 'utf8').split('\n')) {
  const t = linea.trim();
  if (!t || t.startsWith('#')) continue;
  const corte = t.indexOf('=');
  if (corte < 1) continue;
  CON_TILDE.set(t.slice(0, corte), t.slice(corte + 1));
}

/**
 * Palabras que el detector NO debe exigir tilde. Entran por dos motivos
 * distintos y conviene no mezclarlos al leer:
 *
 * 1. La palabra va sin tilde y la lista la podria confundir. "aun" es la
 *    unica realmente en riesgo: "aun asi" y "aun cuando" van con tilde, pero
 *    "aun" por si solo no, y el costo de exigirla seria ruido constante. El
 *    resto (solo, esta, como, cuando, donde...) casi nunca se confunde, pero
 *    dejarlas listadas es la red que las atrapa si la lista crece de mas.
 *
 * 2. La lista se equivoco. "video" es el unico caso, y no por confusion sino
 *    por dialecto: ver el comentario de la entrada.
 *
 * "mas" NO esta aqui a proposito. "mas" como conjunction casi no aparece en
 * este corpus; "mas de N personas" y "lo mas importante" si, y esos van con
 * tilde. Un falso positivo cuesta un acento de mas; un falso negativo es
 * espanol sin tilde en pantalla.
 */
export const SIN_TILDE_PERMITIDO = new Set([
  'aun', 'solo', 'esta', 'este', 'esto', 'esa', 'ese', 'eso', 'estos', 'esos',
  'como', 'cuando', 'donde', 'contra', 'durante', 'mediante', 'tampoco',
  'tanto', 'sin', 'sobre', 'solo', 'esta', 'cuanto', 'cuantos', 'cuantas',
  /* "video" no es una palabra que la lista confunda: es una entrada que la
     lista tenia mal. La RAE acepta las dos formas y en Espana manda la
     acentuada, pero Chile escribe "video" sin tilde y el repositorio es
     es-CL. Exigirla metia "vídeo" en 970 lugares, casi todos prosa interna
     y no copy en pantalla. */
  'video', 'videos',
]);

/* ------------------------------------------------------------------ *
 * API
 * ------------------------------------------------------------------ */

const SIN_DIACRITICOS = /[̀-ͯ]/g;

/**
 * Devuelve las palabras de `texto` que van sin tilde donde siempre van con
 * tilde.
 *
 * La clave de la comparacion es el token ORIGINAL contra la forma acentuada:
 * si el texto ya venia acentuado, el token plano se reconstruye quitando
 * los diacriticos pero el original no coincide con la forma acentuada, y no
 * hay hallazgo. Asi no hay que distinguir "traia" de "traía" en el codigo.
 *
 * @param {string} texto
 * @returns {{palabra: string, deberia: string}[]}
 */
export function sinTildes(texto) {
  const hallazgos = [];
  const vistos = new Set();

  for (const original of texto.match(/[\p{L}]+/gu) || []) {
    const plano = original.normalize('NFD').replace(SIN_DIACRITICOS, '').toLowerCase();

    if (plano.length < 3) continue;
    if (vistos.has(plano)) continue;
    if (SIN_TILDE_PERMITIDO.has(plano)) continue;

    const deberia = CON_TILDE.get(plano) || porSufijo(plano);
    if (!deberia) continue;

    // el token ya traia la tilde: no hay nada que reportar
    if (original.toLowerCase() === deberia) continue;

    vistos.add(plano);
    hallazgos.push({ palabra: original, deberia });
  }

  return hallazgos;
}
