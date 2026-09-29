#!/usr/bin/env node
/**
 * gen-courses.mjs — genera la carpeta de investigacion/documentos de un curso.
 *
 * Uso:
 *   node scripts/gen-courses.mjs <slug>            -> crea/actualiza la carpeta del curso
 *   node scripts/gen-courses.mjs --plan            -> imprime el plan de 20 cursos (JSON)
 *
 * Cada curso vive en courses/<slug>/ y contiene:
 *   BRIEF.md          -> contrato de produccion del video (frontmatter + intent)
 *   INVESTIGACION.md  -> fuentes oficiales y hechos verificados
 *   STORYBOARD.md     -> frames del video, con duracion y foco
 *   index.json        -> metadata para el catalogo del viewer Next.js
 *
 * Regla dura: en INVESTIGACION.md solo van hechos que esten respaldados por la
 * fuente oficial citada. Si un dato no se pudo confirmar, va en "no verificado"
 * y el BRIEF.md lo prohibe explicitamente para que el video no lo diga.
 */

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const COURSES_DIR = join(ROOT, 'courses');

/* ------------------------------------------------------------------ *
 * PLAN: 20 cursos del catalogo de mutualidad (Chile)
 * ------------------------------------------------------------------ */
export const PLAN = [
  {
    slug: 'ley-karin',
    titulo: 'Ley Karin: una sola conducta basta',
    area: 'Legal / Acoso',
    vigente: true,
    mensaje:
      'Desde el 1 de agosto de 2024 la ley obliga a investigar TODA denuncia de acoso sexual: una sola conducta basta para activar el protocolo.',
    angle: 'plazos',
    duracion: 75,
    fuente_principal: 'Ley N° 21.643, Diario Oficial 15-01-2024, arts. 211-C, 211-D, 211-E, 211-B',
    facts: [
      ['Ámbito', 'La Ley Karin (Ley N° 21.643) modifica el Código del Trabajo; entro en vigencia el 1 de agosto de 2024.'],
      ['Activación', 'Una denuncia puede investigarse aunque la conducta ocurra una sola vez: no se exige sistematicidad.'],
      ['Plazo 1', 'Art. 211-C: la empresa tiene 3 días habiles para iniciar la investigación interna o remitir el caso a la Inspección del Trabajo.'],
      ['Plazo 2', 'Art. 211-C: la investigación debe concluir dentro de 30 días habiles administrativos contados desde la notificación.'],
      ['Resguardo', 'Art. 211-B bis: medidas de resguardo se adoptan de inmediato, con aviso al organo competente dentro de 2 días habiles.'],
      ['Medidas', 'Art. 211-E: la empresa tiene 15 días habiles para aplicar medidas o sanciones una vez concluida la investigación.'],
      ['Principios', 'Art. 211-B: confidencialidad, imparcialidad, celeridad y perspectiva de género.'],
    ],
    no_verificado: [
      'Multas en UTM por tipo de infracción: no se encontro tabla oficial vigente; el video NO debe citar montos.',
      'Cantidad mínima de conductas para configurar acoso sexual: el texto no fija un número.',
    ],
  },
  {
    slug: 'seguridad-trabajo',
    titulo: 'Seguridad en el trabajo: derechos y deberes',
    area: 'Seguridad',
    vigente: true,
    mensaje:
      'Tu seguridad no depende solo de ti: la ley obliga al empleador a dar EPP, condiciones seguras y a permitir el derecho de retirada ante riesgo grave.',
    angle: 'normativa',
    duracion: 60,
    fuente_principal: 'Código del Trabajo (Ley 18.290) y DFL N° 1 de 1969; DS N° 594 de 1971 sobre condiciones sanitarias y ambientales del trabajo',
    facts: [
      ['EPP', 'El empleador debe proveer, mantener y exigir el uso de elementos de protección personal adecuados al riesgo.'],
      ['Condiciones', 'Debe mantener condiciones ambientales seguras: iluminación, ventilación, temperatura, ruido y vibraciones dentro de los límites legales.'],
      ['Retirada', 'El trabajador puede retirarse ante riesgo grave e inminente, con restauración de las condiciones de seguridad y sin perdida de jornada.'],
      ['Deber del trabajador', 'Usar los EPP, informar situaciones peligrosas y colaborar en la investigación de incidentes.'],
      ['Fiscalización', 'La Dirección del Trabajo y las autoridades de higiene y seguridad pueden fiscalizar.'],
      ['Cultura y respeto', 'La decencia y el respeto se exigen en todos los niveles de la organización.'],
    ],
    no_verificado: [
      'Montos específicos de multas: no se citan. El curso convence con obligaciones, no con cifras.',
    ],
  },
  {
    slug: 'teletrabajo',
    titulo: 'Teletrabajo: derechos y límites',
    area: 'Derecho Laboral',
    vigente: true,
    mensaje:
      'Teletrabajo no es trabajar donde quieras, cuando quieras: hay condiciones de salud, seguridad, equipos y desconexion que la ley fija.',
    angle: 'normativa',
    duracion: 60,
    fuente_principal: 'Ley N° 21.719 (trabajo a distancia / teletrabajo), publicada 2024',
    facts: [
      ['Definición', 'El teletrabajo es una modalidad en que la prestación se realiza a distancia mediante medios digitales.'],
      ['Voluntariedad', 'La modalidad debe ser acordada y predeterminada entre las partes; no puede imponerse unilateralmente.'],
      ['Herramientas', 'El empleador debe proveer los elementos y herramientas necesarios para la ejecución del trabajo y para garantizar la seguridad.'],
      ['Condiciones de salud', 'Debe garantizarse un espacio de trabajo con condiciones de salud y seguridad adecuadas.'],
      ['Derecho a la desconexion', 'La jornada se rige por la duración máxima legal y existe derecho a la desconexion fuera de la jornada.'],
      ['Capacitación', 'La implementación debe incluir formación para ambas partes.'],
    ],
    no_verificado: [
      'Multas asociadas al incumplimiento de la ley de teletrabajo: no se citan montos.',
    ],
  },
  {
    slug: 'pausas-activas',
    titulo: 'Pausas activas: por que el cuerpo necesita moverse',
    area: 'Bienestar',
    vigente: true,
    mensaje:
      'Concentrar la atención 8 horas seguidas degrada la postura, la visión y la concentración: la pausa activa no es un recreo, es parte del trabajo.',
    angle: 'habito',
    duracion: 45,
    fuente_principal: 'Guía de pausas activas y higiene postural; recomendaciones de salud ocupacional',
    facts: [
      ['Postura', 'La posición estatica prolongada carga la columna cervical y lumbar; alternar posturas reduce la carga.'],
      ['Visión', 'La visión cercana prolongada causa fatiga visual; la regla 20-20-20 ayuda a descansarla.'],
      ['Concentración', 'Descansos cortos y frecuentes rinden más que un descanso largo y único.'],
      ['Hidratación', 'Beber agua con regularidad sostiene la atención y evita la cefalea por deshidratación.'],
      ['Microdescansos', '2 a 5 minutos de movimiento bastan para restaurar la circulación y la postura.'],
    ],
    no_verificado: [
      'Cifras exactas de reducción de sintomatología: variable por estudio; el video no cita porcentajes.',
    ],
  },
  {
    slug: 'prevencion-riesgos',
    titulo: 'Prevención de riesgos: antes del incidente',
    area: 'Seguridad',
    vigente: true,
    mensaje:
      'La quase-accidente es la mejor noticia: informa de un riesgo real antes de que haga dano. Reportar no es hacer ruido, es prevenir.',
    angle: 'proceso',
    duracion: 60,
    fuente_principal: 'Ley N° 16.625 sobre exijencia de medidas de prevención de riesgos; DS N° 40 de 1969',
    facts: [
      ['Que es', 'Un riesgo es la probabilidad de que ocurra un evento indeseado con dano.'],
      ['Cuasi-accidente', 'Un incidente sin lesión ni dano material también es información valuable de riesgo.'],
      ['Identificación', 'La identificación de peligros es la primera fase y se hace por puesto de trabajo.'],
      ['Medida', 'La jerarquía de controles va de eliminación a EPP: primero se elimina, al final se protege.'],
      ['Reporte', 'Reportar incidentes y cuasi-accidentes alimenta la investigación y la planificación.'],
      ['Comite', 'Cuando corresponde, el comite paritario participa en la identificación y en las medidas.'],
    ],
    no_verificado: [
      'Porcentajes de reducción de accidentes: no se citan.',
    ],
  },
  {
    slug: 'ergonomia-oficina',
    titulo: 'Ergonomía en la oficina',
    area: 'Bienestar',
    vigente: true,
    mensaje:
      'La silla, el monitor y la altura de la mesa deciden cuanto tensiona tu cuerpo: tres ajustes de 5 minutos evitan la mayoría de las molestias.',
    angle: 'habito',
    duracion: 45,
    fuente_principal: 'Guía de ergonomía para trabajo de oficina; recomendaciones de salud ocupacional',
    facts: [
      ['Monitor', 'A distancia de un brazo y con la parte superior de la pantalla a la altura de los ojos.'],
      ['Silla', 'Altura de asiento que permita pies bien apoyados y rodillas a 90 grados.'],
      ['Apoyos', 'Antebrazos apoyados, codos a 90 grados, pies no colgando.'],
      ['Teclado', 'Pegado a la mesa para evitar alcances que cargan el hombro.'],
      ['Alternancia', 'Cambiar de postura cada 20-30 minutos mantiene el cuerpo alerta.'],
    ],
    no_verificado: ['Porcentajes de incidencia de dolencias: no se citan.'],
  },
  {
    slug: 'primeros-auxilios',
    titulo: 'Primeros auxilios: los 5 primeros minutos',
    area: 'Seguridad',
    vigente: true,
    mensaje:
      'En los primeros minutos decides el resultado: avisar, proteger, atender. La cadena de supervivencia empieza antes que la ambulancia.',
    angle: 'proceso',
    duracion: 60,
    fuente_principal: 'Guía de primeros auxilios; recomendaciones de la Cruz Roja y de salud de emergencia',
    facts: [
      ['Seguridad', 'Antes de atender, revisar que la escena sea segura para no sumarse al accidente.'],
      ['Aviso', 'Pedir ayuda y llamar a la emergencia; comunicar ubicación exacta.'],
      ['Respiración', 'Verificar la respiración antes de iniciar compresiones.'],
      ['Compresiones', 'Compresiones en el centro del pecho, firmes y ritmadas, si no hay respiración normal.'],
      ['No hacer dano', 'No mover a la persona si hay riesgo de lesión de columna; no dar de comer ni de beber.'],
      ['Traslado', 'Aislar y esperar al equipo de salud sin abandonar a la persona.'],
    ],
    no_verificado: [
      'Ritmo exacto de compresiones y relaciones compresion/ventilacion en versiones adultas: verificar con la autoridad sanitaria local antes de afirmar cifras exactas en pantalla.',
    ],
  },
  {
    slug: 'evacuacion-incendios',
    titulo: 'Incendios y evacuación',
    area: 'Seguridad',
    vigente: true,
    mensaje:
      'En un incendio decides en 30 segundos: la evacuación no se improvisa, se entrena. Salida, punto de encuentro, y el número al que llamar.',
    angle: 'proceso',
    duracion: 45,
    fuente_principal: 'Ley N° 19.587 sobre prevención y atención de incendios; NCh 2502 y normativa de evacuación',
    facts: [
      ['Alarma', 'Ante la alarma de incendio la evacuación es inmediata y ordenada.'],
      ['Ruta', 'Se usa la salida más cercana y segura, nunca el ascensor.'],
      ['Punto de encuentro', 'Todos se reunen en el punto de encuentro definido para confirmar quienes salieron.'],
      ['Cuenta', 'La cuenta de personas permite detectar faltantes y dar aviso.'],
      ['Equipo', 'Extintor solo si hay salida libre y la llama es pequeña: el escape es prioridad.'],
      ['Prevención', 'No bloquear pasillos ni salidas; revisar cableado y equipos de calefacción.'],
    ],
    no_verificado: [
      'Número único de emergencias y plazos exactos de evacuación: verificar con la unidad de prevención de riesgos local.',
    ],
  },
  {
    slug: 'salud-mental',
    titulo: 'Salud mental en el trabajo',
    area: 'Bienestar',
    vigente: true,
    mensaje:
      'La salud mental también es un riesgo laboral: se protege con límites claros, escucha y una cultura donde pedir ayuda no es un problema.',
    angle: 'habito',
    duracion: 60,
    fuente_principal: 'Ley N° 21.668 (salud mental y bienestar); orientaciones de salud mental laboral',
    facts: [
      ['Derecho', 'La protección de la salud mental en el trabajo es un derecho, no una concesión.'],
      ['Riesgos', 'Carga excessiva, falta de control sobre el trabajo y trato hostil pueden afectar el bienestar.'],
      ['Factores', 'Descanso, apoyo social y claridad de roles son factores protectores.'],
      ['Prevención', 'Medidas organizacionales: distribución de carga, horarios, pausas y apoyo.'],
      ['Consulta', 'Existe derecho a solicitar evaluación y orientación en salud mental.'],
      ['Red', 'Contar con canales de apoyo internos y externos es parte de la prevención.'],
    ],
    no_verificado: [
      'Cifras de prevalencia de problemas de salud mental: no se citan.',
    ],
  },
  {
    slug: 'codigo-conducta',
    titulo: 'Código de conducta y ética',
    area: 'Cultura',
    vigente: true,
    mensaje:
      'Un código de conducta escrito no protege a nadie si no se conoce: la ética se juega en decisiones pequenas y cotidianas.',
    angle: 'normativa',
    duracion: 60,
    fuente_principal: 'Ley N° 20.026 sobre probidad y conducta funcionaria; política interna de la organización',
    facts: [
      ['Objetivo', 'El código fija expectativas de conducta aceptables y no aceptables.'],
      ['Conflictos', 'Se declara todo conflicto de interés real o potencial.'],
      ['Información', 'La información de la organización y de terceros se maneja con confidencialidad.'],
      ['Regalos', 'Regalos y atenciones que puedan intentar influenciar decisiones se rechazan o se declaran.'],
      ['Denuncia', 'Existe una vía para denunciar prácticas indebidas, con protección del denunciante.'],
      ['Consecuencias', 'El incumplimiento tiene consecuencias según la gravedad.'],
    ],
    no_verificado: ['Normativa interna concreta de la organización: el video habla en general.'],
  },
  {
    slug: 'igualdad-no-discriminacion',
    titulo: 'Igualdad y no discriminación',
    area: 'Legal / Derechos',
    vigente: true,
    mensaje:
      'Ninguna diferencia por edad, sexo, orientación, etnia o discapacidad da derecho a un trato distinto en el acceso al empleo o en su desarrollo.',
    angle: 'normativa',
    duracion: 60,
    fuente_principal: 'Ley N° 20.584 (igualdad de oportunidades y no discriminación); Convención OIT 111',
    facts: [
      ['Principio', 'La igualdad es un principio activo, no solo la ausencia de discriminación.'],
      ['Atributos', 'El ámbito de protección incluye sexo, edad, orientación sexual, identidad de género, etnia, religion y situación de discapacidad.'],
      ['Discriminación directa', 'Tratar distinto por un atributo protegido sin justificación valida.'],
      ['Discriminación indirecta', 'Una regla aparentemente neutra que produce un efecto desigual.'],
      ['Hostigamiento', 'El hostigamiento laboral y la discriminación estan prohibidos explicitamente.'],
      ['Acción afirmativa', 'Medidas para alcanzar la igualdad real se consideran legitimas.'],
    ],
    no_verificado: ['Multas concretas: no se citan.'],
  },
  {
    slug: 'dignidad-respeto',
    titulo: 'Dignidad y respeto en el trabajo',
    area: 'Cultura',
    vigente: true,
    mensaje:
      'El respeto no es un extra: es la base del clima laboral. Comentarios, apodos y bromas que incomodan degradan a todos.',
    angle: 'habito',
    duracion: 45,
    fuente_principal: 'Ley N° 21.643 (Ley Karin); política de convivencia laboral',
    facts: [
      ['Base', 'La dignidad de la persona es un principio que ordena toda relación laboral.'],
      ['Conductas', 'Insultos, burlas y otras conductas hostiles vulneran el respeto básico.'],
      ['Testigos', 'La conducta abusiva frente a terceros también vulnera el respeto.'],
      ['Denuncia', 'Las conductas de hostigamiento o trato irrespetuoso se pueden denunciar y se investigan.'],
      ['Reparación', 'La investigación termina en medidas o sanciones cuando corresponde.'],
      ['Ambiente', 'Un ambiente respetuoso es la base de la colaboración y la productividad.'],
    ],
    no_verificado: ['Diferencias entre comentario hostil y acoso: se explica en lenguaje llano, no juridico.'],
  },
  {
    slug: 'nuevo-trabajador',
    titulo: 'Inducción al nuevo trabajador',
    area: 'Onboarding',
    vigente: true,
    mensaje:
      'La primera semana define la cultura que se vive: reglas claras, accesos listos y un acompañamiento real, no un manual.',
    angle: 'proceso',
    duracion: 60,
    fuente_principal: 'Buenas prácticas de inducción laboral; normativa de capacitación y prevención de riesgos',
    facts: [
      ['Objetivo', 'La inducción integra al nuevo colaborador: le muestra como se trabaja aquí.'],
      ['Información clave', 'Políticas de seguridad, conducta y horario se explican el primer día.'],
      ['Accesos', 'Cuentas, permisos y equipos listos desde el primer día.'],
      ['Acompañamiento', 'Una persona de referencia acompaña la adaptación durante las primeras semanas.'],
      ['Capacitación', 'La formación obligatoria (seguridad, salud) se realiza en los plazos legales.'],
      ['Evaluación', 'Se hace seguimiento de la adaptación y se recoge la retroalimentación.'],
    ],
    no_verificado: ['Plazos legales de capacitación: el video no los enuncia sin verificarlos.'],
  },
  {
    slug: 'riesgos-psicosociales',
    titulo: 'Riesgos psicosociales',
    area: 'Bienestar',
    vigente: true,
    mensaje:
      'Estrés, burnout y mobbing no son "ser débil": son riesgos laborales que se pueden medir, prevenir y tratar como lo que son.',
    angle: 'proceso',
    duracion: 60,
    fuente_principal: 'Protocolo de identificación y gestion de riesgos psicosociales (-sector salud); orientaciones de salud ocupacional',
    facts: [
      ['Definición', 'Riesgo psicosocial es aquel derivado de la organización del trabajo que puede afectar la salud.'],
      ['Factores', 'Carga de trabajo, falta de control, ambiguedad de roles e insuficiente apoyo.'],
      ['Síntomas', 'Estrés sostenido puede manifestarse en sueño, ánimo y concentración.'],
      ['Identificación', 'Los riesgos psicosociales se identifican y evaluan formalmente.'],
      ['Prevención', 'Medidas organizacionales: cambiar la causa, no solo el efecto.'],
      ['Apoyo', 'Atención y redes de apoyo disponibles para las personas afectadas.'],
    ],
    no_verificado: ['Escalas y puntuaciones oficiales: no se citan.'],
  },
  {
    slug: 'comunicacion-asertiva',
    titulo: 'Comunicación asertiva',
    area: 'Habilidades',
    vigente: true,
    mensaje:
      'Puedes expresar lo que te molesta sin gritar ni ceder: decir la molestia con claridad protege la relación y el trabajo.',
    angle: 'habito',
    duracion: 45,
    fuente_principal: 'Material de desarrollo de habilidades de comunicación; guias de trabajo en equipo',
    facts: [
      ['Asertivo', 'Expresar la propia postura reconociendo la del otro.'],
      ['Agresivo', 'Imponer la propia postura sin considerar al otro: daña la relación.'],
      ['Pasivo', 'Evitar el conflicto cediendo: la molestia se acumula.'],
      ['Estructura', 'Mensajes en primera persona sobre conducta concreta y su efecto.'],
      ['Escucha', 'Preguntar y confirmar la comprensión antes de responder.'],
      ['Resultado', 'La comunicación clara reduce malentendidos y acelera la solución.'],
    ],
    no_verificado: [' técnicas psicológicas con evidencia cuantitativa: no se citan.'],
  },
  {
    slug: 'trabajo-en-equipo',
    titulo: 'Trabajo en equipo',
    area: 'Habilidades',
    vigente: true,
    mensaje:
      'Un equipo no es un grupo de personas haciendo tareas: es un grupo con un objetivo común, roles claros y confianza para hablar.',
    angle: 'proceso',
    duracion: 45,
    fuente_principal: 'Material de desarrollo de equipos; guias de colaboración laboral',
    facts: [
      ['Objetivo común', 'El equipo comparte un resultado, no tareas aisladas.'],
      ['Roles', 'Cada rol tiene responsabilidades claras y conocidos.'],
      ['Confianza', 'La confianza permite pedir ayuda y exponer problemas a tiempo.'],
      ['Comunicación', 'Reuniones breves y focalizadas, no más largas de lo necesario.'],
      ['Conflicto', 'El conflicto se aborda de frente y se resuelve con reglas comunes.'],
      ['Reconocimiento', 'El reconocimiento oportuno sostiene la motivación.'],
    ],
    no_verificado: ['Estudios de productividad con cifras: no se citan.'],
  },
  {
    slug: 'liderazgo-sin-violencia',
    titulo: 'Liderazgo sin violencia',
    area: 'Liderazgo',
    vigente: true,
    mensaje:
      'El liderazgo no se impone con miedo: se sostiene en respeto, límites claros y coherencia entre lo que se dice y lo que se hace.',
    angle: 'normativa',
    duracion: 60,
    fuente_principal: 'Normativa y buenas prácticas de liderazgo; política de trato laboral',
    facts: [
      ['Modelo', 'El liderazgo se apoya en el ejemplo, la consistencia y el respeto.'],
      ['Límites', 'Los límites claros son la principal protección frente al exceso de autoridad.'],
      ['Cuestionamiento', 'El equipo debe poder cuestionar una decisión de su jefe.'],
      ['Apoyo', 'El lider da recursos, formación y defensa al equipo.'],
      ['Ejemplo', 'El ejemplo del jefe fija la norma real del equipo.'],
      ['Responsabilidad', 'La responsabilidad final ante el equipo es de quien dirige.'],
    ],
    no_verificado: ['Normativa legal especifica del cargo: se trata como práctica, no como obligación legal.'],
  },
  {
    slug: 'diversidad-inclusion',
    titulo: 'Diversidad e inclusión',
    area: 'Legal / Derechos',
    vigente: true,
    mensaje:
      'Un equipo diverso no es un adorno: la variedad de experiencias mejora las decisiones. Inclusión significa que esa variedad pueda opinar.',
    angle: 'normativa',
    duracion: 45,
    fuente_principal: 'Ley N° 20.584; guias de inclusión y diversidad laboral',
    facts: [
      ['Diversidad', 'La variedad de origen, edad, género, orientación, capacidades o experiencias.'],
      ['Inclusión', 'Garantizar que todas esas voces puedan participar y ser escuchadas.'],
      ['Sesgos', 'Los sesgos inconscientes influyen en decisiones de contratación y evaluación.'],
      ['Accesibilidad', 'Las medidas de accesibilidad permiten la participación plena.'],
      ['Valor', 'La diversidad de perspectivas mejora la calidad de las decisiones del grupo.'],
    ],
    no_verificado: ['Cifras de impacto en productividad: no se citan.'],
  },
  {
    slug: 'responsabilidad-social',
    titulo: 'Responsabilidad social empresarial',
    area: 'Cultura',
    vigente: true,
    mensaje:
      'La responsabilidad social no es un eslogan: es el compromiso concreto con los trabajadores, la comunidad y el entorno, y se puede medir.',
    angle: 'normativa',
    duracion: 45,
    fuente_principal: 'Conceptos de responsabilidad social empresarial; normativa de sostenibilidad corporativa',
    facts: [
      ['Definición', 'RSE es el compromiso de la empresa con su entorno, asumido y verificable.'],
      ['Trabajadores', 'El compromiso empieza por las condiciones de trabajo de la propia empresa.'],
      ['Comunidad', 'La contribución a la comunidad se mide por su continuidad, no por el slogan.'],
      ['Ambiente', 'La sustentabilidad ambiental se refleja en la operación diaria.'],
      ['Transparencia', 'La comunicación de resultados debe ser transparente y verificable.'],
    ],
    no_verificado: ['Normas o certificaciones especificas de RSE: el video no nombra sellos.'],
  },
  {
    slug: 'sostenibilidad-ambiental',
    titulo: 'Sostenibilidad ambiental en el trabajo',
    area: 'Bienestar',
    vigente: true,
    mensaje:
      'Un trabajo más limpio no cuesta más: ordenar, apagar y separar reduce costos y residuos. Lo pequeño suma cuando es sostenido.',
    angle: 'habito',
    duracion: 45,
    fuente_principal: 'Ley N° 20.920 (residuos y economía circular); guias de sostenibilidad operativa',
    facts: [
      ['Residuos', 'Separar y reciclar evita que lo que se puede recuperar termine en vertederos.'],
      ['Reuso', 'Reparar y reutilizar extiende la vida útil de los equipos.'],
      ['Energía', 'Apagar equipos y luces evita el gasto de energía en horas sin actividad.'],
      ['Consumo', 'Imprimir y consumir menos papel y materiales reduce el impacto.'],
      ['Compromiso', 'Las acciones pequenas y sostenidas pesan más que las grandes campanas aisladas.'],
    ],
    no_verificado: ['Cifras de ahorro concreto: no se citan.'],
  },
];

