---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: prevención-riesgos
titulo: "Prevencion de riesgos: antes del incidente"
area: Seguridad
message: "La quase-accidente es la mejor noticia: informa de un riesgo real antes de que haga dano. Reportar no es hacer ruido, es prevenir."
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

# Prevencion de riesgos: antes del incidente

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Prevencion de riesgos: antes del incidente**, dirigido a personal de mutualidades y empresas.

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

- **Que es** — Un riesgo es la probabilidad de que ocurra un evento indeseado con dano.
- **Cuasi-accidente** — Un incidente sin lesión ni dano material también es información valuable de riesgo.
- **Identificación** — La identificacion de peligros es la primera fase y se hace por puesto de trabajo.
- **Medida** — La jerarquía de controles va de eliminación a EPP: primero se elimina, al final se protege.
- **Reporte** — Reportar incidentes y cuasi-accidentes alimenta la investigación y la planificación.
- **Comite** — Cuando corresponde, el comite paritario participa en la identificacion y en las medidas.

## Hechos que el video NO puede afirmar

- Porcentajes de reducción de accidentes: no se citan.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/prevencion-riesgos/` y generar
  el storyboard con el skill `faceless-explainer`.
