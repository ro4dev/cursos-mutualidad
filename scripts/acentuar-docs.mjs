/**
 * acentuar-docs.mjs — pone tildes en la prosa de los documentos del repo.
 *
 *   node scripts/frames/acentuar-docs.mjs [--escribir] [ruta ...]
 *
 * No es un corrector de ortografia: es un aplicador del detector de
 * scripts/frames/acentos.mjs, que solo sabe de un grupo acotado de palabras.
 * Lo que no conoce lo deja como esta.
 *
 * Se distingue de acentuar-specs.mjs en que trabaja sobre prosa, no sobre
 * literales de JS. Tres formatos:
 *
 *   .md    prosa, saltando vallas de codigo, codigo en linea y cualquier token
 *          que parezca una ruta o un nombre de archivo.
 *   .json  solo valores de string, saltando claves identificadoras.
 *   .mjs   el mismo mini-lexer de acentuar-specs.mjs, con mas campos identifi-
 *          cadores porque la tabla de PLAN los usa como nombres de archivo.
 *
 * Garantias, y las tres estan testeadas en negativo (ver el final del archivo):
 *
 *  1. Solo agrega diacriticos. El texto antes y despues, con los diacriticos
 *     eliminados y en minuscula, tiene que dar identico.
 *
 *  2. Ningun token que parezca ruta, archivo o slug cambia de byte. Este es el
 *     invariante nuevo, y es el que importa: acentuar `INVESTIGACION.md`
 *     produciria un enlace roto en todos los documents que lo citan.
 *
 *  3. Las vallas de codigo y el codigo en linea quedan byte a byte igual, que
 *     es la convencion del repo: el codigo en ASCII plano, el copy acentuado.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { extname } from 'node:path';

import { sinTildes } from './frames/acentos.mjs';

const ESCRIBIR = process.argv.includes('--escribir');
const RUTAS = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const SIN_DIACRITICOS = /[̀-ͯ]/g;
const plano = (s) => s.normalize('NFD').replace(SIN_DIACRITICOS, '').toLowerCase();

/* Campos cuyo valor es un identificador, no prosa. */
const IDENTIFICADOR = new Set([
  'slug', 'tipo', 'poster', 'transition_in', 'area', 'id', 'path', 'dir',
  'src', 'url', 'href', 'file', 'composicion', 'video', 'index', 'script',
]);

/* Un token con separador de ruta, o con una extension de archivo conocida.
   El invariante 2 exige que estos queden byte a byte igual.

   Dos decisiones que parecen detalles y no lo son:

   - La extension se lista en vez de usar un patron `\\.[a-z]+` generico. Un
     punto de cierre de oracion tambien cumple eso, y el patron generico se
     comia la ultima palabra de cada frase.

   - `\\w` es ASCII, asi que en cuanto una palabra lleva tilde deja de contar
     como `\\w` y el token se parte: `INVESTIGACION.md` acentuado daria
     `N.md` como match. Por eso un token con barra se protege entero y no se
     acentua nunca. El costo es no acentuar `compresion/ventilacion` en un
     documento medico, que es una falta menor; la alternativa es romper cinco
     referencias a `INVESTIGACION.md` en el mismo archivo. */
const RUTA = /(?:[\w-]+\/)+[\w./-]*[\w-]+|\b[\w-]+\.(?:md|mjs|json|html|txt|ts|tsx|js|css|mp4|yaml|yml)\b/gi;

/** Misma forma con la caja del original: "COMUNICACION" -> "COMUNICACIÓN". */
function conCaja(original, acentuado) {
  if (original === original.toUpperCase() && original.length > 1) return acentuado.toUpperCase();
  if (original[0] === original[0].toUpperCase()) return acentuado[0].toUpperCase() + acentuado.slice(1);
  return acentuado;
}

/* --------------------------------------------------------------------- *
 * Mapa de correcciones para un tramo de texto.
 * --------------------------------------------------------------------- */
function correccionesDe(texto) {
  const hallazgos = sinTildes(texto);
  if (!hallazgos.length) return null;
  const mapa = new Map(hallazgos.map((h) => [h.palabra, conCaja(h.palabra, h.deberia)]));
  const alternativas = [...mapa.keys()]
    .map((p) => '(?<!\\p{L})' + p.replace(/[.*+?^$()|[\]\\]/g, '\\$&') + '(?!\\p{L})')
    .join('|');
  return { mapa, patron: new RegExp(alternativas, 'gu') };
}

