/**
 * acentuar-docs.test.mjs — prueba en negativo de scripts/acentuar-docs.mjs.
 *
 *   node scripts/acentuar-docs.test.mjs
 *
 * Un guard que nunca falla no prueba nada. Cada caso de este archivo existe
 * para romper algo a proposito: una ruta acentuada, un slug acentuado, una
 * letra cambiada. Si el acentuador acepta alguno, el test falla.
 *
 * Los casos 1 a 4 comprueban que la prosa se acentua y que lo protegido no se
 * toca. Los casos 5 a 8 comprueban que los invariantes rechazan lo que deben.
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPT = join(RAIZ, 'scripts', 'acentuar-docs.mjs');
const TMP = mkdtempSync(join(tmpdir(), 'acentuar-docs-'));

let ok = 0;
let fallos = 0;

function corre(nombre, contenido, nombreArchivo) {
  const ruta = join(TMP, nombreArchivo);
  writeFileSync(ruta, contenido, 'utf8');
  let salida = '';
  let codigo = 0;
  try {
    salida = execFileSync(process.execPath, [SCRIPT, '--escribir', ruta], { encoding: 'utf8' });
  } catch (e) {
    salida = (e.stdout || '') + (e.stderr || '');
    codigo = e.status;
  }
  return { ruta, salida, codigo, despues: readFileSync(ruta, 'utf8') };
}

function prueba(nombre, condicion, detalle = '') {
  if (condicion) {
    ok++;
    console.log(`  ok    ${nombre}`);
  } else {
    fallos++;
    console.log(`  FALLA ${nombre}${detalle ? ' — ' + detalle : ''}`);
  }
}

console.log('\nacentuar-docs: prosa si, protegido no\n');

/* 1. La prosa se acentua. */
{
  const r = corre('md', 'La proteccion y la discriminacion.\n', 'a.md');
  prueba('acentua la prosa de un .md', r.despues.includes('protección') && r.despues.includes('discriminación'), r.despues);
}

/* 2. Una ruta en codigo en linea no se toca. */
{
  const r = corre('md', 'Ver `INVESTIGACION.md` y tambien `frames.spec.mjs`.\nLa discriminacion.\n', 'b.md');
  prueba('no toca rutas en codigo en linea', r.despues.includes('`INVESTIGACION.md`') && r.despues.includes('`frames.spec.mjs`'), r.despues);
  prueba('y acentua la prosa de al lado', r.despues.includes('discriminación'));
}

/* 3. Una ruta suelta en prosa tampoco. */
{
  const r = corre('md', 'El copy sale de courses/teletrabajo/INVESTIGACION.md y de la proteccion.\n', 'c.md');
  prueba('no toca una ruta suelta en prosa', r.despues.includes('courses/teletrabajo/INVESTIGACION.md'), r.despues);
  prueba('y acentua lo que si es prosa', r.despues.includes('protección'));
}

/* 4. Una valla de codigo entera no se toca. */
{
  const r = corre('md', 'Antes.\n\n```js\nconst discriminacion = "proteccion";\n```\nDespues: discriminacion.\n', 'd.md');
  prueba('no toca la valla de codigo', r.despues.includes('const discriminacion = "proteccion";'), r.despues);
  prueba('y acentua la prosa de fuera', (r.despues.match(/discriminación\./g) || []).length === 1, r.despues);
}

/* 5. Un slug en .json no se toca. */
{
  const r = corre('json', '{"slug":"igualdad-no-discriminacion","mensaje":"la discriminacion directa"}\n', 'e.json');
  prueba('no toca la clave slug en .json', r.despues.includes('"igualdad-no-discriminacion"'), r.despues);
  prueba('y acentua los otros valores', r.despues.includes('discriminación directa'));
}

/* 6. Una ruta en .json no se toca. */
{
  const r = corre('json', '{"path":"courses/ley-karin/INVESTIGACION.md","titulo":"la proteccion"}\n', 'f.json');
  prueba('no toca un valor que es ruta', r.despues.includes('courses/ley-karin/INVESTIGACION.md'), r.despues);
  prueba('y acentua el titulo', r.despues.includes('la protección'));
}

/* 7. Un slug en .mjs no se toca. */
{
  const r = corre('mjs', "export const P = [{ slug: 'codigo-conducta', titulo: 'la proteccion' }];\n", 'g.mjs');
  prueba('no toca la clave slug en .mjs', r.despues.includes("'codigo-conducta'"), r.despues);
  prueba('y acentua el titulo', r.despues.includes('la protección'));
}

