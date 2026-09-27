/**
 * frames.spec.mjs — comunicacion-asertiva
 *
 * Copy derivado de `INVESTIGACION.md`. Los tres estilos (asertivo,
 * agresivo, pasivo) y la estructura de cuatro pasos son hechos
 * verificados. No se citan tecnicas psicologicas con evidencia
 * cuantitativa, que la propia investigacion marca como no verificables.
 */

export default {
  slug: 'comunicacion-asertiva',
  area: 'Habilidades',
  titulo: 'Comunicación asertiva',
  duracion: 45,
  mensaje:
    'Comunicar bien no es callarse ni discutir: es decir lo propio reconociendo la postura del otro, y se puede aprender en cuatro pasos.',
  arco: 'concept-explainer with contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'El protagonista es una frase que casi todos dicen mal ("te dije que no" / "no me importa"). Se abre con el costo de las dos reacting extremos, se contrasta el estilo correcto contra el agresivo, y se cierra con la estructura de cuatro pasos que lo sostiene.',
  continuidad:
    'El titulo queda fijo arriba en los cuatro frames y es el único elemento que no se mueve: es el hilo. `cut` entre frames salvo el paso al cierre, que es un `crossfade` para bajar el ritmo antes de la fuente.',

  frames: [
    {
      slug: 'no-es-callarse',
      titulo: 'No es callarse',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Nombra la confusión con la que llega el público: asertivo se confunde con "decir lo que uno quiere" o con "no contradecir nunca". Separa las dos cosas antes de proponer la técnica.',
      keyMessage:
        'Comunicar asertivamente no es imponer la propia postura ni ceder en silencio: es reconocer la del otro y expresar la propia.',
      beats: [
        '0.0-1.4s: el rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde más abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'COMUNICACIÓN EN EL TRABAJO',
        grande: ['NO ES CALLARSE', 'NI IMPONERSE'],
        remark:
          'Es reconocer la postura del otro y decir la propia, sobre una conducta concreta y su efecto.',
      },
    },

    {
      slug: 'tres-posturas',
      titulo: 'Tres posturas',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Nombra las tres reacting y sus costos, para que el público se ubique en una. Es la sección de reconocimiento: verse en la pantalla es lo que hace que la información se guarde.',
      keyMessage:
        'Asertivo reconoce al otro y dice lo propio. Agresivo impone. Pasivo cede y acumula.',
      beats: [
        '0.0-1.0s: la regla superior, el rótulo y el titulo entran con fade corto.',
        '1.0-5.5s: los tres items entran de a uno, cada uno con su filete. Ritmo parejo.',
        '5.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'TRES POSTURAS',
        titulo: 'Tres formas de decirlo',
        items: [
          { n: '01', head: 'Asertivo', gloss: 'Expresar la propia postura reconociendo la del otro.' },
          { n: '02', head: 'Agresivo', gloss: 'Imponer la propia postura sin considerar al otro: daña la relación.' },
          { n: '03', head: 'Pasivo', gloss: 'Evitar el conflicto cediendo: la molestia se acumula.' },
        ],
      },
    },

    {
      slug: 'que-funciona',
      titulo: 'Que funciona y que no',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone la consecuencia de cada lado en la misma pantalla. El lado izquierdo es el que gana, y el derecho existe para que el contraste sea real.',
      keyMessage:
        'La comunicación clara reduce malentendidos y acelera la solución; imponer la postura daña la relación.',
      beats: [
        '0.0-1.4s: rótulo, titulo y el filete superior entran.',
        '1.4-3.0s: la columna izquierda entra como bloque macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después, en contour. El retraso de 0.5s hace que la comparison se lea.',
      ],
      datos: {
        kicker: 'LA COMPARACIÓN',
        titulo: 'Mismo tema, distinto resultado',
        izq: {
          label: 'Asertivo',
          head: 'Lo propio, reconociendo al otro',
          body: 'Reduce malentendidos y acelera la solución. La relación queda en pie para el próximo tema.',
        },
        der: {
          label: 'Agresivo',
          head: 'Lo propio, ignorando al otro',
          body: 'Gana la discusión y se pierde la relación. El costo aparece en la próxima conversación.',
        },
      },
    },

    {
      slug: 'cuatro-pasos',
      titulo: 'Los cuatro pasos',
      tipo: 'cierre',
      poster: 4,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra con la estructura accionable: la parte que el espectador puede aplicar manana. Baja el ritmo y deja la fuente a la vista.',
      keyMessage:
        'Mensajes en primera persona sobre conducta concreta y su efecto, y escuchar antes de responder.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la fuente no respalda cifras de eficacia.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['PRIMERA PERSONA', 'SOBRE CONDUCTA CONCRETA', 'Y ESCUCHAR ANTES DE RESPONDER'],
        fuente: 'GUÍA DE COMUNICACIÓN ASERTIVA EN EL TRABAJO · FUENTE INTERNA',
        nota:
          'Este curso no cita técnicas psicológicas con evidencia cuantitativa: la fuente disponible no las respalda. Lo que se muestra es la estructura de la comunicación asertiva.',
      },
    },
  ],
};
