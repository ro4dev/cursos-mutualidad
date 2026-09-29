/**
 * frames.spec.mjs — riesgos-psicosociales
 *
 * Copy derivado de `INVESTIGACION.md`. El numero del segundo frame es un
 * conteo de la enumeracion que hace la fuente, no una cifra externa: son los
 * cuatro factores que la propia investigacion nombra. El par del tercer frame
 * traduce la prevencion en un contraste, porque la fuente ya lo formula asi
 * —cambiar la causa, no solo el efecto—.
 */

export default {
  slug: 'riesgos-psicosociales',
  area: 'Bienestar',
  titulo: 'Riesgos psicosociales',
  duracion: 60,
  mensaje:
    'El riesgo psicosocial no está en la persona: está en cómo está organizado el trabajo. Se previene cambiando la causa, no solo el efecto.',
  arco: 'concept-explainer with a count and a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la definición, que saca el riesgo del registro individual. Sigue el conteo de factores, que es lo que la fuente enumera. El par traduce la prevención en un contraste, porque es la parte que más se confunde. La lista recorre cómo se detecta, qué se ve y qué apoyo existe, y el cierre vuelve a la causa.',

  frames: [
    {
      slug: 'viene-de-la-organizacion',
      titulo: 'Viene de la organización',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca el riesgo psicológico del registro individual. El público entra buscando de quien es el problema y sale entendiendo de donde viene.',
      keyMessage:
        'El riesgo psicosocial es aquel derivado de la organización del trabajo que puede afectar la salud.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'RIESGOS PSICOSOCIALES',
        grande: ['EL RIESGO', 'VIENE DEL TRABAJO'],
        remark:
          'De cómo está organizado. No es un defecto de la persona que lo atiende.',
      },
    },

    {
      slug: 'los-cuatro-factores',
      titulo: 'Los cuatro factores',
      tipo: 'stat',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Baja la definición a los cuatro factores que la fuente enumera. El filete vertical parte la pantalla y deja la enumeración completa del lado de la bajada.',
      keyMessage:
        'Carga de trabajo, falta de control, ambigüedad de roles e insuficiente apoyo.',
      beats: [
        '0.0-1.0s: la regla horizontal se dibuja y el rótulo entra. El número aparece digito a digito.',
        '1.0-2.2s: la unidad resuelve al lado y el filete vertical cae, partiendo la pantalla en dos.',
        '2.2-4.5s: la bajada entra, y al final el microcopy de fuente cierra el bloque.',
      ],
      datos: {
        kicker: 'DE DÓNDE VIENE',
        numero: '4',
        unidad: 'FACTORES',
        bajada:
          'Carga de trabajo, falta de control, ambigüedad de roles e insuficiente apoyo.',
        sub: 'Factores de riesgo psicosocial · fuente interna',
      },
    },

    {
      slug: 'causa-o-efecto',
      titulo: 'Causa o efecto',
      tipo: 'par',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Traduce la prevención en el contraste que la fuente ya formula. La columna izquierda es la que funciona; la derecha entra en contour porque es lo que se suele hacer y no alcanza.',
      keyMessage:
        'La prevención son medidas organizacionales: cambiar la causa, no solo el efecto.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'CÓMO SE PREVIENE',
        titulo: 'La causa o el efecto',
        izq: {
          label: 'Lo que funciona',
          head: 'Cambiar la causa',
          body: 'Medidas organizacionales sobre cómo está organizado el trabajo. Ahí es donde está el riesgo.',
        },
        der: {
          label: 'Lo que no alcanza',
          head: 'Solo el efecto',
          body: 'Atender lo que aparece sin cambiar la causa deja el riesgo instalado, y vuelve en el siguiente ciclo.',
        },
      },
    },

    {
      slug: 'deteccion-y-apoyo',
      titulo: 'Detección y apoyo',
      tipo: 'lista',
      poster: 7,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable en el orden en que se usa: primero se identifica formalmente, después se reconoce el síntoma, y al final esta el apoyo disponible.',
      keyMessage:
        'Los riesgos psicosociales se identifican y evalúan formalmente, y hay atención y redes de apoyo disponibles.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'QUÉ SE HACE',
        titulo: 'Identificar, reconocer, apoyar',
        items: [
          { n: '01', head: 'Identificación', gloss: 'Los riesgos psicosociales se identifican y evalúan formalmente.' },
          { n: '02', head: 'Síntomas', gloss: 'Estrés sostenido puede manifestarse en sueño, ánimo y concentración.' },
          { n: '03', head: 'Apoyo', gloss: 'Atención y redes de apoyo disponibles para las personas afectadas.' },
        ],
      },
    },

    {
      slug: 'la-causa-manda',
      titulo: 'La causa manda',
      tipo: 'cierre',
      poster: 8,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre el criterio que ordena todo el video. Es lo que el público se lleva.',
      keyMessage:
        'Si la medida no cambia la causa, no es prevención: es atención del efecto.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que el riesgo vive en la organización, no en la persona.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['EL RIESGO VIENE', 'DE LA ORGANIZACIÓN', 'DEL TRABAJO'],
        fuente: 'RIESGOS PSICOSOCIALES · FUENTE INTERNA',
        nota:
          'Por eso la prevención se decide arriba y no en la consulta individual: cambiar la causa es una medida organizacional, y no un consejo.',
      },
    },
  ],
};
