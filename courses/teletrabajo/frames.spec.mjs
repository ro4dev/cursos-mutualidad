/**
 * frames.spec.mjs — teletrabajo
 *
 * Copy derivado de `INVESTIGACION.md`. Cuatro frames y no cinco: la fuente no
 * aporta ninguna cifra, y el corte que sí importa —acordado frente a impuesto—
 * ya ocupa el gancho, asi que un quinto slot habría sido relleno.
 */

export default {
  slug: 'teletrabajo',
  area: 'Derecho Laboral',
  titulo: 'Teletrabajo: derechos y límites',
  duracion: 60,
  mensaje:
    'El teletrabajo se acuerda entre las partes: no puede imponerse unilateralmente. Y la jornada sigue rigiéndose por la duración máxima legal.',
  arco: 'concept-explainer with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la condición que decide el resto, y es una sola: se acuerda, no se impone. El par baja a lo que el empleador tiene que aportar, que son herramientas y un espacio en condiciones. La lista recorre la definición, la desconexión y la capacitación, y el cierre vuelve al acuerdo.',

  frames: [
    {
      slug: 'se-acuerda',
      titulo: 'Se acuerda',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Pone la condición que decide todo lo demas. El público entra creyendo que el teletrabajo es una decisión de la empresa y sale entendiendo que es un acuerdo.',
      keyMessage:
        'La modalidad debe ser acordada y predeterminada entre las partes; no puede imponerse unilateralmente.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'TELETRABAJO',
        grande: ['EL TELETRABAJO', 'SE ACUERDA'],
        remark:
          'Entre las partes. No se impone de un lado, y la jornada no se alarga por estar en la casa.',
      },
    },

    {
      slug: 'herramientas-o-espacio',
      titulo: 'Herramientas o espacio',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Despliega las dos obligaciones del empleador, que son distintas y se confunden. La columna izquierda es el equipamiento; la derecha, el lugar.',
      keyMessage:
        'El empleador debe proveer elementos y herramientas, y garantizar un espacio de trabajo con condiciones adecuadas.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LO QUE APORTA',
        titulo: 'Herramientas y espacio',
        izq: {
          label: 'Equipamiento',
          head: 'Herramientas',
          body: 'Los elementos y herramientas necesarios para ejecutar el trabajo y para garantizar la seguridad.',
        },
        der: {
          label: 'El lugar',
          head: 'Espacio adecuado',
          body: 'Debe garantizarse un espacio de trabajo con condiciones de salud y seguridad adecuadas.',
        },
      },
    },

    {
      slug: 'definicion-derechos-y-carga',
      titulo: 'Definición, derechos y carga',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, de lo general a lo concreto: que es el teletrabajo, que sigue rigiendo la jornada, y que la implementación obliga a formar a las dos partes.',
      keyMessage:
        'La jornada se rige por la duración máxima legal, existe derecho a la desconexion, y la implementación incluye formación para ambas partes.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ ESTÁ DEFINIDO',
        titulo: 'Tres cosas del derecho',
        items: [
          { n: '01', head: 'Definición', gloss: 'Modalidad en que la prestación se realiza a distancia mediante medios digitales.' },
          { n: '02', head: 'Desconexión', gloss: 'La jornada se rige por la duración máxima legal, y existe derecho a la desconexion fuera de ella.' },
          { n: '03', head: 'Capacitación', gloss: 'La implementación debe incluir formación para ambas partes.' },
        ],
      },
    },

    {
      slug: 'acordado-no-impuesto',
      titulo: 'Acordado, no impuesto',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo volviendo a la palabra de la apertura, y anade la parte que suele quedar fuera: la desconexion.',
      keyMessage:
        'El teletrabajo es acordado, y fuera de la jornada existe derecho a la desconexion.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la desconexion es lo que impide que el domicilio se convierta en jornada.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['SE ACUERDA', 'Y FUERA DE LA JORNADA', 'HAY DESCONEXIÓN'],
        fuente: 'TELETRABAJO: DERECHOS Y LÍMITES · FUENTE INTERNA',
        nota:
          'La desconexión es lo que impide que el domicilio se convierta en jornada abierta. Sin ella, el acuerdo sobre cuándo trabajar deja de existir.',
      },
    },
  ],
};
