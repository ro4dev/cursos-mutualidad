/**
 * acentos.test.mjs — prueba el detector de tildes en las dos direcciones.
 *
 *   node scripts/frames/acentos.test.mjs
 *
 * Existe porque el detector de este repo se calibro a mano y las reglas de
 * sufijo se pueden romper sin que se note. Ya se rompió una vez: la tabla
 * tenia reglas para el plural de -cion y proponia "condiciónes", una palabra
 * que no existe en espanol. La invariante de acentuar-specs.mjs la agarro por
 * suerte, en un spec que todavia no habia que volver a renderizar.
 *
 * Las dos direcciones importan distinto:
 *
 *  - FALSO NEGATIVO: copy sin tilde que pasa y sale a pantalla. Es el costo
 *    que mas importa.
 *  - FALSO POSITIVO: una palabra correcta marcada como faltante. Ensucia el
 *    reporte de cada build y entrena a ignorar el guard. El caso carosimo fue
 *    el plural: "condiciones", "relaciones" y "presiones" NO llevan tilde,
 *    porque al sumar la "es" el acento pasa a llano y desaparece.
 */

import { sinTildes, CON_TILDE, SIN_TILDE_PERMITIDO } from './acentos.mjs';

const plano = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

let fallos = 0;
let pruebas = 0;

function falla(msg) {
  fallos++;
  console.error(`  FALLA  ${msg}`);
}

function ok(msg) {
  console.log(`  ok     ${msg}`);
}

/* --------------------------------------------------------------------- *
 * 1. Falsos positivos: texto ya correcto tiene que salir limpio.
 * --------------------------------------------------------------------- */
console.log('\ntexto correcto no se toca:');

const LIMPIOS = [
  // El plural de -cion y -sion no lleva tilde. Este fue el bug.
  'Las condiciones, relaciones, presiones y recomendaciones',
  'Las condiciones de la empresa y sus relaciones laborales',
  'Las decisiones, conversaciones y reuniones',
  'Las sesiones, mociones, fricciones y excepciones',
  'Las intervenciones, acuerdos y decisiones',
  'Las medidas de prevention adoptadas',
  // Formas que la lista de permitidas tiene que cubrir.
  'Aun así, solo esta vez, como cuando donde y contra',
  'Aun cuando no quede claro, mediante la evidencia disponible',
  'Esta es esa cosa, esos son esos y esto es esto',
  // Ingles: el detector es de espanol, tiene que ser mudo.
  'although only one test at a time',
];

for (const texto of LIMPIOS) {
  pruebas++;
  const h = sinTildes(texto);
  if (h.length) falla(`"${texto}" -> ${h.map((x) => `${x.palabra}=>${x.deberia}`).join(', ')}`);
  else ok(texto.slice(0, 62));
}

/* --------------------------------------------------------------------- *
 * 2. Falsos negativos: copy sin tilde tiene que ser reportado.
 * --------------------------------------------------------------------- */
console.log('\ncopy sin tilde se reporta:');

const FALTAN = [
  ['La relacion laboral', 'relacion', 'relación'],
  ['La comunicacion y la solucion', 'comunicacion', 'comunicación'],
  ['segun la institucion', 'segun', 'según'],
  ['El numero de dias de descanso', 'numero', 'número'],
  ['La guia tecnica', 'guia', 'guía'],
  ['un analisis util del torax', 'analisis', 'análisis'],
  ['mas de 50 personas', 'mas', 'más'],
  ['el proximo ano', 'proximo', 'próximo'],
  ['La tension es alta', 'tension', 'tensión'],
  ['deberia ser distinto', 'deberia', 'debería'],
  ['La garantia minima', 'garantia', 'garantía'],
  ['el dia siguiente, despues', 'dia', 'día'],
  ['un documento importante', 'documento', 'documento'], // control: NO lleva tilde
];

