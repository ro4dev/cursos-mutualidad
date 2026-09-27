/**
 * frames.spec.mjs — igualdad-no-discriminacion
 *
 * Copy derivado de `INVESTIGACION.md`. La discriminacion indirecta es el hecho
 * que ordena el relato: es la que no se ve en la regla y por eso es la que
 * sobrevive a las buenas intenciones. El numero del segundo frame es un
 * conteo de la enumeracion que hace la fuente, no una cifra externa.
 */

export default {
  slug: 'igualdad-no-discriminacion',
  area: 'Legal / Derechos',
  titulo: 'Igualdad y no discriminación',
  duracion: 60,
  mensaje:
    'La igualdad es un principio activo, no solo la ausencia de discriminación. La forma indirecta es la que no se ve en la regla, y por eso es la que hay que mirar.',
  arco: 'concept-explainer with a contrast and a count',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con el principio, que es la tesis. Sigue el ámbito concreto de protección, que es lo que la igualdad cubre. El par del tercer frame separa las dos formas de discriminar, y la indirecta entra en contour porque es la que cuesta ver. La lista recorre lo que ya esta prohibido y lo que si es legitimo, y el cierre vuelve al principio con la transparencia como criterio.',

  frames: [
    {
      slug: 'un-principio-activo',
      titulo: 'Un principio activo',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca la igualdad del registro de "no discriminar y listo". El público entra pensando que es una prohibición y sale entendiendo que es un principio que exige algo.',
      keyMessage:
        'La igualdad es un principio activo, no solo la ausencia de discriminación.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'IGUALDAD Y NO DISCRIMINACIÓN',
        grande: ['LA IGUALDAD', 'ES ACTIVA'],
        remark:
          'No es solo no discriminar. Es un principio que pide algo: que el resultado sea igual.',
      },
    },

    {
      slug: 'lo-que-cubre',
      titulo: 'Lo que cubre',
      tipo: 'stat',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Baja el principio al ámbito concreto. El filete vertical parte la pantalla y el público puede leer la enumeración completa sin que se corte.',
      keyMessage:
        'El ámbito de protección incluye siete atributos, y la enumeración es exacta.',
      beats: [
        '0.0-1.0s: la regla horizontal se dibuja y el rótulo entra. El número aparece digito a digito.',
        '1.0-2.2s: la unidad resuelve al lado y el filete vertical cae, partiendo la pantalla en dos.',
        '2.2-4.5s: la bajada entra, y al final el microcopy de fuente cierra el bloque.',
      ],
      datos: {
        kicker: 'EL ÁMBITO DE PROTECCIÓN',
        numero: '7',
        unidad: 'ATRIBUTOS PROTEGIDOS',
        bajada:
          'Sexo, edad, orientación sexual, identidad de género, etnia, religión y situación de discapacidad.',
        sub: 'Ámbito de protección · fuente interna',
      },
    },

    {
      slug: 'directa-e-indirecta',
      titulo: 'Directa e indirecta',
      tipo: 'par',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Separa las dos formas de discriminar. La columna izquierda es la que se ve; la derecha entra después en contour porque es la que no se ve en la regla.',
      keyMessage:
        'La discriminación indirecta es una regla aparentemente neutra que produce un efecto desigual.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'DOS FORMAS',
        titulo: 'La que se ve y la que no',
        izq: {
          label: 'Directa',
          head: 'Tratar distinto',
          body: 'Distinguir por un atributo protegido sin justificación válida. Se ve en la decisión misma.',
        },
        der: {
          label: 'Indirecta',
          head: 'Una regla neutra',
          body: 'Que produce un efecto desigual. No se ve en la regla: se ve en el efecto que deja.',
        },
      },
    },

    {
      slug: 'lo-que-ya-esta',
      titulo: 'Lo que ya esta',
      tipo: 'lista',
      poster: 7,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, en la parte de la norma que no admite discusión y en la que si admite margen.',
      keyMessage:
        'El hostigamiento laboral y la discriminación estan prohibidos, y las medidas afirmativas son legitimas.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ ESTÁ RESUELTO',
        titulo: 'Prohibido, y legítimo',
        items: [
          { n: '01', head: 'Hostigamiento', gloss: 'El hostigamiento laboral y la discriminación estan prohibidos explicitamente.' },
          { n: '02', head: 'Acción afirmativa', gloss: 'Medidas para alcanzar la igualdad real se consideran legitimas.' },
          { n: '03', head: 'Cuestionamiento', gloss: 'El principio activo es lo que impide tratar la igualdad como unicamente declarativa.' },
        ],
      },
    },

    {
      slug: 'mira-el-efecto',
      titulo: 'Mira el efecto',
      tipo: 'cierre',
      poster: 8,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre el criterio que separa las dos formas de discriminar. Es la idea que el público se lleva.',
      keyMessage:
        'Una regla sin lenguaje discriminatorio se juzga por su efecto, no por su letra.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que el efecto desigual es el que se evalua.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['UNA REGLA NEUTRA', 'NO BASTA', 'SI PRODUCE UN EFECTO DESIGUAL'],
        fuente: 'IGUALDAD Y NO DISCRIMINACIÓN · FUENTE INTERNA',
        nota:
          'La forma indirecta sobrevive porque nadie la escribe. Por eso la igualdad tiene que ser activa: para mirar el efecto, no solo la intención.',
      },
    },
  ],
};
