---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: seguridad-trabajo
titulo: "Seguridad en el trabajo: derechos y deberes"
area: Seguridad
message: "Tu seguridad no depende solo de ti: la ley obliga al empleador a dar EPP, condiciones seguras y a permitir el derecho de retirada ante riesgo grave."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 60s
angle: normativa
narration: no
music: none
status: research
---

# Seguridad en el trabajo: derechos y deberes

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Seguridad en el trabajo: derechos y deberes**, dirigido a personal de mutualidades y empresas.

Tono: claro, sobrio, sin alarmismo y sin cansar a quien ya sabe
la teoría. El objetivo es que la persona salga sabiendo **qué hacer**, no solamente
qué dice la norma.

Ángulo editorial: **normativa**. Estructura de tres movimientos:
1. **Planteamiento** — por qué esto importa en el trabajo diario.
2. **Desarrollo** — el mecanismo o los pasos, en orden.
3. **Cierre** — la regla que la persona se lleva.

## Assets

Ninguno. Explicador faceless: sin captura, sin material del cliente, sin stock.
Todos los visuales se inventan en la composición.

## Hechos que el video puede afirmar

Estos datos están respaldados por la fuente oficial. Ver `INVESTIGACION.md`.

- **EPP** — El empleador debe proveer, mantener y exigir el uso de elementos de proteccion personal adecuados al riesgo.
- **Condiciones** — Debe mantener condiciones ambientales seguras: iluminacion, ventilacion, temperatura, ruido y vibraciones dentro de los limites legales.
- **Retirada** — El trabajador puede retirarse ante riesgo grave e inminente, con restauracion de las condiciones de seguridad y sin perdida de jornada.
- **Deber del trabajador** — Usar los EPP, informar situaciones peligrosas y colaborar en la investigacion de incidentes.
- **Fiscalizacion** — La Direccion del Trabajo y las autoridades de higiene y seguridad pueden fiscalizar.
- **Cultura y respeto** — La decencia y el respeto se exigen en todos los niveles de la organizacion.

## Hechos que el video NO puede afirmar

- Montos especificos de multas: no se citan. El curso convence con obligaciones, no con cifras.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/seguridad-trabajo/` y generar
  el storyboard con el skill `faceless-explainer`.
