/**
 * frames.spec.mjs — primeros-auxilios
 *
 * Copy derivado de `INVESTIGACION.md`. El titulo del curso menciona "los 5
 * primeros minutos", pero esa cifra no esta en los hechos verificados: sale
 * solo del nombre, y la propia investigacion descarta toda cifra que no
 * aparezca en la fuente. Por eso el numero no va a pantalla y el arco queda
 * en cuatro frames.
 */

export default {
  slug: 'primeros-auxilios',
  area: 'Seguridad',
  titulo: 'Primeros auxilios: los 5 primeros minutos',
  duracion: 60,
  mensaje:
    'Antes de atender, revisa que la escena sea segura. Después: aviso, respiración, compresiones. Y lo que no se hace también importa.',
  arco: 'how-to with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la condición que va primero y que casi siempre se salta: la seguridad de la escena. El par pone el lado que sí y el lado que no, porque los dos se olvidan por el mismo motivo. La lista recorre los tres pasos en el orden en que ocurren, y el cierre termina en lo que hay que hacer mientras se espera.',

  frames: [
    {
      slug: 'la-escena-primero',
      titulo: 'La escena primero',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Pone la seguridad de la escena antes que el gesto técnico. El público entra buscando que hacer y sale entendiendo que hay una condición previa.',
      keyMessage:
        'Antes de atender, revisar que la escena sea segura para no sumarse al accidente.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'PRIMEROS AUXILIOS',
        grande: ['ANTES DE ATENDER', 'REVISA LA ESCENA'],
        remark:
          'Atender en una escena insegura no ayuda. Agrega a quien ayuda.',
      },
    },

    {
      slug: 'lo-que-si-y-lo-que-no',
      titulo: 'Lo que sí y lo que no',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Separa el gesto técnico de las dos acciones que empeoran la situación. La columna izquierda es la que se hace; la derecha, en contour, es la que se evita.',
      keyMessage:
        'Compresiones firmes y ritmadas si no hay respiración normal; no mover con riesgo de lesión de columna ni dar de comer o de beber.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'EL GESTO Y EL LÍMITE',
        titulo: 'Lo que se hace y lo que no',
        izq: {
          label: 'Lo que sí',
          head: 'Compresiones',
          body: 'En el centro del pecho, firmes y rítmadas, si no hay respiración normal.',
        },
        der: {
          label: 'Lo que nunca',
          head: 'Mover ni alimentar',
          body: 'Si hay riesgo de lesión de columna no se mueve. Y no se da de comer ni de beber.',
        },
      },
    },

    {
      slug: 'los-tres-pasos',
      titulo: 'Los tres pasos',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable en el orden en que ocurre: pedir ayuda con la ubicación exacta, verificar la respiración, y después comprimir.',
      keyMessage:
        'Pedir ayuda y comunicar la ubicación exacta, verificar la respiración, y comprimir si no hay respiración normal.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'EN ORDEN',
        titulo: 'Avisar, verificar, comprimir',
        items: [
          { n: '01', head: 'Aviso', gloss: 'Pedir ayuda y llamar a la emergencia, comunicando la ubicación exacta.' },
          { n: '02', head: 'Respiración', gloss: 'Verificar la respiración antes de iniciar compresiones.' },
          { n: '03', head: 'Traslado', gloss: 'Aislar y esperar al equipo de salud sin abandonar a la persona.' },
        ],
      },
    },

    {
      slug: 'sin-abandonar',
      titulo: 'Sin abandonar',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre la parte que ocurre más tiempo y que nadie recuerda: la espera. Es lo que el público se lleva.',
      keyMessage:
        'Aislar y esperar al equipo de salud sin abandonar a la persona.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que esperar también es parte de la atención.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['AISLAR, ESPERAR', 'Y NO ABANDONAR', 'A LA PERSONA'],
        fuente: 'PRIMEROS AUXILIOS: LOS 5 PRIMEROS MINUTOS · FUENTE INTERNA',
        nota:
          'La espera es la parte más larga de la atención. Toda la atención depende de cómo se pasa ese rato.',
      },
    },
  ],
};
