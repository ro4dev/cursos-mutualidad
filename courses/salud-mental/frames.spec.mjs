/**
 * frames.spec.mjs — salud-mental
 *
 * Copy derivado de `INVESTIGACION.md`. Cuatro frames y no cinco: la fuente
 * enumera tres riesgos y tres factores protectores, pero el stat de cinco
 * frames repetiria esa enumeracion en dos archetypes seguidos. El par la
 * lleva una sola vez, de los dos lados, que es donde el contraste se lee.
 */

export default {
  slug: 'salud-mental',
  area: 'Bienestar',
  titulo: 'Salud mental en el trabajo',
  duracion: 60,
  mensaje:
    'La salud mental en el trabajo es un derecho, no una concesión. Y lo que la sostiene se decide en cómo se organiza el trabajo.',
  arco: 'concept-explainer with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con el derecho, que es la tesis y corrige la lectura de concessions. El par pone los riesgos al lado de los factores que los compensan, porque ninguno de los dos lados se sostiene solo. La lista recorre las medidas, el derecho a consultar y la red de apoyo, y el cierre vuelve sobre el derecho.',

  frames: [
    {
      slug: 'es-un-derecho',
      titulo: 'Es un derecho',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Corrige la lectura de que la salud mental es un favor. El público entra con esa idea y sale entendiendo que es un derecho.',
      keyMessage:
        'La protección de la salud mental en el trabajo es un derecho, no una concesión.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'SALUD MENTAL EN EL TRABAJO',
        grande: ['LA SALUD MENTAL', 'ES UN DERECHO'],
        remark:
          'No una concesión. La diferencia cambia quién tiene que hacer qué.',
      },
    },

    {
      slug: 'riesgo-y-proteccion',
      titulo: 'Riesgo y protección',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone los dos lados de la misma balanza en la misma pantalla. La columna izquierda es lo que erosiona; la derecha, en contour, es lo que sostiene.',
      keyMessage:
        'Carga excesiva, falta de control y trato hostil por un lado; descanso, apoyo social y claridad de roles por el otro.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LA BALANZA',
        titulo: 'Lo que pesa y lo que sostiene',
        izq: {
          label: 'Riesgos',
          head: 'Lo que puede afectar',
          body: 'Carga excesiva, falta de control sobre el trabajo y trato hostil.',
        },
        der: {
          label: 'Factores protectores',
          head: 'Lo que sostiene',
          body: 'Descanso, apoyo social y claridad de roles.',
        },
      },
    },

    {
      slug: 'medidas-consulta-y-red',
      titulo: 'Medidas, consulta y red',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, ordenado de la organización hacia la persona. La última fila es la que más se olvida y la que el derecho garantiza.',
      keyMessage:
        'Medidas organizacionales, derecho a solicitar evaluación y orientación, y canales de apoyo internos y externos.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ EXISTE',
        titulo: 'Tres cosas concretas',
        items: [
          { n: '01', head: 'Prevención', gloss: 'Medidas organizacionales: distribución de carga, horarios, pausas y apoyo.' },
          { n: '02', head: 'Consulta', gloss: 'Existe derecho a solicitar evaluación y orientación en salud mental.' },
          { n: '03', head: 'Red', gloss: 'Contar con canales de apoyo internos y externos es parte de la prevención.' },
        ],
      },
    },

    {
      slug: 'no-es-una-concesion',
      titulo: 'No es una concesión',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo volviendo a la palabra de la apertura. Es lo que el público se lleva.',
      keyMessage:
        'La protección de la salud mental en el trabajo es un derecho, no una concesión.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la consulta y la red son parte de la prevención.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['UN DERECHO', 'NO UNA', 'CONCESIÓN'],
        fuente: 'SALUD MENTAL EN EL TRABAJO · FUENTE INTERNA',
        nota:
          'Pedir una evaluación no es una excepción ni un favor: es el derecho a consultar. Y los canales de apoyo son parte de la prevención, no un extra.',
      },
    },
  ],
};
