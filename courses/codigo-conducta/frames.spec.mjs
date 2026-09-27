/**
 * frames.spec.mjs — codigo-conducta
 *
 * Copy derivado de `INVESTIGACION.md`. Cuatro frames y no cinco: la fuente no
 * aporta una cifra verificable para `stat` ni un segundo contraste natural, y
 * llenar el quinto slot habria exigido inventar. Los seis hechos verificados
 * se reparten en par (dos) y lista (tres), con el gancho y el cierre como
 * tesis y regla.
 */

export default {
  slug: 'codigo-conducta',
  area: 'Cultura',
  titulo: 'Código de conducta y ética',
  duracion: 60,
  mensaje:
    'Un código de conducta no es un listado de buenas intenciones: fija qué se acepta, qué no, y qué hay que declarar.',
  arco: 'concept-explainer with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con lo que el código efectivamente hace, que es separar lo aceptable de lo no aceptable. El par del segundo frame junta las dos obligaciones de declarar, porque funcionan igual y la gente las trata distinto. La lista recorre lo que hay que cuidar y por dónde se denuncia, y el cierre vuelve sobre la parte que casi nadie cumple.',

  frames: [
    {
      slug: 'que-fija',
      titulo: 'Que fija',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca el código del registro del documento que se firma una vez. El público entra pensando que es burocracia y sale entendiendo que separa conductas.',
      keyMessage:
        'El código fija expectativas de conducta aceptables y no aceptables.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'CÓDIGO DE CONDUCTA Y ÉTICA',
        grande: ['UN CÓDIGO', 'FIJA QUÉ SE ACEPTA'],
        remark:
          'Y también qué no. La diferencia no está en los principios: está en la línea.',
      },
    },

    {
      slug: 'declarar-o-rechazar',
      titulo: 'Declarar o rechazar',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Junta las dos obligaciones que se parecen y que la gente trata de forma distinta. La columna izquierda se declara siempre; la derecha tiene dos salidas y ambas son correctas.',
      keyMessage:
        'Los conflictos de interés se declaran, y los regalos que puedan influenciar se rechazan o se declaran.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LAS DOS OBLIGACIONES',
        titulo: 'Las dos que se declaran',
        izq: {
          label: 'Siempre',
          head: 'El conflicto de interés',
          body: 'Se declara todo conflicto de interés, real o potencial. No solo el que ya produjo un conflicto.',
        },
        der: {
          label: 'Dos salidas',
          head: 'Regalos y atenciones',
          body: 'Los que puedan intentar influenciar una decisión. O se rechazan, o se declaran. Las dos.',
        },
      },
    },

    {
      slug: 'lo-que-hay-que-cuidar',
      titulo: 'Lo que hay que cuidar',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable: confidencialidad, la vía de denuncia y que el incumplimiento tiene consecuencia. Los tres cosas que hacen que el código no sea decorativo.',
      keyMessage:
        'La información se maneja con confidencialidad, existe una vía de denuncia protegida, y el incumplimiento tiene consecuencias.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'LO QUE OPERATIVO',
        titulo: 'Tres cosas que lo hacen real',
        items: [
          { n: '01', head: 'Confidencialidad', gloss: 'La información de la organización y de terceros se maneja con confidencialidad.' },
          { n: '02', head: 'Denuncia', gloss: 'Existe una vía para denunciar prácticas indebidas, con protección del denunciante.' },
          { n: '03', head: 'Consecuencias', gloss: 'El incumplimiento tiene consecuencias según la gravedad.' },
        ],
      },
    },

    {
      slug: 'la-linea-no-es-el-papel',
      titulo: 'La línea no es el papel',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre la parte que casi nadie cumple, que es la declaración. Es lo que el público se lleva.',
      keyMessage:
        'Un código sin declaración ni consecuencias es un documento. Con las dos, es un código.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que las dos obligaciones de declarar son el nucleo del código.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['SE DECLARA', 'TODO CONFLICTO', 'REAL O POTENCIAL'],
        fuente: 'CÓDIGO DE CONDUCTA Y ÉTICA · FUENTE INTERNA',
        nota:
          'El código se juega en dos puntos: que se declare lo que corresponde, y que el incumplimiento tenga consecuencia. Sin los dos, es un documento.',
      },
    },
  ],
};
