/**
 * frames.spec.mjs — sostenibilidad-ambiental
 *
 * Copy derivado de `INVESTIGACION.md`. Los cinco hechos verificados son
 * acciones concretas de la operación diaria, y el quinto —que lo pequeño y
 * sostenido pesa más que la campaña aislada— es el que ordena el relato. El
 * video no muestra cifras de huella, gráficos ni comparaciones entre
 * empresas: nada de eso está en la fuente.
 */

export default {
  slug: 'sostenibilidad-ambiental',
  area: 'Bienestar',
  titulo: 'Sostenibilidad ambiental en el trabajo',
  duracion: 45,
  mensaje:
    'La sustentabilidad ambiental se refleja en la operación diaria. Las acciones pequeñas y sostenidas pesan más que las grandes campañas aisladas.',
  arco: 'concept-explainer with contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con el criterio que ordena todo lo demás, que es el peso relativo de lo pequeño frente a lo grande. Se contrastan las dos formas de hacerlo, la campaña y la costumbre. Se recorren las cuatro acciones concretas de la operación diaria y se cierra atando la frecuencia con el criterio.',

  frames: [
    {
      slug: 'lo-que-pesa',
      titulo: 'Lo que pesa',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'El público entra creyendo que la sustentabilidad se decide en las grandes campañas. Sale con el criterio de que eso es justamente lo que menos rinde.',
      keyMessage:
        'Las acciones pequeñas y sostenidas pesan más que las grandes campañas aisladas.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'SOSTENIBILIDAD AMBIENTAL',
        grande: ['LO QUE PESA', 'SON LAS ACCIONES DIARIAS'],
        remark:
          'Pequeñas y sostenidas. Todos los días, no una vez al año.',
      },
    },

    {
      slug: 'la-campana-y-la-costumbre',
      titulo: 'La campaña y la costumbre',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone las dos formas de hacerlo en la misma pantalla. La columna izquierda es la que gana, y el orden de entrada hace que se lea sin esfuerzo.',
      keyMessage:
        'Lo que se hace una vez pesa menos que lo que se hace todos los días.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'DOS FORMAS DE HACERLO',
        titulo: 'La aislada y la sostenida',
        izq: {
          label: 'Una vez',
          head: 'La gran campaña',
          body: 'Se anuncia, se hace y pasa. Aislada no alcanza a modificar cómo trabaja la operación.',
        },
        der: {
          label: 'Todos los días',
          head: 'La acción sostenida',
          body: 'Separar, reparar, apagar y consumir menos. Sin fecha en el calendario: es parte del turno.',
        },
      },
    },

    {
      slug: 'cuatro-acciones',
      titulo: 'Cuatro acciones',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, en la forma de lista de tareas. Cada item nombra la acción y qué evita, para que no quede en la intención.',
      keyMessage:
        'Separar, reparar, apagar y consumir menos son las cuatro acciones de la operación diaria.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los items entran de a uno, cada uno con su filete dibujándose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'LA OPERACIÓN DIARIA',
        titulo: 'Cuatro acciones, todos los días',
        items: [
          { n: '01', head: 'Separar', gloss: 'Separar y reciclar evita que lo que se puede recuperar termine en vertederos.' },
          { n: '02', head: 'Reparar', gloss: 'Reparar y reutilizar extiende la vida útil de los equipos.' },
          { n: '03', head: 'Apagar', gloss: 'Apagar equipos y luces evita el gasto de energía en las horas sin actividad.' },
          { n: '04', head: 'Consumir menos', gloss: 'Imprimir y consumir menos papel y materiales reduce el impacto.' },
        ],
      },
    },

    {
      slug: 'todos-los-dias',
      titulo: 'Todos los días',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo y vuelve al criterio de la apertura, ya aterrizado en cuatro acciones concretas. Deja la fuente a la vista.',
      keyMessage:
        'La sustentabilidad ambiental se refleja en la operación diaria, no en la comunicación.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara el alcance: ninguna de las cuatro depende de una campaña.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['LA SUSTENTABILIDAD', 'SE REFLEJA EN LA', 'OPERACIÓN DIARIA'],
        fuente: 'SOSTENIBILIDAD AMBIENTAL Y OPERACIÓN DIARIA · FUENTE INTERNA',
        nota:
          'Ninguna de las cuatro acciones depende de una campaña. Dependen de que estén en la forma de hacer la tarea, todos los días.',
      },
    },
  ],
};
