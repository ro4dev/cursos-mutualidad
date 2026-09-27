/**
 * frames.spec.mjs — pausas-activas
 *
 * Copy derivado de `INVESTIGACION.md`. Los cinco hechos verificados son del
 * mismo tipo — carga que se acumula y descarga que la alivia — asi que el
 * recorrido va de lo físico a lo cognitive y cierra con el criterio de
 * frecuencia. No se citan estudios de productividad ni minutos concretos de
 * pausa más allá de los dos a cinco que la fuente sí entrega.
 */

export default {
  slug: 'pausas-activas',
  area: 'Bienestar',
  titulo: 'Pausas activas: por qué el cuerpo necesita moverse',
  duracion: 45,
  mensaje:
    'La carga se acumula mientras la posición no cambia. Alternar posturas y cortar seguido rinde más que descansar una sola vez y por mucho tiempo.',
  arco: 'concept-explainer with a number',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la idea de que la postura no se aguanta sola. Se da el número concreto que ordena todo lo demás, y después se recorre carga por carga: columna, vista, hidratación. Se cierra con el criterio que decide cuándo parar, que es frecuencia y no duración.',

  frames: [
    {
      slug: 'el-cuerpo-no-aguanta-solo',
      titulo: 'El cuerpo no aguanta solo',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca las pausas del registro de "un descanso a la tarde". El público entra pensando que descansar es un premio y sale entendiendo que la carga se va acumulando mientras trabaja.',
      keyMessage:
        'La posición estática prolongada carga la columna cervical y lumbar.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'PAUSAS ACTIVAS',
        grande: ['EL CUERPO', 'NO SE MANTIENE SOLO'],
        remark:
          'La carga se acumula mientras la posición no cambia. Por eso hay que alternar, no solo parar.',
      },
    },

    {
      slug: 'el-numero-que-alcanza',
      titulo: 'El número que alcanza',
      tipo: 'stat',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Separa el dato concreto del resto con un filete vertical. Es el número que hace el resto de la lista accionable: si dos minutos alcanzan, no hace falta reservar media hora.',
      keyMessage:
        '2 a 5 minutos de movimiento bastan para restaurar la circulación y la postura.',
      beats: [
        '0.0-1.0s: la regla horizontal se dibuja y el rótulo entra. El número aparece dígito a dígito.',
        '1.0-2.2s: la unidad resuelve al lado y el filete vertical cae, partiendo la pantalla en dos.',
        '2.2-4.5s: la bajada entra, y al final el microcopy de fuente cierra el bloque.',
      ],
      datos: {
        kicker: 'LO QUE YA ALCANZA',
        numero: '2–5',
        unidad: 'MINUTOS DE MOVIMIENTO',
        bajada:
          'Bastan para restaurar la circulación y la postura. No hace falta reservar media hora para que sirva.',
        sub: 'Microdescansos · fuente interna',
      },
    },

    {
      slug: 'las-tres-cargas',
      titulo: 'Las tres cargas',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, ordenado de lo más físico a lo más fino. Cada item dice qué carga se acumula y cuál es su descarga, para que la pausa se elija sola.',
      keyMessage:
        'Columna, vista y concentración son tres cargas distintas, y cada una se alivia distinto.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujándose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ SE ACUMULA',
        titulo: 'Tres cargas, tres descargas',
        items: [
          { n: '01', head: 'Columna', gloss: 'La posición estática prolongada carga la cervical y la lumbar. Alternar posturas reduce la carga.' },
          { n: '02', head: 'Vista', gloss: 'La visión cercana prolongada causa fatiga visual. Mirar de lejos la descansa.' },
          { n: '03', head: 'Atención', gloss: 'Beber agua con regularidad la sostiene y evita la cefalea por deshidratación.' },
        ],
      },
    },

    {
      slug: 'frecuencia-no-duracion',
      titulo: 'Frecuencia, no duración',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo con el criterio que decide cuando parar. Es lo que separa la pausa que rinde de la pausa que se pierde.',
      keyMessage:
        'Descansos cortos y frecuentes rinden más que un descanso largo y único.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la decisión es de frecuencia, no de duración.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['DESCANSOS CORTOS', 'Y FRECUENTES', 'RINDEN MÁS QUE UNO LARGO Y ÚNICO'],
        fuente: 'PAUSAS ACTIVAS Y MICRODESCANSOS EN EL TRABAJO · FUENTE INTERNA',
        nota:
          'La decisión no es cuánto se descansa, sino cada cuánto. El descanso largo y único deja la carga acumulada hasta el final del día.',
      },
    },
  ],
};
