/**
 * frames.spec.mjs — trabajo-en-equipo
 *
 * Copy derivado de `INVESTIGACION.md`. Los seis hechos verificados son
 * conductas observables, no principios: por eso el video no abre con una
 * definición de trabajo en equipo sino con la diferencia que se ve, que es
 * si el resultado es compartido o no. No se citan estudios de productividad,
 cifras de productividad ni tipos de personalidad.
 */

export default {
  slug: 'trabajo-en-equipo',
  area: 'Habilidades',
  titulo: 'Trabajo en equipo',
  duracion: 45,
  mensaje:
    'Un equipo comparte un resultado, no tareas aisladas. De ahí sale casi todo lo demás: pedir ayuda, la duración de las reuniones y cómo se resuelve un conflicto.',
  arco: 'concept-explainer with contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la diferencia que define al equipo. Se contrasta el resultado compartido contra la tarea aislada, porque de ese contraste sale el resto. Se recorren las tres conductas que lo sostienen y se cierra con el conflicto, que es el que más cuesta y el único que no se puede esquivar.',

  frames: [
    {
      slug: 'un-resultado',
      titulo: 'Un resultado',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'El público entra con la idea de que trabajar en equipo es coordinarse mejor. Sale con la diferencia estructural: el resultado es de todos o no es de nadie.',
      keyMessage:
        'El equipo comparte un resultado, no tareas aisladas.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'TRABAJO EN EQUIPO',
        grande: ['EL EQUIPO COMPARTE', 'UN RESULTADO'],
        remark:
          'No tareas aisladas. Y esa diferencia termina decidiendo cómo se trabaja.',
      },
    },

    {
      slug: 'compartido-o-aislado',
      titulo: 'Compartido o aislado',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone las dos formas de trabajar en la misma pantalla. La columna izquierda es la que gana, y es la que explica por qué pedir ayuda no es un problema.',
      keyMessage:
        'Cada rol tiene responsabilidades claras y conocidas, y la confianza permite pedir ayuda.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LA DIFERENCIA',
        titulo: 'Qué se comparte, en el fondo',
        izq: {
          label: 'Sin equipo',
          head: 'Tareas aisladas',
          body: 'Cada uno hace lo suyo y responde por lo suyo. El resultado del otro no es un problema propio.',
        },
        der: {
          label: 'Con equipo',
          head: 'Un resultado compartido',
          body: 'Los roles son conocidos, cada uno tiene responsabilidades claras, y por eso se puede pedir ayuda a tiempo.',
        },
      },
    },

    {
      slug: 'las-tres-conductas',
      titulo: 'Las tres conductas',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Las tres conductas que se ven en una reunión común. Es el bloque accionable, y cada item dice qué se rompe cuando no se cumple.',
      keyMessage:
        'Confianza, comunicación y reconocimiento son lo que sostiene el resultado compartido.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujándose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ LO SOSTIENE',
        titulo: 'Tres conductas, no dos',
        items: [
          { n: '01', head: 'Confianza', gloss: 'Permite pedir ayuda y exponer problemas a tiempo, antes de que sean un problema grande.' },
          { n: '02', head: 'Comunicación', gloss: 'Reuniones breves y focalizadas, no más largas de lo necesario.' },
          { n: '03', head: 'Reconocimiento', gloss: 'El reconocimiento oportuno sostiene la motivación.' },
        ],
      },
    },

    {
      slug: 'el-conflicto-de-frente',
      titulo: 'El conflicto, de frente',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo con la conducta que no se puede esquivar. Es la que separa a un equipo que funciona de uno que solo coopera por inercia.',
      keyMessage:
        'El conflicto se aborda de frente y se resuelve con reglas comunes.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la resolución es con reglas comunes, no con una negociación particular.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['EL CONFLICTO', 'SE ABORDA DE FRENTE', 'Y CON REGLAS COMUNES'],
        fuente: 'TRABAJO EN EQUIPO Y CONDUCTAS OBSERVABLES · FUENTE INTERNA',
        nota:
          'Abordarlo de frente no es buscar un acuerdo rápido: es que la resolución se de con reglas comunes y no con una negociación entre dos personas.',
      },
    },
  ],
};
