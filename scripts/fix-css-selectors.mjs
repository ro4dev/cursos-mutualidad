#!/usr/bin/env node
/**
 * fix-css-selectors.mjs — repara selectores CSS que el navegador descarta.
 *
 * Uso:
 *   node scripts/fix-css-selectors.mjs videos/ley-karin-plazos/compositions/frames/07-dos-rutas.html
 *
 * Por que existe: en CSS un identificador (de id o de clase) NO puede empezar
 * con un digito. `#07-dos-rutas-title` y `.07-dos-rutas-card` son selectores
 * invalidos, y una hoja de estilos descarta la regla entera **en silencio** —
 * no hay error, no hay aviso, el frame simplemente queda sin estilos. El
 * linter solo avisa del caso de los ids usados desde querySelector; el de las
 * clases se le escapa, y el de un id escrito como selector CSS tambien.
 *
 * Dos formas de arreglar, y el script aplica las dos:
 *   - id    -> selector de atributo:  #07-dos-rutas-x  =>  [id="07-dos-rutas-x"]
 *               (valido, y es la convencion que ya usan los frames 02-06)
 *   - clase -> prefijo con letra:      .07-dos-rutas-x =>  .r07-x
 *               (los ids se dejan intactos: no hacen falta para consultar el DOM)
 *
 * Solo toca el interior de los bloques <style>. El JavaScript usa
 * getElementById, que no pasa por el parser de CSS, asi que queda como estaba.
 */

import { readFileSync, writeFileSync } from 'node:fs';

const rutas = process.argv.slice(2);
if (rutas.length === 0) {
  console.error('uso: node scripts/fix-css-selectors.mjs <archivo.html> ...');
  process.exit(1);
}

/** Convierte #07-dos-rutas-x en [id="07-dos-rutas-x"] dentro de un bloque style. */
function arreglarIds(css) {
  // Exige dos digitos y un guion: descarta colores como #2e4a2a y #243a21.
  return css.replace(/#(\d{2}-[a-z0-9-]+)/g, '[id="$1"]');
}

/** Renombra las clases que empiezan con digito a un prefijo con letra. */
function arreglarClases(css, prefijo) {
  // \.07-dos-rutas-card -> .r07-card. El sufijo captura lo que va tras el frame.
  return css.replace(
    new RegExp(`\\.(\\d{2}-[a-z]+)-[a-z0-9]*([a-z-]*)`, 'g'),
    (_m, _frame, cola) => `.${prefijo}-${cola}`,
  );
}

for (const ruta of rutas) {
  const antes = readFileSync(ruta, 'utf8');

  // El prefijo de clase sale del NOMBRE del archivo, no del contenido:
  // 07-dos-rutas.html -> r07. Sacarlo del contenido no funciona porque el
  // archivo no menciona su propio nombre.
  const frame = ruta.match(/(\d{2})-[a-z]+-[a-z]+\.html/);
  const prefijo = frame ? `r${frame[1]}` : 'rXX';

  let despues = antes.replace(/<style>([\s\S]*?)<\/style>/g, (_m, css) => {
    return `<style>${arreglarClases(arreglarIds(css), prefijo)}</style>`;
  });

  // Las mismas clases, ahora en los atributos class del HTML.
  despues = despues.replace(
    /class="(\d{2}-[a-z]+)-([a-z-]*)"/g,
    (_m, _frame, cola) => `class="${prefijo}-${cola}"`,
  );

  if (despues === antes) {
    console.log(`sin cambios: ${ruta}`);
    continue;
  }

  writeFileSync(ruta, despues);

  const idsAntes = (antes.match(/#\d{2}-[a-z0-9-]+/g) || []).length;
  const idsDespues = (despues.match(/#\d{2}-[a-z0-9-]+/g) || []).length;
  const clasesAntes = new Set(antes.match(/\.\d{2}-[a-z]+-[a-z-]*/g) || []);
  console.log(`reparado: ${ruta}`);
  console.log(`  ids como selector CSS: ${idsAntes} -> ${idsDespues}`);
  console.log(`  clases renombradas:   ${[...clasesAntes].join(', ') || '(ninguna)'}`);
}
