/**
 * frames.spec.mjs — diversidad-inclusion
 *
 * Copy derivado de `INVESTIGACION.md`. La distincion entre variedad de
 * personas y garantia de que todas tengan voz. La distincion central del
 * curso (diversidad / inclusion) es un hecho verificado, y las tres ideas que
 * la siguen (sesgos inconscientes, accesibilidad, valor en las decisiones)
 * tambien.
 */

export default {
  slug: 'diversidad-inclusion',
  area: 'Legal / Derechos',
  titulo: 'Diversidad e inclusión',
  duracion: 45,
  mensaje:
    'Tener personas distintas en la organization no es Inclusión: la Inclusión es que todas esas voces puedan participar y ser escuchadas.',
  arco: 'concept-explainer with contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'El protagonista es la confusión más común del tema: creer que inclusión y diversidad son lo mismo. Se abre nombrando esa confusión, se separan los dos conceptos, y se cierra con lo que aporta cuando se trabaja de verdad.',

  frames: [
    {
      slug: 'no-es-lo-mismo',
      titulo: 'No es lo mismo',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Abre con el error de partida: tratar diversidad e inclusión como sinonimo. El público se queda con la sensación de que la inclusión es un extra, no la base.',
      keyMessage:
        'Diversidad es que haya variedad de personas. Inclusión es garantizar que todas esas voces puedan participar y ser escuchadas.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'DIVERSIDAD E INCLUSIÓN',
        grande: ['TENER PERSONAS DISTINTAS', 'NO ES LO MISMO QUE INCLUIRLAS'],
        remark:
          'Una es la variedad de origen, edad, género, orientación, capacidades o experiencias. La otra es que todas se escuchen.',
      },
    },

    {
      slug: 'dos-conceptos',
      titulo: 'Dos conceptos',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Separa los dos conceptos en la misma pantalla. La columna izquierda es la que gana: es la que el público tiene que llevarse.',
      keyMessage:
        'Diversidad es tener variedad. Inclusión es garantizar que todas esas voces puedan participar y ser escuchadas.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LA DISTINCIÓN',
        titulo: 'Dos cosas que no se sustituyen',
        izq: {
          label: 'Inclusión',
          head: 'Que todas las voces se escuchen',
          body: 'Garantizar que la variedad de origen, edad, género, orientación, capacidades o experiencias pueda participar y ser escuchada.',
        },
        der: {
          label: 'Diversidad',
          head: 'Tener variedad de personas',
          body: 'Es la existencia de esa variedad. Necesaria, pero no suficiente: sin inclusión es solo estar sentados en la misma sala.',
        },
      },
    },

    {
      slug: 'por-que-importa',
      titulo: 'Por que importa',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque de motivos: los sesgos que operan sin que uno lo note, la accesibilidad como medida concreta, y el efecto en la calidad de las decisiones.',
      keyMessage:
        'Los sesgos inconscientes influyen en contratación y evaluación; la accesibilidad permite la participación plena; la variedad de perspectivas mejora las decisiones.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'LO QUE PASA SI SE TRABAJA',
        titulo: 'Tres razones concretas',
        items: [
          { n: '01', head: 'Sesgos', gloss: 'Los sesgos inconscientes influyen en decisiones de contratación y evaluación.' },
          { n: '02', head: 'Accesibilidad', gloss: 'Las medidas de accesibilidad permiten la participación plena.' },
          { n: '03', head: 'Valor', gloss: 'La diversidad de perspectivas mejora la calidad de las decisiones del grupo.' },
        ],
      },
    },

    {
      slug: 'la-regla',
      titulo: 'La regla',
      tipo: 'cierre',
      poster: 4,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo a plano de salida y deja la acción en una sola frase, del lado de quien organiza el trabajo.',
      keyMessage:
        'La inclusión se demuestra en que las decisiones toman en cuenta a todas las voces, no en como se ve la mesa.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que el curso no enuncia acciones afirmativas concretas, porque la fuente no las entrega.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['SI LAS VOCES NO ENTRAN', 'A LA DECISIÓN, NO HAY INCLUSIÓN'],
        fuente: 'PRINCIPIOS DE DIVERSIDAD E INCLUSIÓN LABORAL · FUENTE INTERNA',
        nota:
          'Este curso no enuncia acciones afirmativas ni medidas legales concretas: la fuente disponible no las respalda. Lo que se muestra es el principio y sus efectos observables.',
      },
    },
  ],
};
