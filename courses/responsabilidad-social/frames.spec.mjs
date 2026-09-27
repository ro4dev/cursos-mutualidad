/**
 * frames.spec.mjs — responsabilidad-social
 *
 * Copy derivado de `INVESTIGACION.md`. La definición de RSE y sus dos
 * condiciones — asumido y verificable — son el hecho verificado que ordena
 * todo lo demás. El video no nombra programas, certificaciones ni cifras
 * de ninguna empresa: la fuente no los trae y un ejemplo concreto de RSE
 * anotado en pantalla es un reclamo esperando que existe.
 */

export default {
  slug: 'responsabilidad-social',
  area: 'Cultura',
  titulo: 'Responsabilidad social empresarial',
  duracion: 45,
  mensaje:
    'La responsabilidad social no es una frase sobre la empresa: es un compromiso con su entorno que se puede asumir y verificar.',
  arco: 'concept-explainer with contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la definición y sus dos condiciones, que son el filtro para todo lo demás. Se contrasta el compromiso que empieza adentro con el que se hace hacia afuera, porque el orden importa. Se recorren las tres dimensiones verificables y se cierra con la transparencia, que es lo que vuelve el compromiso comprobable.',

  frames: [
    {
      slug: 'asumido-y-verificable',
      titulo: 'Asumido y verificable',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'El público entra con la imagen del slogan. Sale con el criterio que permite separar un compromiso de una frase de marketing.',
      keyMessage:
        'La responsabilidad social es el compromiso de la empresa con su entorno, asumido y verificable.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'RESPONSABILIDAD SOCIAL EMPRESARIAL',
        grande: ['UN COMPROMISO', 'ASUMIDO Y VERIFICABLE'],
        remark:
          'Con su entorno. Y con la propia empresa antes que con nadie más.',
      },
    },

    {
      slug: 'adentro-y-afuera',
      titulo: 'Adentro y afuera',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Separa las dos direcciones del compromiso. La columna izquierda es la que gana, porque el orden es parte de lo que se afirma.',
      keyMessage:
        'El compromiso empieza por las condiciones de trabajo de la propia empresa.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'EL ORDEN IMPORTA',
        titulo: 'Adonde empieza, y hacia dónde',
        izq: {
          label: 'Adentro primero',
          head: 'Las condiciones de trabajo',
          body: 'El compromiso empieza por las condiciones de trabajo de la propia empresa. Ese es el primer lugar donde se nota.',
        },
        der: {
          label: 'Hacia afuera',
          head: 'La comunidad',
          body: 'La contribución a la comunidad se mide por su continuidad, no por el anuncio que la hace.',
        },
      },
    },

    {
      slug: 'las-tres-cosas',
      titulo: 'Las tres cosas',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Las tres dimensiones que se pueden verificar. Es el bloque que convierte el compromiso en algo comprobable, y por eso cada item dice cómo se comprueba.',
      keyMessage:
        'Comunidad, ambiente y transparencia son verificables; sin eso no hay compromiso que se pueda sostener.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujándose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ SE VERIFICA',
        titulo: 'Tres dimensiones comprobables',
        items: [
          { n: '01', head: 'Comunidad', gloss: 'Se mide por su continuidad, no por el anuncio que la hace.' },
          { n: '02', head: 'Ambiente', gloss: 'La sustentabilidad ambiental se refleja en la operación diaria.' },
          { n: '03', head: 'Transparencia', gloss: 'La comunicación de resultados debe ser transparente y verificable.' },
        ],
      },
    },

    {
      slug: 'sin-transparencia-no-hay',
      titulo: 'Sin transparencia no hay',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo y ata las dos condiciones de la apertura. Sin comunicación de resultados, el compromiso queda declarado y nada más.',
      keyMessage:
        'Un compromiso que no se comunica con transparencia no se puede verificar.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la transparencia es la condición que hace verificable el resto.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['SI NO SE COMUNICA', 'CON TRANSPARENCIA', 'NO SE PUEDE VERIFICAR'],
        fuente: 'RESPONSABILIDAD SOCIAL EMPRESARIAL · FUENTE INTERNA',
        nota:
          'La transparencia no es un extra de la responsabilidad social: es la condición que vuelve verificable todo lo demás.',
      },
    },
  ],
};
