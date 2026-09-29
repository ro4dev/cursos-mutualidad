---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: nuevo-trabajador
titulo: "Inducción al nuevo trabajador"
area: Onboarding
message: "La primera semana define la cultura que se vive: reglas claras, accesos listos y un acompañamiento real, no un manual."
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

# Inducción al nuevo trabajador

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Inducción al nuevo trabajador**, dirigido a personal de mutualidades y empresas.

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

- **Objetivo** — La induccion integra al nuevo colaborador: le muestra como se trabaja aquí.
- **Información clave** — Políticas de seguridad, conducta y horario se explican el primer día.
- **Accesos** — Cuentas, permisos y equipos listos desde el primer día.
- **Acompanamiento** — Una persona de referencia acompaña la adaptación durante las primeras semanas.
- **Capacitación** — La formación obligatoria (seguridad, salud) se realiza en los plazos legales.
- **Evaluación** — Se hace seguimiento de la adaptación y se recoge la retroalimentación.

## Hechos que el video NO puede afirmar

- Plazos legales de capacitacion: el video no los enuncia sin verificarlos.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/nuevo-trabajador/` y generar
  el storyboard con el skill `faceless-explainer`.
