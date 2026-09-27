#!/usr/bin/env node
/**
 * check-selectors.mjs — guard de CSS y JS para los frames de un composition.
 *
 * Uso:
 *   node scripts/check-selectors.mjs                       -> todos los frames
 *   node scripts/check-selectors.mjs videos/x/compositions/frames/07-y.html
 *
 * Existe por cuatro fallos que `hyperframes check` NO ve, y que los cuatro
 * dejan el frame "funcionando" mientras se ve roto:
 *
 *   1. Un identificador CSS que empieza con digito. En una hoja de estilos
 *      `#07-dos-rutas-title` y `.07-dos-rutas-card` son selectores INVALIDOS:
 *      la regla entera se descarta, sin error ni aviso. Un frame queda sin
 *      estilos y sigue "funcionando".
 *   2. Un selector de atributo `[id="x"]` o una clase `.x` que el HTML nunca
 *      define. La regla no hace nada y nadie se entera.
 *   3. Un id que el CSS o el JS piden con un nombre y el HTML define con otro
 *      (un prefijo de mas o de menos). El elemento existe, pero la animacion
 *      no lo encuentra: `q()` devuelve null y el tween se pierde en silencio.
 *   4. `line-height` en cqh junto a un `font-size` en cqw. 1cqw = 19.2px y
 *      1cqh = 10.8px, asi que `font-size: 2.6cqw` con `line-height: 2.708cqh`
 *      son 50px de cuerpo y 29px de linea: las lineas se montan unas en
 *      otras. El interlineado tiene que ser multiplo del cuerpo, o sea cqw.
 *
 * Salida: una linea por archivo, y el detalle de cada problema debajo.
 * Codigo de salida 1 si algo falla, para poder cortarlo en un pipeline.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Un atributo id, no un data-composition-id ni un id dentro de un selector. */
const ATRIBUTO_ID = /(?<![-\w])id="([^"]+)"/g;

function bloques(texto, etiqueta) {
  const salida = [];
  const re = new RegExp(`<${etiqueta}>([\\s\\S]*?)</${etiqueta}>`, 'g');
  for (const m of texto.matchAll(re)) {
    salida.push(m[1]);
  }
  return salida;
}

/** Id del frame, para el prefijo del reporte: 07-dos-rutas.html -> 07-dos-rutas */
function nombreArchivo(ruta) {
  return ruta.split('/').pop();
}

/** Una longitud CSS en px. El lienzo de todos los frames es 1920x1080, asi
 *  que 1cqw = 19.2px y 1cqh = 10.8px. */
const ANCHO = 1920;
const ALTO = 1080;
function px(valor, unidad) {
  switch (unidad) {
    case 'cqw':
      return (valor * ANCHO) / 100;
    case 'cqh':
      return (valor * ALTO) / 100;
    case 'rem':
      return valor * 16;
    default:
      return valor;
  }
}

