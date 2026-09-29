---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: ergonomía-oficina
titulo: "Ergonomia en la oficina"
area: Bienestar
message: "La silla, el monitor y la altura de la mesa deciden cuanto tensiona tu cuerpo: tres ajustes de 5 minutos evitan la mayoría de las molestias."
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

# Ergonomia en la oficina

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Ergonomia en la oficina**, dirigido a personal de mutualidades y empresas.

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

- **Monitor** — A distancia de un brazo y con la parte superior de la pantalla a la altura de los ojos.
- **Silla** — Altura de asiento que permita pies bien apoyados y rodillas a 90 grados.
- **Apoyos** — Antebrazos apoyados, codos a 90 grados, pies no colgando.
- **Teclado** — Pegado a la mesa para evitar alcances que cargan el hombro.
- **Alternancia** — Cambiar de postura cada 20-30 minutos mantiene el cuerpo alerta.

## Hechos que el video NO puede afirmar

- Porcentajes de incidencia de dolencias: no se citan.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/ergonomia-oficina/` y generar
  el storyboard con el skill `faceless-explainer`.
