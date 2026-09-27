/**
 * frames.spec.mjs — nuevo-trabajador
 *
 * Copy derivado de `INVESTIGACION.md`. Cuatro frames y no cinco: la fuente no
 * aporta ninguna cifra, y el unico corte posible —primer dia contra primeras
 * semanas— ya ocupa el archetype `par`, asi que un quinto slot habria sido un
 * frame de relleno.
 */

export default {
  slug: 'nuevo-trabajador',
  area: 'Onboarding',
  titulo: 'Inducción al nuevo trabajador',
  duracion: 60,
  mensaje:
    'La inducción integra: muestra cómo se trabaja acá. El primer día es información y accesos, y las primeras semanas son acompañamiento.',
  arco: 'concept-explainer with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con lo que la inducción es, que es mostrar el trabajo y no acumular papeles. El par separa los dos tiempos —el día uno y las primeras semanas—, porque se mezclan y tienen responsables distintos. La lista baja a las tres obligaciones concretas que sostienen la adaptación, y el cierre vuelve a la apertura. Las tres cosas tienen que estar listas el primer día.',

  frames: [
    {
      slug: 'muestra-como-se-trabaja',
      titulo: 'Muestra cómo se trabaja',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca la inducción del registro del tramite. El público entra pensando que es paperwork y sale entendiendo que es la primera vez que se ve el trabajo.',
      keyMessage:
        'La inducción integra al nuevo colaborador: le muestra como se trabaja aquí.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'INDUCCIÓN AL NUEVO TRABAJADOR',
        grande: ['LA INDUCCIÓN', 'MUESTRA CÓMO', 'SE TRABAJA AQUÍ'],
        remark:
          'No es acumular papeles. Es la primera vez que alguien ve cómo se trabaja acá.',
      },
    },

    {
      slug: 'dia-uno-o-semanas',
      titulo: 'Día uno o semanas',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Separa los dos tiempos de la adaptación, que se confunden y tienen dueño distinto. La columna izquierda es el día uno; la derecha es lo que sostiene las semanas.',
      keyMessage:
        'Políticas de seguridad, conducta y horario se explican el primer día, y una persona de referencia acompana la adaptación durante las primeras semanas.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LOS DOS TIEMPOS',
        titulo: 'El día uno y las semanas',
        izq: {
          label: 'Día uno',
          head: 'Información clave',
          body: 'Políticas de seguridad, conducta y horario se explican el primer día, antes de que se instale un reguero de dudas.',
        },
        der: {
          label: 'Primeras semanas',
          head: 'Acompañamiento',
          body: 'Una persona de referencia acompaña la adaptación durante esas semanas. No es supervisión: es referencia.',
        },
      },
    },

    {
      slug: 'las-tres-obligaciones',
      titulo: 'Las tres obligaciones',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable: lo que tiene que estar listo el primer día, lo que tiene plazo legal, y lo que se hace para saber si sirvio.',
      keyMessage:
        'Cuentas, permisos y equipos listos desde el primer día; formación obligatoria en los plazos legales; y seguimiento con retroalimentación.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ NO FALTA',
        titulo: 'Accesos, formación, seguimiento',
        items: [
          { n: '01', head: 'Accesos', gloss: 'Cuentas, permisos y equipos listos desde el primer día.' },
          { n: '02', head: 'Capacitación', gloss: 'La formación obligatoria de seguridad y salud se realiza en los plazos legales.' },
          { n: '03', head: 'Evaluación', gloss: 'Se hace seguimiento de la adaptación y se recoge la retroalimentación.' },
        ],
      },
    },

    {
      slug: 'listo-el-primer-dia',
      titulo: 'Listo el primer día',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre el requisito que más se posterga. Es lo que el público se lleva.',
      keyMessage:
        'Cuentas, permisos y equipos listos desde el primer día.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que lo que se posterga son accesos, no la información.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['CUENTAS, PERMISOS', 'Y EQUIPOS', 'DESDE EL PRIMER DÍA'],
        fuente: 'INDUCCIÓN AL NUEVO TRABAJADOR · FUENTE INTERNA',
        nota:
          'Lo que se posterga casi siempre son los accesos, no la información. Y sin una persona de referencia, la adaptación se sostiene sola, que es justo lo que no funciona.',
      },
    },
  ],
};
