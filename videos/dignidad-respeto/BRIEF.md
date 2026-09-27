---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: dignidad-respeto
titulo: "Dignidad y respeto en el trabajo"
area: Cultura
message: "El respeto no es un extra: es la base del clima laboral. Comentarios, apodos y bromas que incomodan degradan a todos."
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

# Dignidad y respeto en el trabajo

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Dignidad y respeto en el trabajo**, dirigido a personal de mutualidades y empresas.

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

- **Base** — La dignidad de la persona es un principio que ordena toda relacion laboral.
- **Conductas** — Insultos, burlas y otras conductas hostiles vulneran el respeto basico.
- **Testigos** — La conducta abusiva frente a terceros tambien vulnera el respeto.
- **Denuncia** — Las conductas de hostigamiento o trato irrespetuoso se pueden denunciar y se investigan.
- **Reparacion** — La investigacion termina en medidas o sanciones cuando corresponde.
- **Ambiente** — Un ambiente respetuoso es la base de la colaboracion y la productividad.

## Hechos que el video NO puede afirmar

- Diferencias entre comentario hostil y acoso: se explica en lenguaje llano, no juridico.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/dignidad-respeto/` y generar
  el storyboard con el skill `faceless-explainer`.