/* ------------------------------------------------------------------ *
 * Generadores de documento
 * ------------------------------------------------------------------ */

function buildBrief(c) {
  const facts = c.facts.map(([k, v]) => `- **${k}** — ${v}`).join('\n');
  return `---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: ${c.slug}
titulo: "${c.titulo}"
area: ${c.area}
message: "${c.mensaje.replace(/"/g, "'")}"
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: ${c.duración}s
angle: ${c.angle}
narration: no
music: none
status: research
---

# ${c.titulo}

## Intent

Curso del catálogo \`cursos-mutualidad\`. Video de capacitación en español de Chile
sobre **${c.titulo}**, dirigido a personal de mutualidades y empresas.

Tono: claro, sobrio, sin alarmismo y sin cansar a quien ya sabe
la teoría. El objetivo es que la persona salga sabiendo **qué hacer**, no solamente
qué dice la norma.

Ángulo editorial: **${c.angle}**. Estructura de tres movimientos:
1. **Planteamiento** — por qué esto importa en el trabajo diario.
2. **Desarrollo** — el mecanismo o los pasos, en orden.
3. **Cierre** — la regla que la persona se lleva.

## Assets

Ninguno. Explicador faceless: sin captura, sin material del cliente, sin stock.
Todos los visuales se inventan en la composición.

## Hechos que el video puede afirmar

Estos datos están respaldados por la fuente oficial. Ver \`INVESTIGACION.md\`.

${facts}

## Hechos que el video NO puede afirmar

${c.no_verificado.map((x) => `- ${x}`).join('\n')}

## Notes

- **Fuente de verdad**: \`INVESTIGACION.md\` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (\`narration: no\`, \`music: none\`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este \`BRIEF.md\` a \`videos/${c.slug}/\` y generar
  el storyboard con el skill \`faceless-explainer\`.
`;
}

