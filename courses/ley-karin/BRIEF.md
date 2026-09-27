---
workflow: faceless-explainer
flow: automation
storyboard: no
slug: ley-karin
titulo: "Ley Karin: una sola conducta basta"
area: Legal / Acoso
message: "Desde el 1 de agosto de 2024 la ley obliga a investigar TODA denuncia de acoso sexual: una sola conducta basta para activar el protocolo."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores de mutualidades y empresas en Chile"
length: 75s
angle: plazos
narration: no
music: none
status: research
---

# Ley Karin: una sola conducta basta

## Intent

Curso del catálogo `cursos-mutualidad`. Video de capacitación en español de Chile
sobre **Ley Karin: una sola conducta basta**, dirigido a personal de mutualidades y empresas.

Tono: claro, sobrio, sin alarmismo y sin cansar a quien ya sabe
la teoría. El objetivo es que la persona salga sabiendo **qué hacer**, no solamente
qué dice la norma.

Ángulo editorial: **plazos**. Estructura de tres movimientos:
1. **Planteamiento** — por qué esto importa en el trabajo diario.
2. **Desarrollo** — el mecanismo o los pasos, en orden.
3. **Cierre** — la regla que la persona se lleva.

## Assets

Ninguno. Explicador faceless: sin captura, sin material del cliente, sin stock.
Todos los visuales se inventan en la composición.

## Hechos que el video puede afirmar

Estos datos están respaldados por la fuente oficial. Ver `INVESTIGACION.md`.

- **Ambito** — La Ley Karin (Ley N° 21.643) modifica el Codigo del Trabajo; entro en vigencia el 1 de agosto de 2024.
- **Activacion** — Una denuncia puede investigarse aunque la conducta ocurra una sola vez: no se exige sistematicidad.
- **Plazo 1** — Art. 211-C: la empresa tiene 3 dias habiles para iniciar la investigacion interna o remitir el caso a la Inspeccion del Trabajo.
- **Plazo 2** — Art. 211-C: la investigacion debe concluir dentro de 30 dias habiles administrativos contados desde la notificacion.
- **Resguardo** — Art. 211-B bis: medidas de resguardo se adoptan de inmediato, con aviso al organo competente dentro de 2 dias habiles.
- **Medidas** — Art. 211-E: la empresa tiene 15 dias habiles para aplicar medidas o sanciones una vez concluida la investigacion.
- **Principios** — Art. 211-B: confidencialidad, imparcialidad, celeridad y perspectiva de genero.

## Hechos que el video NO puede afirmar

- Multas en UTM por tipo de infraccion: no se encontro tabla oficial vigente; el video NO debe citar montos.
- Cantidad minima de conductas para configurar acoso sexual: el texto no fija un numero.

## Notes

- **Fuente de verdad**: `INVESTIGACION.md` en esta misma carpeta.
- **Regla dura**: el copy en pantalla se deriva solo de "Hechos que el video puede
  afirmar". Nada de cifras, plazos o nombres de norma que no esten en esa lista.
- **Repo público**: el video es material informativo y no asesoría legal. La
  escena final cita la fuente.
- **Sin narración ni música** (`narration: no`, `music: none`): evita
  dependencias de credenciales de terceros y mantiene el render determinista. El
  video se subtitula en la plataforma destino.
- **Antes de renderizar**: copiar este `BRIEF.md` a `videos/ley-karin/` y generar
  el storyboard con el skill `faceless-explainer`.