/* 8. Un comentario en .mjs no se toca: la convencion del repo es codigo ASCII. */
{
  const r = corre('mjs', "// la discriminacion no se toca\nconst t = 'la proteccion';\n", 'h.mjs');
  prueba('no toca comentarios en .mjs', r.despues.includes('// la discriminacion no se toca'), r.despues);
  prueba('y acentua el literal', r.despues.includes("'la protección'"));
}

console.log('\nacentuar-docs: los invariantes rechazan\n');

/* 9. Si el detector devuelve una palabra que cambia letras, no se escribe. */
{
  const ruta = join(TMP, 'i.md');
  writeFileSync(ruta, 'La proteccion.\n', 'utf8');
  /* Se inyecta un mapeo falso en una copia del script para simular el bug.
     La inyeccion tiene que cambiar una LETRA de verdad: un mapeo que solo
     cambia diacriticos pasaria el invariante 1 correctamente y el test no
     probaria nada. Por eso se pisa la quinta letra con una Q. */
  const falso = readFileSync(SCRIPT, 'utf8').replace(
    "import { sinTildes } from './frames/acentos.mjs';",
    "import { sinTildes as _real } from '" + join(RAIZ, 'scripts', 'frames', 'acentos.mjs') + "';\n" +
      "const sinTildes = (t) => _real(t).map((h) => ({ ...h, deberia: h.deberia.slice(0, 4) + 'Q' + h.deberia.slice(5) }));"
  );
  if (falso === readFileSync(SCRIPT, 'utf8')) {
    console.log('  FALLA la inyeccion del mapeo falso no aplico — el import cambio de forma');
    fallos++;
  }
  const rutaFalso = join(TMP, 'falso.mjs');
  writeFileSync(rutaFalso, falso, 'utf8');
  /* El script reporta los descartes por stderr (console.error) y el resumen por
     stdout, asi que el arnés necesita las dos fuentes para poder afirmar sobre
     el mensaje de descarte. */
  let salida = '';
  let codigo = 0;
  try {
    salida = execFileSync(process.execPath, [rutaFalso, '--escribir', ruta], { encoding: 'utf8' });
  } catch (e) {
    salida = (e.stdout || '') + (e.stderr || '');
    codigo = e.status;
  }
  const despues = readFileSync(ruta, 'utf8');
  prueba('un mapeo que cambia letras se rechaza', codigo === 1 && despues === 'La proteccion.\n', `codigo=${codigo} salida=${salida.slice(0, 120)}`);
  prueba('y reporta el descarte', /DESCARTADO/.test(salida), salida.slice(0, 200));
}

/* 10. Una palabra que el detector no conoce queda como esta. */
{
  const r = corre('md', 'La polimorfia y la proteccion.\n', 'j.md');
  prueba('una palabra desconocida no se inventa tilde', r.despues.includes('polimorfia'), r.despues);
  prueba('pero la conocida si', r.despues.includes('protección'));
}

/* 11. Una referencia a archivo DENTRO de un literal .mjs no se toca.
   Este caso existe porque el invariante 2 lo atrapo en el repo: `\\w` es
   ASCII, asi que acentuar `INVESTIGACION` parte el token y el match del nombre
   de archivo se reduce a `N.md`. Cinco referencias quedaron a punto de
   romperse. */
{
  const r = corre(
    'mjs',
    "export const P = ['Ver `INVESTIGACION.md` y la proteccion', 'BRIEF.md con discriminacion'];\n",
    'i.mjs'
  );
  prueba('no rompe una referencia a archivo dentro de un literal .mjs', r.despues.includes('`INVESTIGACION.md`') && r.despues.includes('BRIEF.md'), r.despues);
  prueba('pero si acentua la prosa del mismo literal', r.despues.includes('protección') && r.despues.includes('discriminación'), r.despues);
}

/* 12. Un token con barra se protege entero, y no se acentua. El costo es
   deliberado: `compresion/ventilacion` se queda sin tilde, a cambio de no
   romper nunca una ruta. */
{
  const r = corre('mjs', "const t = 'compresion/ventilacion y proteccion';\n", 'j.mjs');
  prueba('protege entero un token con barra', r.despues.includes('compresion/ventilacion'), r.despues);
  prueba('y acentua la prosa de al lado', r.despues.includes('protección'), r.despues);
}

console.log(`\n${ok}/${ok + fallos} pruebas ok\n`);
rmSync(TMP, { recursive: true, force: true });
process.exit(fallos ? 1 : 0);