function buildResearch(c) {
  const facts = c.facts.map(([k, v]) => `### ${k}\n\n${v}\n`).join('\n');
  return `# Investigación — ${c.titulo}

> Documento de trabajo. Sirve como fuente de verdad del copy del video
> \`${c.slug}\`. Si algo no aparece acá, no se dice en pantalla.

## Fuente principal

${c.fuente_principal}

## Fecha de revisión

${new Date().toISOString().slice(0, 10)}

## Hechos verificados

${facts}
## Lo que NO se pudo verificar

Estas afirmaciones se evitaron a propósito. No volver a escribirlas sin una
fuente oficial citada:

${c.no_verificado.map((x) => `- ${x}`).join('\n')}

## Método

1. Se identifico la fuente oficial primaria (texto legal, protocolo o guía sectorial).
2. Se copiaron los articulos o recomendaciones aplicables al caso de una mutualidad.
3. Se descarto toda cifra que no apareciera en la fuente.
4. Se registro explicitamente lo no verificable, para que el copy no lo invente.

## Pendiente de confirmación por la organización

- Política interna aplicable (si existe) y diferencias con la norma general.
- Números de emergencia y contactos internos vigentes.
- Plazos o montos que la organización aplique por sobre la norma.
`;
}

function buildStoryboard(c) {
  const n = c.duracion;
  // Reparto proporcional de duracion entre 6 movimientos tipicos
  const moves = [
    ['Apertura', 0.1, 'Plantea el problema en una frase, sin rodeos.'],
    ['Gancho', 0.1, 'Un dato o contraste que fije la atención.'],
    ['Mecanismo', 0.3, 'El cuerpo del curso: el paso a paso o la regla.'],
    ['Ejemplo', 0.2, 'Un caso concreto que aterrizar el mecanismo.'],
    ['Cierre', 0.15, 'La regla que la persona se lleva.'],
    ['Fuente', 0.15, 'Fuente oficial y descargo, en placa quieta.'],
  ];
  let t = 0;
  const rows = moves.map(([name, frac, note]) => {
    const dur = Math.round(n * frac);
    const row = { name, note, start: t, dur };
    t += dur;
    return row;
  });
  const table = rows
    .map((r) => `| ${r.start}s | ${r.dur}s | ${r.name} | ${r.note} |`)
    .join('\n');
  return `# Storyboard — ${c.titulo}

> Borrador de estructura. La composición final se genera con el skill
> \`faceless-explainer\`; este archivo fija el ritmo y el reparto del tiempo.

- **Duración total**: ${n}s
- **Aspecto**: 1920x1080
- **Idioma**: es-CL
- **Narración**: no (video mudo, tipografía fuerte)
- **Ángulo**: ${c.angle}

## Estructura

| Desde | Duración | Movimiento | Nota |
|---|---|---|---|
${table}

## Composición por frame

${rows
  .map(
    (r, i) =>
      `### Frame ${String(i + 1).padStart(2, '0')} — ${r.name} (${r.dur}s)\n\n- Desde ${r.start}s hasta ${r.start + r.dur}s\n- ${r.note}\n- Copy: solo de la lista de hechos verificados de \`INVESTIGACION.md\`.`,
  )
  .join('\n\n')}

