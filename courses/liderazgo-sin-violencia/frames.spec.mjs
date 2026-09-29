/**
 * frames.spec.mjs — liderazgo-sin-violencia
 *
 * Copy derivado de `INVESTIGACION.md`. Cuatro frames y no cinco: la fuente no
 * aporta un numero verificable para el arquetipo `stat` ni un segundo par
 * natural, y rellenar el quinto slot habria exigido inventar una cifra. La
 * duracion de 60 s se reparte en cuatro frames de 15 s, que el ensamblador
 * calcula solo.
 */

export default {
  slug: 'liderazgo-sin-violencia',
  area: 'Liderazgo',
  titulo: 'Liderazgo sin violencia',
  duracion: 60,
  mensaje:
    'Los límites claros son la principal protección frente al exceso de autoridad. Y el ejemplo del jefe fija la norma real del equipo.',
  arco: 'concept-explainer with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con el hecho que más pesa en la práctica diaria, que es que el ejemplo del jefe termina mandando sobre la norma. El par del segundo frame pone los límites al lado de la capacidad de cuestionar, porque uno sin el otro no alcanza. La lista recorre el modelo, el apoyo y la responsabilidad, y el cierre vuelve sobre quién responde.',

  frames: [
    {
      slug: 'el-jefe-manda',
      titulo: 'El jefe manda',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca el liderazgo del registro de las declamaciones. El público entra pensando que la norma la escribe la empresa y sale entendiendo que la fija quien dirige.',
      keyMessage:
        'El ejemplo del jefe fija la norma real del equipo.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'LIDERAZGO SIN VIOLENCIA',
        grande: ['EL EJEMPLO', 'DEL JEFE'],
        remark:
          'Fija la norma real del equipo. Cualquier otra norma es declarativa.',
      },
    },

    {
      slug: 'limites-y-cuestionamiento',
      titulo: 'Límites y cuestionamiento',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Pone al lado las dos piezas que se necesitan juntas. La columna izquierda es la protección; la derecha es lo que la sostiene.',
      keyMessage:
        'Los límites claros son la principal protección frente al exceso de autoridad.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LAS DOS PIEZAS',
        titulo: 'El límite y lo que lo sostiene',
        izq: {
          label: 'La protección',
          head: 'Límites claros',
          body: 'Son la principal protección frente al exceso de autoridad. Sin límite, el exceso no tiene freno.',
        },
        der: {
          label: 'La condición',
          head: 'Poder cuestionar',
          body: 'El equipo debe poder cuestionar una decisión de su jefe. Sin eso, el límite queda escrito y no aplicado.',
        },
      },
    },

    {
      slug: 'lo-que-sostiene',
      titulo: 'Lo que sostiene',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, en el orden en que se construye el liderazgo: primero el modelo, después el apoyo, y al final la responsabilidad que no se delega.',
      keyMessage:
        'El liderazgo se apoya en el ejemplo, la consistencia y el respeto, y da recursos, formación y defensa al equipo.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ LO SOSTIENE',
        titulo: 'Modelo, apoyo y responsabilidad',
        items: [
          { n: '01', head: 'Ejemplo', gloss: 'El ejemplo del jefe fija la norma real del equipo.' },
          { n: '02', head: 'Modelo', gloss: 'El liderazgo se apoya en el ejemplo, la consistencia y el respeto.' },
          { n: '03', head: 'Apoyo', gloss: 'El lider da recursos, formación y defensa al equipo.' },
          { n: '04', head: 'Responsabilidad', gloss: 'La responsabilidad final ante el equipo es de quien dirige.' },
        ],
      },
    },

    {
      slug: 'de-quien-dirige',
      titulo: 'De quien dirige',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre la parte que no se puede delegar. Es lo que el público se lleva del video.',
      keyMessage:
        'La responsabilidad final ante el equipo es de quien dirige.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que el límite sin poder cuestionarlo no se sostiene.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['LA RESPONSABILIDAD', 'FINAL ANTE EL EQUIPO', 'ES DE QUIEN DIRIGE'],
        fuente: 'LIDERAZGO SIN VIOLENCIA · FUENTE INTERNA',
        nota:
          'Un límite que el equipo no puede cuestionar es una declaración, no un límite. Por eso las dos piezas van juntas.',
      },
    },
  ],
};