function revisar(ruta) {
  const texto = readFileSync(ruta, 'utf8');
  const css = bloques(texto, 'style').join('\n');
  const js = bloques(texto, 'script').join('\n');
  const html = texto.replace(/<style>[\s\S]*?<\/style>/g, '').replace(/<script>[\s\S]*?<\/script>/g, '');

  const ids = new Set();
  const repetidos = new Set();
  for (const m of html.matchAll(ATRIBUTO_ID)) {
    if (ids.has(m[1])) {
      repetidos.add(m[1]);
    }
    ids.add(m[1]);
  }

  const problemas = [];

  // 1. selectores CSS invalidos: identificadores que empiezan con digito.
  //    Se exigen dos digitos y un guion para no confundir un color (#2e4a2a).
  const idsComoSelector = [...new Set([...css.matchAll(/#(\d{2}-[a-z0-9-]+)/g)].map((m) => m[1]))];
  if (idsComoSelector.length > 0) {
    problemas.push(
      `selector #NN-... invalido (el navegador descarta la regla): ${idsComoSelector.join(', ')}`,
    );
  }
  const clasesComoSelector = [...new Set([...css.matchAll(/\.(\d{2}-[a-z][a-z0-9-]*)/g)].map((m) => m[1]))];
  if (clasesComoSelector.length > 0) {
    problemas.push(
      `selector .NN-... invalido (el navegador descarta la regla): ${clasesComoSelector.join(', ')}`,
    );
  }

  // 2. reglas que apuntan a un id que no existe.
  const porAtributo = [...new Set([...css.matchAll(/\[id="([^"]+)"\]/g)].map((m) => m[1]))];
  const huerfanosCss = porAtributo.filter((id) => !ids.has(id));
  if (huerfanosCss.length > 0) {
    problemas.push(`CSS pide un id que el HTML no define: ${huerfanosCss.join(', ')}`);
  }

  // 3. el JS pide un id que el HTML no define -> el tween se pierde en silencio.
  //    Se cubren las cuatro formas que usan los frames: q('x'), byId('x'),
  //    getElementById('x') y querySelector('[id="x"]').
  const porJs = [
    ...new Set(
      [
        // q('x'), byId('x'), getElementById('x')
        ...[...js.matchAll(/\b(?:q|byId|getElementById)\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]),
        // querySelector('[id="x"]') — el guion bajo viene de un id que empieza con digito
        ...[...js.matchAll(/\[id=\\?["']([^"'\\]+)\\?["']\]/g)].map((m) => m[1]),
      ],
    ),
  ].filter((id) => !id.endsWith('-') && !id.includes('+')); // ids armados por concatenacion
  const huerfanosJs = porJs.filter((id) => !ids.has(id));
  if (huerfanosJs.length > 0) {
    problemas.push(`JS pide un id que el HTML no define: ${huerfanosJs.join(', ')}`);
  }

  // 4. ids repetidos: el primero gana y el resto queda inalcanzable.
  if (repetidos.size > 0) {
    problemas.push(`id repetido (gana el primero): ${[...repetidos].join(', ')}`);
  }

  // 5. line-height mezclando cqw con cqh. cqh es 56% de cqw, asi que un
  //    "1.45em" escrito como 3.19cqh vale 0.83em de verdad y las lineas se
  //    superponen. Solo cuando ambos valores llevan unidad de largo explicita:
  //    un line-height sin unidad ya es un multiplo del cuerpo.
  for (const m of css.matchAll(/font-size:\s*([\d.]+)(cqw|cqh|px|rem)\s*;(?:[^}]*?)line-height:\s*([\d.]+)(cqw|cqh|px|rem)\s*;/g)) {
    const tamano = px(m[1], m[2]);
    const alto = px(m[3], m[4]);
    const ratio = alto / tamano;
    if (ratio < 1.3) {
      const mezclado = m[2] !== m[4] ? ' (cqw con cqh)' : '';
      problemas.push(
        `interlineado ${ratio.toFixed(2)}em${mezclado}: font-size ${m[1]}${m[2]} (${tamano.toFixed(0)}px) con line-height ${m[3]}${m[4]} (${alto.toFixed(0)}px). Usa la misma unidad en ambos, o un multiplo sin unidad.`,
      );
    }
  }

  return { nombre: nombreArchivo(ruta), problemas };
}

const args = process.argv.slice(2);

/** Los .html de un directorio de frames, ordenados por nombre. */
function framesDe(dir) {
  return readdirSync(dir)
    .filter((a) => a.endsWith('.html'))
    .sort()
    .map((a) => join(dir, a));
}

function esDirectorio(ruta) {
  try {
    return statSync(ruta).isDirectory();
  } catch {
    return false;
  }
}

/** Sin argumentos: recorre todos los proyectos de videos/ y todos sus frames. */
function descubrir() {
  const base = join(ROOT, 'videos');
  let proyectos = [];
  try {
    proyectos = readdirSync(base);
  } catch {
    console.error(`no existe ${relative(ROOT, base)}/`);
    process.exit(1);
  }
  return proyectos.flatMap((proyecto) => {
    const dir = join(base, proyecto, 'compositions', 'frames');
    // Un proyecto recien scaffoldeado todavia no tiene carpeta de frames: eso
    // no es un error del guard, es que el proyecto aun no esta compuesto.
    return esDirectorio(dir) ? framesDe(dir) : [];
  });
}

/**
 * Un argumento puede ser un archivo o un directorio de frames. Un directorio
 * se expande aunque este vacio — distinguir "carpeta sin frames" de "ruta que
 * no existe" importa: lo primero es un proyecto sin escribir, lo segundo es un
 * argumento mal escrito.
 */
function expandir(argumentos) {
  const rutas = [];
  const inexistentes = [];
  for (const a of argumentos) {
    if (esDirectorio(a)) {
      const encontrados = framesDe(a);
      if (encontrados.length === 0) {
        console.log(`· ${relative(ROOT, a)}/ no tiene frames todavia`);
      }
      rutas.push(...encontrados);
      continue;
    }
    if (!existsSync(a)) {
      inexistentes.push(a);
      continue;
    }
    rutas.push(a);
  }
  if (inexistentes.length > 0) {
    console.error(`no existe: ${inexistentes.join(', ')}`);
    process.exit(1);
  }
  return rutas;
}

const esLista = args.length > 0;
const rutas = esLista ? expandir(args) : descubrir();
if (rutas.length === 0) {
  console.log(
    esLista
      ? '\\nnada que revisar: ningun argumento apuntaba a un frame'
      : '\\nOK: ningun proyecto de videos/ tiene frames todavia',
  );
  process.exit(0);
}

let conProblemas = 0;
for (const ruta of rutas) {
  const { nombre, problemas } = revisar(ruta);
  if (problemas.length === 0) {
    console.log(`✓ ${nombre}`);
    continue;
  }
  conProblemas += 1;
  console.log(`✗ ${nombre}`);
  for (const p of problemas) {
    console.log(`    ${p}`);
  }
}

console.log(
  conProblemas === 0
    ? `\nOK: ${rutas.length} frame(s) sin selectores rotos ni interlineados imposibles`
    : `\n${conProblemas} de ${rutas.length} frame(s) con CSS roto`,
);
process.exit(conProblemas === 0 ? 0 : 1);
