---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: salud-mental
titulo: "Salud mental en el trabajo"
area: Bienestar
message: "La salud mental también es un riesgo laboral: se protege con límites claros, escucha y una cultura donde pedir ayuda no es un problema."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 60s
angle: habito
narration: no
music: none
status: research
---

# Salud mental en el trabajo

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Salud mental en el trabajo**, dirigido a personal de mutualidades y empresas.

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

- **Derecho** — La protección de la salud mental en el trabajo es un derecho, no una concesión.
- **Riesgos** — Carga excessiva, falta de control sobre el trabajo y trato hostil pueden afectar el bienestar.
- **Factores** — Descanso, apoyo social y claridad de roles son factores protectores.
- **Prevención** — Medidas organizacionales: distribución de carga, horarios, pausas y apoyo.
- **Consulta** — Existe derecho a solicitar evaluación y orientación en salud mental.
- **Red** — Contar con canales de apoyo internos y externos es parte de la prevencion.

## Hechos que el video NO puede afirmar

- Cifras de prevalencia de problemas de salud mental: no se citan.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/salud-mental/` y generar
  el storyboard con el skill `faceless-explainer`.
