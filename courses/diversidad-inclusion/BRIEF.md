---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: diversidad-inclusión
titulo: "Diversidad e inclusión"
area: Legal / Derechos
message: "Un equipo diverso no es un adorno: la variedad de experiencias mejora las decisiones. Inclusion significa que esa variedad pueda opinar."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 45s
angle: normativa
narration: no
music: none
status: research
---

# Diversidad e inclusión

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Diversidad e inclusión**, dirigido a personal de mutualidades y empresas.

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

- **Diversidad** — La variedad de origen, edad, género, orientación, capacidades o experiencias.
- **Inclusion** — Garantizar que todas esas voces puedan participar y ser escuchadas.
- **Sesgos** — Los sesgos inconscientes influyen en decisiones de contratación y evaluación.
- **Accesibilidad** — Las medidas de accesibilidad permiten la participación plena.
- **Valor** — La diversidad de perspectivas mejora la calidad de las decisiones del grupo.

## Hechos que el video NO puede afirmar

- Cifras de impacto en productividad: no se citan.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/diversidad-inclusion/` y generar
  el storyboard con el skill `faceless-explainer`.
