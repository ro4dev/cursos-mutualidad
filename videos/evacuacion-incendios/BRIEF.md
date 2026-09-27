---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: evacuacion-incendios
titulo: "Incendios y evacuacion"
area: Seguridad
message: "En un incendio decides en 30 segundos: la evacuacion no se improvisa, se entrena. Salida, punto de encuentro, y el numero al que llamar."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 45s
angle: proceso
narration: no
music: none
status: research
---

# Incendios y evacuacion

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Incendios y evacuacion**, dirigido a personal de mutualidades y empresas.

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

- **Alarma** — Ante la alarma de incendio la evacuacion es inmediata y ordenada.
- **Ruta** — Se usa la salida mas cercana y segura, nunca el ascensor.
- **Punto de encuentro** — Todos se reunen en el punto de encuentro definido para confirmar quienes salieron.
- **Cuenta** — La cuenta de personas permite detectar faltantes y dar aviso.
- **Equipo** — Extintor solo si hay salida libre y la llama es pequena: el escape es prioridad.
- **Prevencion** — No bloquear pasillos ni salidas; revisar cableado y equipos de calefaccion.

## Hechos que el video NO puede afirmar

- Numero unico de emergencias y plazos exactos de evacuacion: verificar con la unidad de Prevention local.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/evacuacion-incendios/` y generar
  el storyboard con el skill `faceless-explainer`.
