/**
 * frames.spec.mjs — ergonomia-oficina
 *
 * Copy derivado de `INVESTIGACION.md`. Si algo no esta alla, no va aca.
 * Las cifras (20-30 minutos, 90 grados) vienen de los hechos verificados.
 * Los angulos (90 grados) son recomendaciones de salud ocupacional que el
 * propio documento declara como fuente principal.
 */

export default {
  slug: 'ergonomia-oficina',
  area: 'Bienestar',
  titulo: 'Ergonomía en la oficina',
  duracion: 45,
  mensaje:
    'La postura no se aguanta sola: se sostiene con cinco ajustes concretos que cualquier puesto de trabajo puede hacer hoy.',
  arco: 'concept-explainer with checklist',
  audiencia: 'Personal de mutualidades y oficinas en Chile',
  estructura:
    'El protagonista es el cuerpo de quien trabaja, y su mecanismo son cinco ajustes que caben en el mismo día. Se abre con la idea, se desarrolla el ajuste que más pesa, se recorre el resto como lista y se cierra con la regla.',
  continuidad:
    'El plano de la silla esta fijo toda la pieza: es la misma pantalla de principio a fin, y cada frame agrega un ajuste encima. `cut` entre frames, salvo el paso al cierre, que es un `crossfade` corto para bajar el ritmo antes de la fuente.',

  frames: [
    {
      slug: 'la-postura-no-se-aguanta',
      titulo: 'La postura no se aguanta sola',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Pone el problema con el que llega el público —"yo me siento mal y es normal"— y abre la promesa: no es un problema de CONSTITUCIÓN, es de disposición.',
      keyMessage:
        'La postura de trabajo la define como esta armado el puesto, no como se aguanta la persona.',
      beats: [
        '0.0-1.4s: solo el rótulo mono y la primera línea de la frase, casi a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda línea se suma en el mismo lugar, con el filete de acento al lado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo, más chica, y baja el ritmo antes del corte.',
      ],
      datos: {
        kicker: 'ERGONOMÍA · PUESTO DE TRABAJO',
        // Cada frase es un span inline-block y una linea del titular. Los
        // cortes son de ahi, no automaticos: el navegador no decide donde
        // partir un titular de 148px.
        grande: ['LA POSTURA', 'NO SE AGUANTA SOLA'],
        remark:
          'La sostienen cinco ajustes del puesto. Ninguno requiere cambiar de mueble: se cambian de lugar.',
      },
    },

    {
      slug: 'la-mitad-del-cuerpo',
      titulo: 'La mitad del cuerpo',
      tipo: 'stat',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Da el dato más concreto y más accionable del curso, y lo separa del resto con un filete vertical: a partir de aca la pantalla esta en dos columnas, el número y la acción.',
      keyMessage:
        'La pantalla debe quedar a un brazo de distancia, con su borde superior a la altura de los ojos.',
      beats: [
        '0.0-1.0s: la regla horizontal se dibuja y el rótulo entra. El número aparece digito a digito.',
        '1.0-2.2s: la unidad resuelve al lado y el filete vertical cae, partiendo la pantalla en dos.',
        '2.2-4.5s: la bajada entra, y al final el microcopy de fuente cierra el bloque.',
      ],
      datos: {
        kicker: 'EL AJUSTE QUE MÁS PESA',
        numero: '1',
        unidad: 'BRAZO DE DISTANCIA',
        bajada: 'La pantalla, a un brazo de distancia y con el borde superior a la altura de los ojos.',
        sub: 'Fuente: guía de ergonomía para trabajo de oficina',
      },
    },

    {
      slug: 'los-cinco-ajustes',
      titulo: 'Los cinco ajustes',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Es el cuerpo del curso: los cinco hechos verificados, en el orden en que se tocan al armar el puesto de arriba hacia abajo.',
      keyMessage:
        'Monitor, silla, apoyos, teclado y una pausa cada 20-30 minutos: el puesto se arma de arriba hacia abajo.',
      beats: [
        '0.0-1.0s: la regla superior y el rótulo entran; el titulo sube con fade corto.',
        '1.0-5.5s: los cinco items entran de a uno, cada uno con su filete dibujandose. El ritmo es parejo: 0.34s entre items.',
        '5.5-8.0s: lectura sostenida del bloque completo, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'DE ARRIBA HACIA ABAJO',
        titulo: 'Cinco ajustes, en orden',
        items: [
          { n: '01', head: 'Monitor', gloss: 'A un brazo de distancia, borde superior a la altura de los ojos.' },
          { n: '02', head: 'Silla', gloss: 'Altura de asiento con los pies bien apoyados y las rodillas a 90 grados.' },
          { n: '03', head: 'Apoyos', gloss: 'Antebrazos apoyados, codos a 90 grados, pies que no alcancen el suelo.' },
          { n: '04', head: 'Teclado', gloss: 'Pegado a la mesa, para que el alcance no cargue el hombro.' },
          { n: '05', head: 'Alternancia', gloss: 'Cambiar de postura cada 20-30 minutos mantiene el cuerpo alerta.' },
        ],
      },
    },

    {
      slug: 'lo-que-no-se-cita',
      titulo: 'Lo que no se cita',
      tipo: 'cierre',
      poster: 4,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra con la regla accionable y baja el ritmo a plano de salida. Deja explicito que el curso no inventa cifras, que es lo que hace confiable un vídeo de salud ocupacional.',
      keyMessage:
        'Lo que se lleva: ajustar el puesto de arriba hacia abajo, y alternar cada 20-30 minutos.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra línea por línea.',
        '1.2-2.6s: la nota aclara el alcance del curso, sin alarmismo.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['ARMA EL PUESTO', 'DE ARRIBA HACIA ABAJO', 'Y ALTERNA CADA 20-30 MINUTOS'],
        fuente: 'GUÍA DE ERGONOMÍA PARA TRABAJO DE OFICINA · RECOMENDACIONES DE SALUD OCUPACIONAL',
        nota:
          'Este curso no cita porcentajes de incidencia de dolencias: la fuente de la que parte no los entrega. Lo que se muestra es lo que si se pudo verificar.',
      },
    },
  ],
};
