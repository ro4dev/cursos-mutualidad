---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: pausas-activas
titulo: "Pausas activas: por que el cuerpo necesita moverse"
area: Bienestar
message: "Concentrar la atención 8 horas seguidas degrada la postura, la visión y la concentración: la pausa activa no es un recreo, es parte del trabajo."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 45s
angle: habito
narration: no
music: none
status: research
---

# Pausas activas: por que el cuerpo necesita moverse

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Pausas activas: por que el cuerpo necesita moverse**, dirigido a personal de mutualidades y empresas.

Tono: claro, sobrio, sin alarmismo y sin cansar a quien ya sabe
la teoría. El objetivo es que la persona salga sabiendo **qué hacer**, no solamente
qué dice la norma.

Ángulo editorial: **habito**. Estructura de tres movimientos:
1. **Planteamiento** — por qué esto importa en el trabajo diario.
2. **Desarrollo** — el mecanismo o los pasos, en orden.
3. **Cierre** — la regla que la persona se lleva.

## Assets

Ninguno. Explicador faceless: sin captura, sin material del cliente, sin stock.
Todos los visuales se inventan en la composición.

## Hechos que el video puede afirmar

Estos datos están respaldados por la fuente oficial. Ver `INVESTIGACION.md`.

- **Postura** — La posición estatica prolongada carga la columna cervical y lumbar; alternar posturas reduce la carga.
- **Vision** — La visión cercana prolongada causa fatiga visual; la regla 20-20-20 ayuda a descansarla.
- **Concentracion** — Descansos cortos y frecuentes rinden más que un descanso largo y único.
- **Hidratación** — Beber agua con regularidad sostiene la atención y evita la cefalea por deshidratación.
- **Microdescansos** — 2 a 5 minutos de movimiento bastan para restaurar la circulación y la postura.

## Hechos que el video NO puede afirmar

- Cifras exactas de reducción de sintomatología: variable por estudio; el video no cita porcentajes.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/pausas-activas/` y generar
  el storyboard con el skill `faceless-explainer`.
