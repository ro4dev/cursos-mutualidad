---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: código-conducta
titulo: "Codigo de conducta y ética"
area: Cultura
message: "Un código de conducta escrito no protege a nadie si no se conoce: la ética se juega en decisiones pequenas y cotidianas."
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

# Codigo de conducta y ética

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Codigo de conducta y ética**, dirigido a personal de mutualidades y empresas.

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

- **Objetivo** — El código fija expectativas de conducta aceptables y no aceptables.
- **Conflictos** — Se declara todo conflicto de interés real o potencial.
- **Información** — La informacion de la organización y de terceros se maneja con confidencialidad.
- **Regalos** — Regalos y atenciones que puedan intentar influenciar decisiones se rechazan o se declaran.
- **Denuncia** — Existe una vía para denunciar prácticas indebidas, con protección del denunciante.
- **Consecuencias** — El incumplimiento tiene consecuencias según la gravedad.

## Hechos que el video NO puede afirmar

- Normativa interna concreta de la organización: el video habla en general.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/codigo-conducta/` y generar
  el storyboard con el skill `faceless-explainer`.
