/**
 * frames.spec.mjs — evacuacion-incendios
 *
 * Copy derivado de `INVESTIGACION.md`. El orden de las acciones y la
 * prioridad del escape por sobre el uso del extintor son hechos verificados.
 * El video no agrega protocolos, contactos, plazos ni cargos: la fuente no
 * los respalda y una emergencia se entrena con lo que uno efectivamente va a
 * tener en la mano.
 */

export default {
  slug: 'evacuacion-incendios',
  area: 'Seguridad',
  titulo: 'Incendios y evacuación',
  duracion: 45,
  mensaje:
    'Ante la alarma, la evacuación es inmediata y ordenada. Lo que hace que funcione es el orden de las acciones, y ese orden se entrena.',
  arco: 'how-to with priority contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre sacando la evacuación del registro de "cuando pase algo": arranca con la alarma. Se contrasta el escape contra el uso del extintor, que es donde está el error más común. Se recorre el recorrido completo y se cierra con la prevención, la única parte que no depende de la reacción.',

  frames: [
    {
      slug: 'no-es-un-momento',
      titulo: 'No es un momento',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'El público entra creyendo que la evacuación es una decisión que se toma después, cuando hay tiempo. Sale entendiendo que arranca con la alarma.',
      keyMessage:
        'Ante la alarma de incendio la evacuación es inmediata y ordenada.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'INCENDIO Y EVACUACIÓN',
        grande: ['LA EVACUACIÓN', 'NO ESPERA'],
        remark:
          'Arranca con la alarma, no después. Y tiene un orden, que es lo que hace que funcione.',
      },
    },

    {
      slug: 'escape-primero',
      titulo: 'Escape primero',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone en el mismo plano las dos acciones que se confunden. La columna izquierda es la que gana: es la que corresponde siempre.',
      keyMessage:
        'El extintor se usa solo si hay salida libre y la llama es pequeña. El escape es prioridad.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LA PRIORIDAD',
        titulo: 'Dos acciones, un orden',
        izq: {
          label: 'Siempre',
          head: 'El escape va primero',
          body: 'La evacuación es inmediata y ordenada. Por la salida más cercana y segura, nunca por el ascensor.',
        },
        der: {
          label: 'Solo con dos condiciones',
          head: 'El extintor, con salida libre',
          body: 'Y con la llama pequeña. Si falta cualquiera de las dos, el escape vuelve a ser la prioridad.',
        },
      },
    },

    {
      slug: 'el-recorrido',
      titulo: 'El recorrido',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, en el orden en que ocurre. La cuenta va pegada al punto de encuentro porque es lo que confirma que nadie quedó atrás.',
      keyMessage:
        'Todos se reúnen en el punto de encuentro definido, y la cuenta permite detectar faltantes y dar aviso.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujándose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'EL RECORRIDO',
        titulo: 'En orden, y sin saltos',
        items: [
          { n: '01', head: 'Alarma', gloss: 'La evacuación es inmediata y ordenada: arranca ahí, no después.' },
          { n: '02', head: 'Ruta', gloss: 'La salida más cercana y segura. Nunca el ascensor.' },
          { n: '03', head: 'Punto de encuentro', gloss: 'Todos se reúnen ahí. La cuenta de personas confirma quiénes salieron y permite dar aviso de los faltantes.' },
        ],
      },
    },

    {
      slug: 'lo-que-se-deja',
      titulo: 'Lo que se deja resuelto',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo y corre el foco: lo que se resuelve mientras no hay alarma es lo único que no depende de cómo se reaccione.',
      keyMessage:
        'No bloquear pasillos ni salidas, y revisar cableado y equipos de calefacción.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que esta parte no depende del día de la alarma.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['NO BLOQUEAR NI UN PASILLO', 'NI UNA SALIDA', 'Y REVISAR CABLEADO Y CALEFACCIÓN'],
        fuente: 'RECUERDO DE EVACUACIÓN Y PREVENCIÓN DE INCENDIOS · FUENTE INTERNA',
        nota:
          'Esta parte no depende de la reacción del día, depende de cómo se dejó el edificio. Es lo único de todo el recorrido que se decide con tiempo.',
      },
    },
  ],
};
