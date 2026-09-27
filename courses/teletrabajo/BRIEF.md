---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: teletrabajo
titulo: "Teletrabajo: derechos y limites"
area: Derecho Laboral
message: "Teletrabajo no es trabajar donde quieras, cuando quieras: hay condiciones de salud, seguridad, equipos y desconexion que la ley fija."
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

# Teletrabajo: derechos y limites

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Teletrabajo: derechos y limites**, dirigido a personal de mutualidades y empresas.

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

- **Definicion** — El teletrabajo es una modalidad en que la prestacion se realiza a distancia mediante medios digitales.
- **Voluntariedad** — La modalidad debe ser acordada y predeterminada entre las partes; no puede imponerse unilateralmente.
- **Herramientas** — El empleador debe proveer los elementos y herramientas necesarios para la ejecucion del trabajo y para garantizar la seguridad.
- **Condiciones de salud** — Debe garantizarse un espacio de trabajo con condiciones de salud y seguridad adecuadas.
- **Derecho a la desconexion** — La jornada se rige por la duracion maxima legal y existe derecho a la desconexion fuera de la jornada.
- **Capacitacion** — La implementacion debe incluir formacion para ambas partes.

## Hechos que el video NO puede afirmar

- Multas asociadas al incumplimiento delacctele trabajo: no se citan montos.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/teletrabajo/` y generar
  el storyboard con el skill `faceless-explainer`.