for (const [texto, palabra, deberia] of FALTAN) {
  pruebas++;
  const h = sinTildes(texto);
  if (palabra === deberia) {
    // control negativo explicito: la palabra existe pero va sin tilde
    if (h.length) falla(`"${texto}" reporto "${palabra}" y NO lleva tilde`);
    else ok(`control: ${palabra} no se toca`);
    continue;
  }
  if (!h.length) {
    falla(`"${texto}" no reporto nada (esperaba ${palabra})`);
    continue;
  }
  if (!h.some((x) => x.palabra === palabra && x.deberia === deberia)) {
    falla(`"${texto}" -> ${h.map((x) => `${x.palabra}=>${x.deberia}`).join(', ')} (esperaba ${palabra}=>${deberia})`);
    continue;
  }
  ok(`${palabra} -> ${deberia}`);
}

/* --------------------------------------------------------------------- *
 * 3. Invariante de letras: la propuesta solo puede agregar diacriticos.
 *
 * Es el mismo control que usa acentuar-specs.mjs, y es el que hace posible
 * arreglar specs automaticamente. Si alguna propuesta perdiera o inventara una
 * letra, el fixer corromperia el archivo antes de que nadie lo notara.
 * --------------------------------------------------------------------- */
console.log('\nla propuesta solo agrega diacriticos:');

for (const [planoPalabra, acentuada] of CON_TILDE) {
  pruebas++;
  const a = plano(planoPalabra);
  const b = plano(acentuada);
  if (a !== b) {
    falla(`${planoPalabra} -> ${acentuada}: las letras difieren ("${a}" vs "${b}")`);
    continue;
  }
  if (acentuada === planoPalabra) {
    falla(`${planoPalabra} -> ${acentuada}: no cambio nada`);
    continue;
  }
  /* Un cambio de tilde es poner un diacritico: vocal acentuada o eñe. La
     eñe va en la misma lista porque "ano" -> "año" y "senal" -> "señal" son
     el mismo tipo de correccion, y dejarla afuera hacia fallar el 20% de la
     lista sin senal. */
  /* NFC antes de comparar: una lista escrita a mano puede traer el
     acento descompuesto, que es la misma letra pero no el mismo codepoint. */
  if (!/[áéíóúüñÁÉÍÓÚÜÑ]/.test(acentuada.normalize('NFC'))) {
    falla(`${planoPalabra} -> ${acentuada}: no parece un cambio de diacritico`);
  }
}
ok(`${CON_TILDE.size} entradas de la lista`);

/* --------------------------------------------------------------------- *
 * 4. Cobertura por sufijo, sobre las palabras que aparecen en el catalogo.
 * --------------------------------------------------------------------- */
console.log('\ncobertura por sufijo:');

for (const palabra of ['relacion', 'informacion', 'capacitacion', 'prevencion', 'situacion',
  'organizacion', 'participacion', 'justificacion', 'atencion', 'opcion',
  'presion', 'decision', 'comision', 'vision', 'inclusion', 'conclusion']) {
  pruebas++;
  const h = sinTildes(palabra);
  if (!h.length) falla(`${palabra} no se detecto por sufijo`);
}
ok('-cion y -sion en singular');

for (const palabra of ['condiciones', 'relaciones', 'presiones', 'recomendaciones', 'decisiones']) {
  pruebas++;
  const h = sinTildes(palabra);
  if (h.length) falla(`el plural ${palabra} no lleva tilde pero se reporto`);
}
ok('el plural no lleva tilde y no se reporta');

/* --------------------------------------------------------------------- *
 * 5. La lista de permitidas no puede filtrar palabras que si van con tilde.
 * --------------------------------------------------------------------- */
console.log('\nla lista de permitidas no tapa palabras con tilde:');

for (const palabra of SIN_TILDE_PERMITIDO) {
  if (CON_TILDE.has(palabra) || /cion$|sion$/.test(palabra)) {
    pruebas++;
    falla(`"${palabra}" esta en la lista de permitidas y tambien necesita tilde`);
  }
}
ok(`${SIN_TILDE_PERMITIDO.size} permitidas`);

console.log(`\n${pruebas - fallos}/${pruebas} pruebas ok\n`);
process.exit(fallos ? 1 : 0);
