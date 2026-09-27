---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Con la Ley Karin una sola conducta ya basta, y el reloj no espera: estos son los plazos que no se pueden dejar pasar."
destination: youtube
aspect: 1920x1080
language: es-CL
audience: "Trabajadores y empleadores de mutualidades en Chile que deben prevenir, investigar y sancionar acoso"
length: 75s
angle: concept
narration: no
---

## Intent

Primer curso del catálogo `cursos-mutualidad`. Video de capacitación en español de
Chile sobre la **Ley Karin (Ley N° 21.643)**, orientado a personal de salud y
mutualidades. El objetivo no es repetir la ley: es que la persona se vaya sabiendo
**cuántos días tiene y qué pasa si se le pasa el plazo**.

Tono: firme, sobrio, institucional-cálido. Sin alarmismo y sin victimización. La
Ley Karin parte de un duelo real, así que el video no usa un hook de productivity
genérico: abre con el hecho duro de que **el acoso ya no necesita ser sistemático**
y de que la ley puso un reloj en manos de laualquier empresa.

El eje visual es un **reloj de plazos**: los días se cuentan hacia adelante y cada
hito se ancla a su artículo. La estructura de la información *es* la estructura del
video.

## Assets

Ninguno. Explicador faceless: no hay captura, no hay material del cliente, no hay
stock. Todos los visuales se inventan en la composición.

## Customizations

- **Cronómetro de plazos como hilo conductor**: 2 días hábiles → 3 días → 30 días →
  15 días, en orden cronológico real de la ley, no por importancia del artículo.
- Cada hito se etiqueta con su fundamento (`art. 211-C`, `art. 211-B bis`,
  `art. 211-E`) para que sirva de referencia, no solo de mensaje.
- Cierre con los **cuatro principios del art. 211-B** como ancla de memoria.

## Notes

- **Fuente de verdad**: texto oficial de la Ley N° 21.643, Diario Oficial del
  15 de enero de 2024, y[`nuevo.leychile.cl/navegar?idNorma=1200096`](https://nuevo.leychile.cl/navegar?idNorma=1200096).
  Vigencia desde el **1 de agosto de 2024**.
- **Datos verificados que el video afirma** (todo lo que aparece en pantalla está
  respaldado por el texto oficial):
  - El acoso laboral **puede manifestarse una sola vez** o de manera sistemática
    (definición en el Código del Trabajo tras la Ley 21.643). Esto es el gancho.
  - **art. 211-C**: el empleador dispone investigación interna **o**, en el plazo
    de **tres días**, remite los antecedentes a la Inspección del Trabajo. En
    cualquier caso la investigación **concluye en treinta días**.
  - **art. 211-B bis**: si la denuncia se hace ante la Inspección, ésta pide al
    empleador medidas de resguardo en **plazo máximo de dos días hábiles**, que
    deben adoptarse **de inmediato** al notificarse. Incluye atención psicológica
    temprana vía programas de la **Ley N° 16.744**.
  - **art. 211-E**: el empleador debe **disponer y aplicar** las medidas o
    sanciones dentro de los **quince días** siguientes a la recepción.
  - **art. 211-B**: confidencialidad, imparcialidad, celeridad y perspectiva de
    género.
- **Prohibido inventar cifras**: no se menciona ningún monto en UTM de multa,
  porque no se pudo confirmar la cifra en fuente oficial. El video convence con
  plazos y obligaciones, que sí están verificados.
- **Repo público**: el video declara material informativo y no asesoría legal.
  Se incluye la referencia a la fuente en pantalla final.
- **Sin narración por decisión autónoma**: no hay TTS ni música (`music: none`,
  sin `SCRIPT.md`). Se elige video mudo con tipografía fuerte para evitar
  dependencia de credenciales de terceros y mantener el render determinista y
  reproducible. Es también el formato más reutilizable para intranet: se puede
  subtitular en la plataforma destino.
- El curso **no es asesoría legal** y no reemplaza la lectura de la ley.
