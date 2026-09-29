---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: igualdad-no-discriminación
titulo: "Igualdad y no discriminación"
area: Legal / Derechos
message: "Ninguna diferencia por edad, sexo, orientación, etnia o discapacidad da derecho a un trato distinto en el acceso al empleo o en su desarrollo."
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

# Igualdad y no discriminación

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Igualdad y no discriminación**, dirigido a personal de mutualidades y empresas.

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

- **Principio** — La igualdad es un principio activo, no solo la ausencia de discriminación.
- **Atributos** — El ámbito de protección incluye sexo, edad, orientación sexual, identidad de género, etnia, religion y situación de discapacidad.
- **Discriminacion directa** — Tratar distinto por un atributo protegido sin justificación valida.
- **Discriminacion indirecta** — Una regla aparentemente neutra que produce un efecto desigual.
- **Hostigamiento** — El hostigamiento laboral y la discriminación estan prohibidos explicitamente.
- **Acción afirmativa** — Medidas para alcanzar la igualdad real se consideran legitimas.

## Hechos que el video NO puede afirmar

- Multas concretas: no se citan.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/igualdad-no-discriminacion/` y generar
  el storyboard con el skill `faceless-explainer`.
