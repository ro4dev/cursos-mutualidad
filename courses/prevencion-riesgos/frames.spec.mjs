/**
 * frames.spec.mjs — prevencion-riesgos
 *
 * Copy derivado de `INVESTIGACION.md`. Cuatro frames y no cinco: la jerarquia
 * de controles va "de eliminacion a EPP" pero la fuente no enumera los
 * escalones intermedios, asi que un stat habria tenido que inventarlos. El
 * cuasi-accidente es el hecho que mas se descarta y por eso tiene su lugar en
 * la lista y no en la nota.
 */

export default {
  slug: 'prevencion-riesgos',
  area: 'Seguridad',
  titulo: 'Prevención de riesgos: antes del incidente',
  duracion: 60,
  mensaje:
    'Un riesgo es la probabilidad de un evento indeseado con daño. Y el cuasi-accidente, el que nosale nada, es la misma información.',
  arco: 'concept-explainer with a contrast',
  audiencia: 'Personal de mutualidades y empresas en Chile',
  estructura:
    'Se abre con la definición, que es lo que ordena el resto. El par separa las dos fases de la identificación, la que es obligatoria y la que es participada. La lista recorre las tres cosas que la gente descarta —el cuasi-accidente, el orden de los controles, el reporte—, y el cierre vuelve al criterio de la jerarquía.',

  frames: [
    {
      slug: 'probabilidad-y-dano',
      titulo: 'Probabilidad y daño',
      tipo: 'gancho',
      poster: 4,
      transition_in: 'cut',
      narrativeRole:
        'Pone la definición exacta, sin abreviar. El público entra creyendo que riesgo es sinonimo de peligro y sale con las dos condiciones separadas.',
      keyMessage:
        'Un riesgo es la probabilidad de que ocurra un evento indeseado con daño.',
      beats: [
        '0.0-1.4s: rótulo mono y la primera frase del titular, a sangre. Entrada con rise-and-fade.',
        '1.4-3.2s: la segunda frase se suma en el mismo bloque, con el filete de acento al costado.',
        '3.2-5.2s: la línea de apoyo entra desde abajo y desciende el ritmo hacia el corte.',
      ],
      datos: {
        kicker: 'PREVENCIÓN DE RIESGOS',
        grande: ['UN RIESGO', 'ES PROBABILIDAD', 'Y ES DAÑO'],
        remark:
          'Las dos cosas juntas. Sin daño no es riesgo, y sin probabilidad no pasa.',
      },
    },

    {
      slug: 'identificar-o-comite',
      titulo: 'Identificar o comité',
      tipo: 'par',
      poster: 5,
      transition_in: 'cut',
      narrativeRole:
        'Separa la fase que corresponde a cada uno. La columna izquierda es la obligación de la empresa; la derecha es la participación, y entra después.',
      keyMessage:
        'La identificación de peligros es la primera fase y se hace por puesto de trabajo; el comite paritario participa cuando corresponde.',
      beats: [
        '0.0-1.4s: rótulo, titulo y filete superior entran.',
        '1.4-3.0s: la columna izquierda, en verde macizo, con su filete vertical.',
        '3.0-5.5s: la columna derecha entra después en contour. El retraso hace que el contraste se lea.',
      ],
      datos: {
        kicker: 'LA PRIMERA FASE',
        titulo: 'Puesto de trabajo y comité',
        izq: {
          label: 'La obligación',
          head: 'Identificar peligros',
          body: 'Es la primera fase, y se hace por puesto de trabajo. No por departamento ni por intuición.',
        },
        der: {
          label: 'Cuando corresponde',
          head: 'El comité paritario',
          body: 'Participa en la identificación y en las medidas. No en la definición del riesgo.',
        },
      },
    },

    {
      slug: 'lo-que-se-descarta',
      titulo: 'Lo que se descarta',
      tipo: 'lista',
      poster: 6,
      transition_in: 'cut',
      narrativeRole:
        'El bloque accionable, en el orden en que se aplica: primero lo que casi no se reporta, después el criterio para elegir medidas, y al final el reporte que las alimenta.',
      keyMessage:
        'El cuasi-accidente es información valiosa, la jerarquía va de eliminación a EPP, y el reporte alimenta la investigación.',
      beats: [
        '0.0-1.0s: rótulo y titulo entran con fade corto.',
        '1.0-4.5s: los tres items entran de a uno, cada uno con su filete dibujandose.',
        '4.5-8.0s: lectura sostenida del bloque, sin movimiento nuevo.',
      ],
      datos: {
        kicker: 'LO QUE SE PASA POR ALTO',
        titulo: 'Tres cosas que se descartan',
        items: [
          { n: '01', head: 'Cuasi-accidente', gloss: 'Un incidente sin lesión ni daño material también es información valiosa de riesgo.' },
          { n: '02', head: 'Jerarquía', gloss: 'Va de eliminación a EPP: primero se elimina, y al final se protege.' },
          { n: '03', head: 'Reporte', gloss: 'Reportar incidentes y cuasi-accidentes alimenta la investigación y la planificación.' },
        ],
      },
    },

    {
      slug: 'primero-se-elimina',
      titulo: 'Primero se elimina',
      tipo: 'cierre',
      poster: 7,
      transition_in: 'crossfade',
      narrativeRole:
        'Cierra bajando el ritmo sobre el criterio que ordena las medidas. Es lo que el público se lleva.',
      keyMessage:
        'La jerarquía de controles va de eliminación a EPP.',
      beats: [
        '0.0-1.2s: rótulo y filete de acento; la regla entra frase por frase.',
        '1.2-2.6s: la nota aclara que el EPP es el último escalon, no el primero.',
        '2.6-4.0s: el bloque de fuente se dibuja al pie y queda en lectura.',
      ],
      datos: {
        kicker: 'LA REGLA QUE SE LLEVAN',
        regla: ['PRIMERO SE ELIMINA', 'AL FINAL', 'SE PROTEGE'],
        fuente: 'PREVENCIÓN DE RIESGOS: ANTES DEL INCIDENTE · FUENTE INTERNA',
        nota:
          'El EPP es el último escalón, no el primero. Y el cuasi-accidente es el aviso más barato: sale sin nada y por eso casi nadie lo reporta.',
      },
    },
  ],
};
