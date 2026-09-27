/**
 * frames.spec.mjs — seguridad-trabajo
 *
 * Copy derivado de `INVESTIGACION.md`. El numero del segundo frame cuenta
 * las cinco condiciones ambientales que la propia fuente enumera, no una cifra
 * externa. La retirada ante riesgo grave e inminente es el hecho que ordena
 * el par, porque es el unico que describe un derecho con dos garantias
 * concretas: restauracion de las condiciones y no perdida de jornada.
 */

export default {
  slug: 'seguridad-trabajo',
  area: 'Seguridad',
  titulo: 'Seguridad en el trabajo: derechos y deberes',
  duracion: 60,
  mensaje:
    'Proteger no es opcional: el empleador provee y mantiene, el trabajador usa e informa, y ante riesgo grave e inminente se puede retirar.',
  arco: 'concept-explainer with a count and a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con el deber del empleador, que es el que abre el relato. Sigue el conteo de condiciones ambientales, que es donde está la mayor parte de la norma. El par contrasta el deber de proteger con el derecho a retirarse, y deja claro que retirar tiene garantía. La lista recorre el deber del trabajador y quien fiscaliza, y el cierre termina en la cultura.',

  frames: [
    {
      slug: 'proveer-mantener-exigir',
      titulo: 'Proveer, mantener, exigir',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Saca la seguridad del registro de "estar atento". El público entra creyendo que es una actitud y sale entendiendo que son tres obligaciones separadas.',
      keyMessage:
        'El empleador debe proveer, mantener y exigir el uso de elementos de protección personal adecuados al riesgo.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'SEGURIDAD EN EL TRABAJO',
        grande: ['PROVEER, MANTENER', 'Y EXIGIR'],
        remark:
          'Son tres obligaciones. Proveer el EPP es solo la primera, y es la que más se recuerda.',
      },
    },

    {
      slug: 'cinco-condiciones',
      titulo: 'Cinco condiciones',
      tipo: 'stat',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Baja el deber general a las cinco condiciones que la fuente enumera. El filete vertical parte la pantalla y deja la lista completa legible del lado de la bajada.',
      keyMessage:
        'Iluminación, ventilación, temperatura, ruido y vibraciones, dentro de los límites legales.',
      beats: [
        '0.0-1.0s: la regla horizontal se dibuja y el rótulo entra. El número aparece digito a digito.',
        '1.0-2.2s: la unidad resuelve al lado y el filete vertical cae, partiendo la pantalla en dos.',
        '2.2-4.5s: la bajada entra, y al final el microcopy de fuente cierra el bloque.',
      ],
      datos: {
        kicker: 'CONDICIONES AMBIENTALES',
        numero: '5',
        unidad: 'CONDICIONES',
        bajada:
          'Iluminación, ventilación, temperatura, ruido y vibraciones, dentro de los límites legales.',
        sub: 'Condiciones ambientales · fuente interna',
      },
    },

    {
      slug: 'proteger-o-retirarse',
      titulo: 'Proteger o retirarse',
      tipo: 'par',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'Pone al lado las dos mitades de la obligación. La columna izquierda es el deber permanente; la derecha es el derecho de una vez, con sus dos garantías.',
      keyMessage:
        'El trabajador puede retirarse ante riesgo grave e inminente, con restauración de las condiciones y sin perdida de jornada.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'DERECHO Y DEBER',
        titulo: 'Proteger siempre, retirarse si toca',
        izq: {
          label: 'El deber',
          head: 'Proteger y mantener',
          body: 'Elementos de protección personal adecuados al riesgo, y condiciones ambientales seguras.',
        },
        der: {
          label: 'El derecho',
          head: 'Retirarse',
          body: 'Ante riesgo grave e inminente, con restauración de las condiciones y sin pérdida de jornada.',
        },
      },
    },

    {
      slug: 'deber-y-fiscalizacion',
      titulo: 'Deber y fiscalización',
      tipo: 'lista',
      poster: 7,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable del lado del trabajador y de quien verifica: las tres conductas que se esperan, quien puede fiscalizar, y el punto que no es de seguridad pero se exige igual.',
      keyMessage:
        'Usar los EPP, informar situaciones peligrosas y colaborar en la investigación; y la fiscalización existe.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'EL OTRO LADO',
        titulo: 'Deber del trabajador y fiscalización',
        items: [
          { n: '01', head: 'Deber del trabajador', gloss: 'Usar los EPP, informar situaciones peligrosas y colaborar en la investigación de incidentes.' },
          { n: '02', head: 'Fiscalización', gloss: 'La Dirección del Trabajo y las autoridades de higiene y seguridad pueden fiscalizar.' },
          { n: '03', head: 'Cultura y respeto', gloss: 'La decencia y el respeto se exigen en todos los niveles de la organización.' },
        ],
      },
    },

    {
      slug: 'en-todos-los-niveles',
      titulo: 'En todos los niveles',
      tipo: 'cierre',
      poster: 8,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre el punto que suele quedar fuera del discurso de seguridad. Es lo que el público se lleva.',
      keyMessage:
        'La decencia y el respeto se exigen en todos los niveles de la organización.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que la exigencia de respeto no baja con el cargo.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['LA DECENCIA', 'Y EL RESPETO', 'EN TODOS LOS NIVELES'],
        fuente: 'SEGURIDAD EN EL TRABAJO: DERECHOS Y DEBERES · FUENTE INTERNA',
        nota:
          'El EPP protege el cuerpo. La decencia y el respeto, en todos los niveles, son parte del mismo estándar de seguridad.',
      },
    },
  ],
};