/** Aplica el mapa a un tramo, y registra los cambios. */
function aplicar(texto, cambios) {
  const info = correccionesDe(texto);
  if (!info) return texto;
  return texto.replace(info.patron, (m) => {
    if (!info.mapa.has(m)) return m;
    cambios.set(m, info.mapa.get(m));
    return info.mapa.get(m);
  });
}

/**
 * Saca del alcance los tramos que tienen que quedar byte a byte igual y los
 * devuelve con un marcador, para que despues se reinserten. Es lo que impide
 * acentuar el interior de una ruta o de un nombre de archivo.
 */
function enmascara(texto, protegido) {
  return texto.replace(RUTA, (t) => {
    if (t.includes('\u0000')) return t;
    protegido.push(t);
    return '\u0000' + (protegido.length - 1) + '\u0000';
  });
}

/** Reinserta los tramos que enmascara() habia sacado. */
function desenmascara(texto, protegido) {
  return texto.replace(/\u0000(\d+)\u0000/g, (_, n) => protegido[+n]);
}

/* --------------------------------------------------------------------- *
 * .md — prosa, saltando vallas, codigo en linea y rutas.
 * --------------------------------------------------------------------- */
function acentuarMd(src, cambios) {
  /* Segmentos protegidos: ```...``` y `...`. */
  const protegido = [];
  let salida = '';
  let i = 0;

  while (i < src.length) {
    /* La valla se consume entera, asi que su contenido nunca llega al paso de
       codigo en linea: no hace falta llevar un estado de "dentro de valla". */
    if (src.startsWith('```', i)) {
      const fin = src.indexOf('```', i + 3);
      const hasta = fin < 0 ? src.length : fin + 3;
      const trozo = src.slice(i, hasta);
      protegido.push(trozo);
      salida += '\u0000' + (protegido.length - 1) + '\u0000';
      i = hasta;
      continue;
    }
    if (src[i] === '`') {
      const fin = src.indexOf('`', i + 1);
      const hasta = fin < 0 ? src.length : fin + 1;
      const trozo = src.slice(i, hasta);
      protegido.push(trozo);
      salida += '\u0000' + (protegido.length - 1) + '\u0000';
      i = hasta;
      continue;
    }
    salida += src[i];
    i++;
  }

  /* Dentro de la prosa, los tokens que parecen ruta tampoco se tocan. El
     reemplazo es sobre un texto que ya tiene los tramos protegidos por
     marcador, asi que un RUTA nunca puede cortar un marcador al medio. */
  salida = enmascara(salida, protegido);

  salida = aplicar(salida, cambios);

  return desenmascara(salida, protegido);
}

/* --------------------------------------------------------------------- *
 * .json — solo valores de string, saltando claves identificadoras.
 * --------------------------------------------------------------------- */
function acentuarJson(src, cambios) {
  const protegido = [];
  let salida = '';
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '"') {
      let j = i + 1;
      while (j < src.length && src[j] !== '"') {
        if (src[j] === '\\') j++;
        j++;
      }
      const crudo = src.slice(i, j + 1);
      const interior = crudo.slice(1, -1);

      /* La clave es lo que hay entre : y la comilla de apertura. */
      let k = i - 1;
      while (k >= 0 && /\s/.test(src[k])) k--;
      if (k >= 0 && src[k] === ':') {
        k--;
        while (k >= 0 && /\s/.test(src[k])) k--;
        /* Detras del `:` esta la comilla de CIERRE de la clave, no su ultima
           letra: sin este salto el identificador salia vacio y la clave nunca
           llegaba a compararse contra IDENTIFICADOR. */
        if (k >= 0 && src[k] === '"') k--;
        const fin = k + 1;
        while (k >= 0 && /[\w$]/.test(src[k])) k--;
        const clave = src.slice(k + 1, fin);
        if (IDENTIFICADOR.has(clave) || interior.includes('/') || /\.[a-z]{2,4}$/i.test(interior)) {
          salida += crudo;
          i = j + 1;
          continue;
        }
      }
      salida += '"' + aplicar(enmascara(interior, protegido), cambios) + '"';
      i = j + 1;
      continue;
    }
    salida += c;
    i++;
  }
  return desenmascara(salida, protegido);
}

