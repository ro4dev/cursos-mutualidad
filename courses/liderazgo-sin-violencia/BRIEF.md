---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: liderazgo-sin-violencia
titulo: "Liderazgo sin violencia"
area: Liderazgo
message: "El liderazgo no se impone con miedo: se sostiene en respeto, límites claros y coherencia entre lo que se dice y lo que se hace."
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

# Liderazgo sin violencia

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Liderazgo sin violencia**, dirigido a personal de mutualidades y empresas.

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

- **Modelo** — El liderazgo se apoya en el ejemplo, la consistencia y el respeto.
- **Limites** — Los límites claros son la principal protección frente al exceso de autoridad.
- **Cuestionamiento** — El equipo debe poder cuestionar una decisión de su jefe.
- **Apoyo** — El lider da recursos, formación y defensa al equipo.
- **Ejemplo** — El ejemplo del jefe fija la norma real del equipo.
- **Responsabilidad** — La responsabilidad final ante el equipo es de quien dirige.

## Hechos que el video NO puede afirmar

- Normativa legal especifica del cargo: se trata como práctica, no como obligación legal.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/liderazgo-sin-violencia/` y generar
  el storyboard con el skill `faceless-explainer`.
