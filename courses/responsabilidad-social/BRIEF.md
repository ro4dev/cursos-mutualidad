---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: responsabilidad-social
titulo: "Responsabilidad social empresarial"
area: Cultura
message: "La responsabilidad social no es un eslogan: es el compromiso concreto con los trabajadores, la comunidad y el entorno, y se puede medir."
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

# Responsabilidad social empresarial

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Responsabilidad social empresarial**, dirigido a personal de mutualidades y empresas.

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

- **Definicion** — RSE es el compromiso de la empresa con su entorno, asumido y verificable.
- **Trabajadores** — El compromiso empieza por las condiciones de trabajo de la propia empresa.
- **Comunidad** — La contribucion a la comunidad se mide por su continuidad, no por el slogan.
- **Ambiente** — La sustentabilidad ambiental se refleja en la operacion diaria.
- **Transparencia** — La comunicacion de resultados debe ser transparente y verificable.

## Hechos que el video NO puede afirmar

- Normas o certificaciones especificas de RSE: el video no nombra sellos.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/responsabilidad-social/` y generar
  el storyboard con el skill `faceless-explainer`.