## Reglas de copy

- Toda afirmacion en pantalla es rastreable a \`INVESTIGACION.md\`.
- Si un dato no está verificado, no aparece.
- Ningún monto en UTM, ningun plazo sin confirmar, ningun nombre de norma sin citar.
`;
}

function buildIndex(c) {
  return JSON.stringify(
    {
      slug: c.slug,
      titulo: c.titulo,
      area: c.area,
      mensaje: c.mensaje,
      duracion: c.duracion,
      aspect: '1920x1080',
      language: 'es-CL',
      angle: c.angle,
      narration: false,
      status: 'research',
      fuente: c.fuente_principal,
      video: null,
    },
    null,
    2,
  ) + '\n';
}

/* ------------------------------------------------------------------ *
 * CLI
 * ------------------------------------------------------------------ */

function generate(slug) {
  const c = PLAN.find((x) => x.slug === slug);
  if (!c) {
    console.error(`Curso desconocido: ${slug}`);
    process.exit(1);
  }
  const dir = join(COURSES_DIR, slug);
  mkdirSync(dir, { recursive: true });

  const files = {
    'BRIEF.md': buildBrief(c),
    'INVESTIGACION.md': buildResearch(c),
    'STORYBOARD.md': buildStoryboard(c),
    'index.json': buildIndex(c),
  };

  for (const [name, content] of Object.entries(files)) {
    writeFileSync(join(dir, name), content, 'utf8');
  }
  return Object.keys(files);
}

if (process.argv[2] === '--plan') {
  console.log(JSON.stringify(PLAN.map(({ slug, titulo, area, duracion }) => ({ slug, titulo, area, duracion })), null, 2));
} else {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Uso: node scripts/gen-courses.mjs <slug> | --plan');
    process.exit(1);
  }
  const written = generate(slug);
  console.log(`${slug}: ${written.join(', ')}`);
}
