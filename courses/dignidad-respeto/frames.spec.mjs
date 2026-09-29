/**
 * frames.spec.mjs — dignidad-respeto
 *
 * Copy derivado de `INVESTIGACION.md`. La diferencia entre comentario hostil
 * y acoso se explica en lenguaje llano, no juridico: la propia
 * investigacion lo marca como no verificable, asi que el video no la hace.
 */

export default {
  slug: 'dignidad-respeto',
  area: 'Cultura',
  titulo: 'Dignidad y respeto',
  duracion: 45,
  mensaje:
    'La dignidad de la persona ordena toda relación laboral: no es un detalle de buena onda, es el punto de partida.',
  arco: 'concept-explainer with contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'El protagonista es un principio que casi todos dan por supuesto. Se abre nombrandolo, se contrasta el principio contra las conductas concretas que lo niegan, se recorre el camino de la denuncia y se cierra con lo que el ambiente respetuoso sostiene.',

  frames: [
    {
      slug: 'el-respeto-no-es-un-detalle',
      titulo: 'El respeto no es un detalle',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca el tema del registro de la cortesía y lo pone en el de los principios que ordenan la relación laboral. El público entra pensando en "buena onda" y sale pensando en norma.',
      keyMessage:
        'La dignidad de la persona es un principio que ordena toda relación laboral, no un rasgo de buena onda.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'DIGNIDAD Y RESPETO',
        grande: ['EL RESPETO NO ES', 'UN DETALLE DE BUENA ONDA'],
        remark:
          'Es un principio que ordena toda relación laboral. De ahí se derivan conductas concretas.',
      },
    },

    {
      slug: 'principio-y-conductas',
      titulo: 'Principio y conductas',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone el principio y su negación en la misma pantalla. La columna derecha existe para que la izquierda sea concreta: el respeto no se queda en declaración.',
      keyMessage:
        'Insultos, burlas y otras conductas hostiles vulneran el respeto básico, incluso cuando hay terceros mirando.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'EL PRINCIPIO Y SU NEGACIÓN',
        titulo: 'Lo que ordena, y lo que lo contradice',
        izq: {
          label: 'El principio',
          head: 'La dignidad ordena la relación',
          body: 'Es el punto de partida de toda relación laboral. Se sostiene con conducta, no con buenas intenciones.',
        },
        der: {
          label: 'Su negación',
          head: 'Insultos, burlas y trato hostil',
          body: 'Vulneran el respeto básico. Y también cuando se hacen frente a terceros: el respeto no tiene zonas libres.',
        },
      },
    },

    {
      slug: 'cuando-se-denuncia',
      titulo: 'Cuando se denuncia',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable: que pasa después de la conducta hostil. Es la parte que el público necesita para saber que hacer si le pasa.',
      keyMessage:
        'Las conductas de hostigamiento o trato irrespetuoso se pueden denunciar y se investigan.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'DESPUÉS DE LA CONDUCTA',
        titulo: 'El camino una vez que ocurrió',
        items: [
          { n: '01', head: 'Denuncia', gloss: 'Las conductas de hostigamiento o trato irrespetuoso se pueden denunciar.' },
          { n: '02', head: 'Investigación', gloss: 'Lo denunciado se investiga: no queda en la intención de quien lo cuenta.' },
          { n: '03', head: 'Reparación', gloss: 'La investigación termina en medidas o sanciones cuando corresponde.' },
        ],
      },
    },

    {
      slug: 'el-ambiente-respetuoso',
      titulo: 'El ambiente respetuoso',
      tipo: 'cierre',
      poster: 4,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo a plano de salida y conecta el principio con su efecto operativo. Deja la fuente a la vista.',
      keyMessage:
        'Un ambiente respetuoso es la base de la colaboración y la productividad.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara el alcance: el video no distingue hostil de acoso en terminos juridicos.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['UN AMBIENTE RESPETUOSO', 'ES LA BASE DE LA', 'COLABORACIÓN Y LA PRODUCTIVIDAD'],
        fuente: 'PRINCIPIOS DE DIGNIDAD Y RESPETO EN LA RELACIÓN LABORAL · FUENTE INTERNA',
        nota:
          'Este curso no distingue en terminos juridicos entre comentario hostil y acoso: la fuente disponible no lo respalda. Habla en lenguaje llano, que es lo que sirve.',
      },
    },
  ],
};