/* --------------------------------------------------------------------- *
 * .mjs — el mini-lexer de acentuar-specs.mjs.
 * --------------------------------------------------------------------- */
const CIERRE = { "'": "'", '"': '"', '`': '`' };

function claveDe(src, i) {
  let j = i - 1;
  while (j >= 0 && /\s/.test(src[j])) j--;
  if (j < 0 || src[j] !== ':') return '';
  j--;
  while (j >= 0 && /\s/.test(src[j])) j--;
  const fin = j + 1;
  while (j >= 0 && /[\w$]/.test(src[j])) j--;
  const clave = src.slice(j + 1, fin);
  if (!clave) return '';
  if (j >= 0 && !/[\s,{([]/.test(src[j])) return '';
  return clave;
}

function acentuarMjs(src, cambios) {
  const protegido = [];
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
      const interior = src.slice(i + 1, j);
      const clave = claveDe(src, i);
      if (IDENTIFICADOR.has(clave)) salida += src.slice(i, j + 1);
      else salida += comilla + aplicar(enmascara(interior, protegido), cambios) + comilla;
      i = j + 1;
      continue;
    }
    salida += src[i];
    i++;
  }
  return desenmascara(salida, protegido);
}

/* --------------------------------------------------------------------- *
 * Invariantes.
 * --------------------------------------------------------------------- */

/** Los tokens que parecen ruta tienen que ser identicos byte a byte. */
function rutasDe(txt) {
  return (txt.match(RUTA) || []).sort();
}

function invariantes(ruta, antes, salida) {
  const problemas = [];

  if (plano(antes) !== plano(salida)) {
    const a = plano(antes);
    const b = plano(salida);
    let i = 0;
    while (i < Math.max(a.length, b.length) && a[i] === b[i]) i++;
    problemas.push(`cambio no es solo diacriticos, en el caracter ${i}: ${JSON.stringify(a.slice(i - 20, i + 20))} -> ${JSON.stringify(b.slice(i - 20, i + 20))}`);
  }

  const ra = rutasDe(antes);
  const rb = rutasDe(salida);
  if (ra.join('\n') !== rb.join('\n')) {
    const enAntes = new Set(ra);
    const enSalida = new Set(rb);
    /* Ojo con el nombre: esto es lo que hay en la salida y no estaba antes, o
       sea lo que el paso introdujo. */
    const metidos = rb.filter((t) => !enAntes.has(t));
    /* Y esto es lo que estaba y ya no esta: lo que el paso rompio. */
    const rotos = ra.filter((t) => !enSalida.has(t));
    problemas.push(
      `cambio un token de ruta: rompio ${JSON.stringify(rotos)} y metio ${JSON.stringify(metidos)}`
    );
  }

  if (antes.split('\n').length !== salida.split('\n').length) {
    problemas.push(`cambio la cantidad de lineas: ${antes.split('\n').length} -> ${salida.split('\n').length}`);
  }

  return problemas;
}

/* --------------------------------------------------------------------- *
 * corrida
 * --------------------------------------------------------------------- */
const MODOS = { '.md': acentuarMd, '.json': acentuarJson, '.mjs': acentuarMjs };

let totalCambios = 0;
const rechazados = [];

for (const ruta of RUTAS) {
  const modo = MODOS[extname(ruta)];
  if (!modo) {
    console.error(`${ruta}: extension sin modo, se omite`);
    continue;
  }

  const antes = readFileSync(ruta, 'utf8');
  const cambios = new Map();
  const salida = modo(antes, cambios);

  const problemas = invariantes(ruta, antes, salida);
  if (problemas.length) {
    console.error(`\n${ruta}: DESCARTADO`);
    for (const p of problemas) console.error(`  ${p}`);
    rechazados.push(ruta);
    continue;
  }

  if (cambios.size) {
    totalCambios += cambios.size;
    if (ESCRIBIR) writeFileSync(ruta, salida, 'utf8');
    console.log(`${ruta}: ${cambios.size} palabra(s)`);
    for (const [de, a] of cambios) console.log(`  ${de}  ->  ${a}`);
  } else {
    console.log(`${ruta}: sin cambios`);
  }
}

console.log(`\ntotal: ${totalCambios} palabra(s) distinta(s), ${rechazados.length} archivo(s) descartado(s)`);
if (!ESCRIBIR) console.log('dry run: falta --escribir para modificar');
console.log();
process.exit(rechazados.length ? 1 : 0);
