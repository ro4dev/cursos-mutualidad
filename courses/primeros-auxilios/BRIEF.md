---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: primeros-auxilios
titulo: "Primeros auxilios: los 5 primeros minutos"
area: Seguridad
message: "En los primeros minutos decides el resultado: avisar, proteger, atender. La cadena de supervivencia empieza antes que la ambulancia."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 60s
angle: proceso
narration: no
music: none
status: research
---

# Primeros auxilios: los 5 primeros minutos

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Primeros auxilios: los 5 primeros minutos**, dirigido a personal de mutualidades y empresas.

Tono: claro, sobrio, sin alarmismo y sin cansar a quien ya sabe
la teoría. El objetivo es que la persona salga sabiendo **qué hacer**, no solamente
qué dice la norma.

Ángulo editorial: **proceso**. Estructura de tres movimientos:
1. **Planteamiento** — por qué esto importa en el trabajo diario.
2. **Desarrollo** — el mecanismo o los pasos, en orden.
3. **Cierre** — la regla que la persona se lleva.

## Assets

Ninguno. Explicador faceless: sin captura, sin material del cliente, sin stock.
Todos los visuales se inventan en la composición.

## Hechos que el video puede afirmar

Estos datos están respaldados por la fuente oficial. Ver `INVESTIGACION.md`.

- **Seguridad** — Antes de atender, revisar que la escena sea segura para no sumarse al accidente.
- **Aviso** — Pedir ayuda y llamar a la emergencia; comunicar ubicación exacta.
- **Respiración** — Verificar la respiracion antes de iniciar compresiones.
- **Compresiones** — Compresiones en el centro del pecho, firmes y ritmadas, si no hay respiracion normal.
- **No hacer dano** — No mover a la persona si hay riesgo de lesión de columna; no dar de comer ni de beber.
- **Traslado** — Aislar y esperar al equipo de salud sin abandonar a la persona.

## Hechos que el video NO puede afirmar

- Ritmo exacto de compresiones y relaciones compresion/ventilacion en versiones adultas: verificar con la autoridad sanitaria local antes de afirmar cifras exactas en pantalla.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/primeros-auxilios/` y generar
  el storyboard con el skill `faceless-explainer`.
