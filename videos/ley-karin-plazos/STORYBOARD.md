---
format: 1920x1080
duration: 75s
message: "Con la Ley Karin una sola conducta ya basta, y el reloj no espera: estos son los plazos que no se pueden dejar pasar."
arc: concept-explainer with process
audience: "Personal de salud y mutualidades en Chile"
mode: autonomous
music: none
---

# STORYBOARD — Ley Karin: el reloj de los plazos

## Video direction

Invariantes del video. Los frames solo llevan el delta.

**Sistema de diseño:** `frame.md` = preset `editorial-forest`. Fondo cream
`#efe7d4`, tinta `#1a1a17`, verde `#2e4a2a` para estructura y texto de servicio,
rosa `#e89cb1` como único acento. Display serif (Source Serif 4) para los
**numerales de plazo** y titulares; mono en mayúsculas (JetBrains Mono) para toda
cita de artículo y etiqueta técnica; serif para cuerpo. Ninguna fuente fuera del
preset. El rosa es escaso a propósito: si aparece en las cuatro estaciones, la
señal se pierde.

**Escenario persistente (frames 2–6):** un eje temporal horizontal —una línea fina
en el tercio inferior— con cuatro estaciones marcadas. Mismas coordenadas relativas,
misma tipografía de etiqueta, en los cuatro frames. El eje **avanza hacia la
derecha** y nunca retrocede: quien compare dos frames consecutivos notará que el
tiempo corre incluso mientras cambia el rótulo. La cámara es **una sola**: un
`.world` en modo PAN, sin zoom, sin parallax, sin 3D. Único 3D del video: el
book-open de frame 7.

**Gramática de movimiento:** revelados escalonados repartidos a lo largo de toda la
duración de cada frame, **nunca volcados en t=0**. En un video mudo, el guion de
revelado sigue el **compás**, no la voz: cada pieza entra en su propia ventana y
el último tercio de cada frame es lectura sostenida. Curvas de cola larga
(`power3` por defecto, suave sobre elástico). Durante una lectura sostenida, como
máximo un temblor sutil; nunca respiración laciosa, nunca deriva de cámara en la
segunda mitad.

**Ritmo y frames sostenidos:** el cuerpo (3–6) son 40 de los 75 segundos. Se
reservan lecturas sostenidas deliberadas en **frame 1** (el "1" solo), **frame 5**
(el 30 y la semana de 5 días) y **frame 8** (los cuatro principios, sin efecto
adicional) — un respiro antes del cierre. La energía del video no es uniforme y no
debe serlo: sube en el hook, se aplana en el eje, y se calma al aterrizar.

**Cambio de forma deliberado:** los frames 3–6 comparten escenario **pero no
plantilla** — la composición interna varía en cada parada (numeral + tarjeta a la
derecha; bifurcación arriba/abajo; tira de semana; cadena causal de tres pasos).
El eje da unidad; la variedad interna evita que cuatro frames se lean como la misma
tarjeta con otro número.

**Lista negativa:** nada de texturas fuera de marca; nada de bokeh flotante; nada de
gradiente morado-azul "IA"; nada de sombras (el preset es plano); nada de barras de
navegación, pies de página, cursores ni chrome de navegador; nada de formas
decorativas genéricas en lugar de una metáfora diseñada. Dos modos de fallo
prohibidos: **slideshow** (volcar todo al principio y congelar) y **screensaver**
(cada elemento flotando por su cuenta). Nada de texto en el 17% inferior: la banda
de subtítulos se respeta aunque el video sea mudo, para que el mismo frame sirva
subtitulado en la intranet.

---

**Estructura:** `concept-explainer with process`. El protagonista es una idea —el
reloj que la ley puso en manos del empleador— y su mecanismo se revela en cuatro
paradas ordenadas sobre un mismo escenario.

**Mesa de continuidad:** frames 2–6 son un travelling continuo, no cuatro entregas.
Costura `push-slide RIGHT` repetida en los cuatro, porque el tiempo sigue hacia
adelante. El resto del video usa `cut` para los cambios de tema y `crossfade` para
los repasos atmosféricos.

## Frame 1 — Una vez basta

- scene: "SISTEMÁTICO" es reemplazado en el lugar por "UNA VEZ" y el "1" queda solo, enorme
- voiceover: ""
- duration: 6s
- poster: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-una-vez-basta.html
- type: hook
- persuasion: Common-belief vs reality
- beat: surprise + concern
- blueprint: kinetic-type-beats (Adapt)
- focal: la palabra "UNA VEZ" y el numeral "1"
- roles: "1" = foreground subject · campo cream = background · rótulo mono de la ley + filete = supporting

narrativeRole: Invierte la creencia con la que el público llega —"el acoso requiere
un patrón sostenido"— y planta el gancho: **la sistematicidad ya no es requisito**.
Es la razón por la que la ley existe y la razón por la que el resto del video
importa.
keyMessage: Desde el 1 de agosto de 2024 el acoso laboral puede constituirse con una
sola conducta.

Adapt: se conserva el intercambio de token en el sitio y el payoff con resorte; se
cambia la superficie por un campo tipográfico plano. El intercambio **no** se
suaviza a un crossfade — es un corte seco en la misma posición.

Scene 1 (0.0–1.4s): solo el rótulo mono `LEY N° 21.643 · VIGENTE DESDE 01.08.2024`
y la palabra "SISTEMÁTICO", centrados y casi a sangre, con la serifa de display en
tamaño de titular. Nada más sobre el cream. Entrada con layer-reveal y rise-and-fade.
Scene 2 (1.4–3.2s): lectura sostenida. Un filete fino se dibuja bajo "SISTEMÁTICO"
(svg-path-draw), marcándolo como la regla anterior. Es el único movimiento.
Scene 3 (3.2–4.4s): el intercambio en el sitio — "SISTEMÁTICO" es reemplazado por
"UNA VEZ" en la misma posición y tamaño óptico, por corte seco. El filete queda
debajo, ya sin sentido bajo la palabra nueva: ese desajuste es intencional.
Scene 4 (4.4–6.0s): el payoff con resorte — el numeral "1" entra grande desde un
escala menor y asienta con un único rebote amortiguado. Todo queda quieto hasta el
corte: sin deriva, sin respiración.

## Frame 2 — La ley puso un reloj

- scene: El eje temporal entra vacío y las cuatro estaciones de plazo caen sobre él
- voiceover: ""
- duration: 8s
- poster: 6s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-el-reloj.html
- type: product_intro
- persuasion: Concretization (abstracto → objeto tangible: un reloj)
- beat: clarity + orientation
- blueprint: spatial-pan-stations (Adapt — variante Hook, pan a la derecha)
- focal: el eje con sus cuatro estaciones etiquetadas
- roles: eje + estaciones = foreground subject · rejilla tenue = background · etiquetas mono de artículo = supporting

narrativeRole: Nombra el concepto y **establece el escenario que los cuatro frames
siguientes recorren**. Convierte "hay plazos legales" en un objeto que el espectador
puede ver avanzar.
keyMessage: La ley no cambió solo la definición: puso un reloj, con cuatro paradas
obligatorias.

Adapt: se conserva la firma del blueprint — un lienzo sobredimensionado, una sola
cámara virtual en PAN, paradas que centran cada estación y la estación terminal en
pantalla al final. Se invierte el sentido del paneo para que el tiempo avance a la
derecha, y el pop del callout se sustituye por la aparición por corte de la
etiqueta, porque aquí las estaciones aún no son el objeto protagonista.

Scene 1 (0.0–1.6s): la cámara abre sobre el eje vacío. La línea del eje se dibuja de
izquierda a derecha (svg-path-draw), en el tercio inferior. Franja a todo el ancho,
3 capas de profundidad: cream de fondo, eje con rejilla tenue, estaciones al frente.
Scene 2 (1.6–2.6s): PAN a la primera parada. El rótulo `2` entra por corte y su
etiqueta mono `art. 211-B bis` sube y se desvanece debajo.
Scene 3 (2.6–3.6s): PAN a la segunda. `3` + `art. 211-C`, misma cadencia.
Scene 4 (3.6–4.6s): PAN a la tercera. `30` + `art. 211-C`.
Scene 5 (4.6–5.6s): PAN a la cuarta; la cámara se estabiliza. `15` + `art. 211-E`.
Scene 6 (5.6–8.0s): sobre el eje ya quieto, un único titular entra arriba por
slide-up y queda leído: "LA LEY PUSO UN RELOJ". Cámara estática hasta el corte.

## Frame 3 — Parada 1 · Medidas de resguardo

- scene: La cámara se detiene en la primera estación: el "2" cuenta y la tarjeta del plazo entra a su derecha
- voiceover: ""
- duration: 10s
- poster: 8s
- transition_in: push-slide RIGHT
- status: animated
- src: compositions/frames/03-plazo-2-dias.html
- type: feature_showcase
- persuasion: Worked example with real numbers + Citation
- beat: comprehension + concern
- blueprint: spatial-pan-stations (Adapt)
- focal: el numeral "2" y la tarjeta de medidas de resguardo
- roles: numeral = foreground subject · tarjeta = foreground subject (60/40) · las otras tres estaciones atenuadas y las estaciones ya recorridas = supporting

narrativeRole: Primer tramo del mecanismo y el más urgente: es el plazo que vence
**antes de que exista investigación alguna**. Marca el estándar de lo que viene —
las paradas siguientes son más largas, pero esta corre primero.
keyMessage: Denunciado ante la Inspección, el empleador tiene **2 días hábiles**
para que se adopten medidas de resguardo, y se adoptan de inmediato al notificarse.

Adapt: firma del blueprint mantenida (cámara en PAN, parada centrada). El pop del
callout se convierte en el **contador** del componente `count-up` instalado en el
proyecto (`compositions/components/count-up.html`), montado con variables
explícitas: start 0, end 2, sufijo "DÍAS HÁBILES". Los tokens del preset se pasan
por variable CSS para que el contador sea token-native.

Scene 1 (0.0–1.5s): la cámara arriba a la primera parada. Las otras tres estaciones
bajan a un plano de apoyo atenuado. `count-up` monta y arranca la cuenta 0→2.
Scene 2 (1.5–3.0s): la cuenta aterriza con un único pulso de escala contenido; el
sufijo "DÍAS HÁBILES" en mono se resuelve al lado.
Scene 3 (3.0–5.5s): la tarjeta entra con spring-pop-entrance, con origen en la
punta de su triángulo de unión, leyendo "MEDIDAS DE RESGUARDO". Composición
asimétrica 60/40, con el eje atravesando la base.
Scene 4 (5.5–7.5s): segunda línea de la tarjeta, revelada por capa: "y se adoptan
de inmediato al notificarse".
Scene 5 (7.5–10.0s): lectura sostenida, quieta. Un único filete rosa marca esta
estación como la primera que se agota — el único uso del acento en el cuerpo.

## Frame 4 — Parada 2 · Decide en 3 días

- scene: El travelling avanza: el "3" y la bifurcación entre investigación interna y remisión a la Inspección
- voiceover: ""
- duration: 9s
- poster: 7s
- transition_in: push-slide RIGHT
- status: animated
- src: compositions/frames/04-plazo-3-dias.html
- type: feature_showcase
- persuasion: Numbered enumeration
- beat: comprehension + foresight
- blueprint: spatial-pan-stations (Adapt)
- focal: el numeral "3" y la bifurcación de dos rutas
- roles: numeral = foreground subject · las dos ramas que se dibujan = foreground subject · estaciones vecinas = supporting

narrativeRole: Introduce la primera decisión real del proceso y, con ella, la idea
de que el plazo corre **igual elijas la vía**. La opción no es una salida: ambas
vencen el mismo día.
keyMessage: El empleador dispone investigación interna **o**, en **3 días**, remite
los antecedentes a la Inspección del Trabajo.

Adapt: el PAN mantiene la firma. La diferencia interna frente a la parada anterior
es que el eje deja de ser decorado y se bifurca: dos ramas dibujadas salen del
mismo punto. La geometría del frame cambia aunque el escenario no.

Scene 1 (0.0–1.5s): PAN a la segunda parada; `count-up` cuenta 0→3 y aterriza.
Scene 2 (1.5–3.2s): dos ramas se dibujan desde el punto de la estación
(svg-path-draw), una hacia arriba, otra hacia abajo. El trazo se dibuja, no
aparece.
Scene 3 (3.2–5.5s): las dos etiquetas de ruta se resuelven en cascada
(discrete-text-sequence): "INVESTIGACIÓN INTERNA" y "A LA INSPECCIÓN DEL TRABAJO".
Scene 4 (5.5–6.8s): una línea en mono revela que el plazo no depende de la ruta:
"el plazo corre igual en las dos".
Scene 5 (6.8–9.0s): lectura sostenida, quieta. La etiqueta mono `art. 211-C` queda
firme bajo la estación.

## Frame 5 — Parada 3 · Concluir en 30 días

- scene: La tercera estación, la más ancha: el "30" domina y bajo él la regla de los días hábiles
- voiceover: ""
- duration: 11s
- poster: 9s
- transition_in: push-slide RIGHT
- status: animated
- src: compositions/frames/05-plazo-30-dias.html
- type: feature_showcase
- persuasion: Rule of three + Concretization
- beat: comprehension + unease
- blueprint: spatial-pan-stations (Adapt)
- focal: el numeral "30" y la tira de semana que lo define
- roles: numeral = foreground subject · tira de cinco cajas = supporting (es la que hace la abstracción concreta) · tarjeta = supporting

narrativeRole: El plazo que gobierna todo el proceso, y añade la trampa operativa
que el público no espera: **es en días hábiles administrativos** y se cuenta desde
la notificación, no desde la denuncia.
keyMessage: La investigación debe **concluir en 30 días hábiles administrativos**,
contados desde la notificación.

> Nota de verificación: la versión anterior de este bloque pedía "el reloj no se
> detiene por feriado legal ni por licencia". Esa regla **no está en
> `INVESTIGACION.md`** (art. 211-C no la enuncia) y se eliminó del guion antes de
> componer. La línea de pantalla que quedó en su lugar —"y el plazo corre desde la
> notificación"— sí está verificada: art. 211-C, "contados desde la notificacion".

Adapt: la parada más ancha del eje — el espaciado entre estaciones no cambia, pero
esta estación recibe un bloque de detalle más profundo, porque es la que más
confusión genera. Firma del PAN intacta.

Scene 1 (0.0–1.6s): PAN a la tercera parada; `count-up` cuenta 0→30.
Scene 2 (1.6–3.2s): la cuenta aterriza y el numeral domina el frame; el sufijo
"DÍAS" se resuelve aparte para que el 30 lea solo.
Scene 3 (3.2–5.0s): la tarjeta entra con spring-pop-entrance: "LA INVESTIGACIÓN
DEBE CONCLUIR".
Scene 4 (5.0–6.8s): revelación en mono de la definición: "DÍAS HÁBILES
ADMINISTRATIVOS".
Scene 5 (6.8–8.4s): la abstracción se vuelve concreta — una tira de siete cajas
aparece: cinco encendidas (L–V) y dos apagadas (S–D). La tira es el dato, no la
decoración: es lo que el espectador no tenía claro.
Scene 6 (8.4–9.6s): la trampa operativa, revelada por capa: "y el plazo corre desde
la notificación".
Scene 7 (9.6–11.0s): lectura sostenida, quieta.

## Frame 6 — Parada 4 · Aplicar en 15 días

- scene: La cuarta y última estación: el "15", la cadena de tres pasos y el recorrido completo que vuelve a la vista
- voiceover: ""
- duration: 10s
- poster: 8s
- transition_in: push-slide RIGHT
- status: animated
- src: compositions/frames/06-plazo-15-dias.html
- type: benefit_highlight
- persuasion: Causal chain (concluida → 15 días → aplicada)
- beat: foresight + conviction
- blueprint: spatial-pan-stations (Adapt — Scene N terminal)
- focal: el numeral "15" y la cadena de tres pasos
- roles: numeral = foreground subject · cadena de tres pasos = foreground subject · el eje completo recuperado = supporting

narrativeRole: Cierra el recorrido del eje donde la investigación se convierte en
**consecuencia**. Una investigación que termina y no sanciona no cumple: los 15
días son lo que convierten el deber en acto.
keyMessage: Concluida la investigación, la empresa tiene **15 días hábiles** para
aplicar medidas o sanciones.

> Nota de verificación: la versión anterior pedía "disponer y aplicar" y una cadena
> "informe → medida → aplicada". El paso "recibido el informe" no figura en
> `INVESTIGACION.md` (art. 211-E solo dice "una vez concluida la investigacion"), asi
> que la cadena se recompuso con las tres palabras que si estan verificadas.

Adapt: es la parada terminal del blueprint, así que su firma es el **sostenimiento
en la última estación** — pero la cámara retrocede una vez, al final, para mostrar
el eje completo. Es el único retroceso del video y ocurre después de que la
información ya se entendió.

Scene 1 (0.0–1.6s): PAN a la cuarta parada; `count-up` cuenta 0→15 y aterriza.
Scene 2 (1.6–3.4s): la tarjeta entra con spring-pop-entrance: "CONCLUIDA LA
INVESTIGACION" — los 15 dias solo empiezan cuando la investigacion se cierra.
Scene 3 (3.4–5.2s): una cadena causal de tres pasos se revela de izquierda a
derecha (discrete-text-sequence): 15 DIAS → MEDIDAS O SANCIONES → APLICADAS.
Scene 4 (5.2–6.8s): la cámara retrocede y las cuatro estaciones vuelven a verse
juntas — el recorrido completo como una sola imagen.
Scene 5 (6.8–10.0s): lectura sostenida, cámara estática. La última parada queda
centrada; la etapa terminal del blueprint asienta aquí.

## Frame 7 — Las dos rutas que no se eligen

- scene: Dos tarjetas de igual peso entran por alas opuestas: "investigación interna" frente a "a la Dirección del Trabajo"
- voiceover: ""
- duration: 9s
- poster: 7s
- transition_in: cut
- status: animated
- src: compositions/frames/07-dos-rutas.html
- type: social_proof
- persuasion: Counterexample (esto es cuando se rompe)
- beat: unease + foresight
- blueprint: comparison-split (Reproduce)
- focal: las dos tarjetas enfrentadas y, debajo, la regla que las separa
- roles: las dos tarjetas = foreground subject (split-screen) · la regla disqualificadora = foreground subject · la nota al pie mono = supporting

narrativeRole: El contraejemplo que corrige la regla general sin contradecirla. Sin
este frame el video sería una lista de plazos sin excepciones; con él, el espectador
sabe **cuándo el proceso se le escapa de las manos** — y ese caso aparece siempre
que hay poder de por medio.
keyMessage: Si el denunciado es **un gerente o alguien con poder de representación**,
la investigación **debe** irse a la Dirección del Trabajo: hacerla internamente
pondría en riesgo la imparcialidad.

Reproduce: la firma del blueprint se mantiene completa — dos elementos de igual
peso entrando por alas opuestas, inclinación book-open 3D en espejo, sostenido
lado a lado, y un badge en el borde interno de cada uno que hace pop con resorte
para puntuación.

Scene 1 (0.0–1.8s): dos tarjetas entran por alas opuestas, planas, aún sin inclinar.
Split-screen sobre cream; 3 capas con el campo de fondo.
Scene 2 (1.8–3.4s): inclinación book-open 3D en espejo las asienta lado a lado.
Scene 3 (3.4–4.8s): el badge del borde interno hace pop con resorte en cada tarjeta,
puntuando cada ruta.
Scene 4 (4.8–6.6s): debajo de las dos tarjetas, la regla que las separa aparece
revelándose por capas: "si el denunciado es gerente o tiene poder de representación,
la investigación va SIEMPRE a la Dirección del Trabajo".
Scene 5 (6.6–7.6s): nota al pie en mono, la regla de subcontrato: "en subcontrato o
servicios transitorios conduce la principal, y se le informa en 3 días".
Scene 6 (7.6–9.0s): lectura sostenida, quieta.

## Frame 8 — Los cuatro principios

- scene: Cuatro líneas se acumulan una a una en una lista vertical y quedan en reposo
- voiceover: ""
- duration: 8s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-cuatro-principios.html
- type: branding
- persuasion: Distillation
- beat: clarity + resolve
- blueprint: grid-card-assemble (Adapt)
- focal: la lista de cuatro principios
- roles: la lista = foreground subject · el rótulo mono del artículo = supporting · el cream = background

narrativeRole: El aterrizaje. Cuatro palabras que la ley pone por encima de todo
el procedimiento, escritas como el marco dentro del cual los cuatro plazos se
mueven. Es lo que el espectador debería poder recitar después de ver el video.
keyMessage: Toda investigación se rige por cuatro principios: confidencialidad,
imparcialidad, celeridad y perspectiva de género.

Adapt: se conserva la firma —N elementos en cascada escalonada que se acumulan en
una lista vertical y se sostienen—. El cambio es que los cuatro ítems no son
tarjetas con icono sino líneas de texto: son límites, no acciones, y se ven como
líneas.

Scene 1 (0.0–1.2s): solo el rótulo mono `art. 211-B`, centrado. Campo despejado.
Scene 2 (1.2–2.6s): la primera línea entra en cascada — "CONFIDENCIALIDAD".
Scene 3 (2.6–4.0s): la segunda — "IMPARCIALIDAD".
Scene 4 (4.0–5.2s): la tercera — "CELERIDAD".
Scene 5 (5.2–6.4s): la cuarta — "PERSPECTIVA DE GÉNERO".
Scene 6 (6.4–8.0s): las cuatro se sostienen, quietas, y un filete cierra la lista
por abajo. Ningún movimiento en este último tramo: la quietud **es** el mensaje.

## Frame 9 — Fuente y descargo

- scene: Una tarjeta limpia y quieta con la referencia de la ley y el descargo
- voiceover: ""
- duration: 4s
- poster: 3s
- transition_in: crossfade
- status: animated
- src: compositions/frames/09-fuente-descargo.html
- type: cta
- persuasion: Citation / source
- beat: resolve
- blueprint: titlecard-reveal (Reproduce)
- focal: la tarjeta de fuente y descargo
- roles: la tarjeta = foreground subject · el cream = background

narrativeRole: El respaldo. En un video sobre normativa legal la referencia completa
va en pantalla: sin ella el material no es citable ni reutilizable en capacitación,
y el repo es público.
keyMessage: El material es informativo y no reemplaza la lectura de la ley; la fuente
es la Ley N° 21.643, Diario Oficial del 15 de enero de 2024.

Reproduce: la firma del blueprint es exactamente un movimiento contenido y luego
quietud — la baja animación **es** el contenido en una tarjeta de cierre.

Scene 1 (0.0–1.6s): la tarjeta entra con un único movimiento restringido
(slide-up crossfade), con la referencia de la ley y el descargo ya legibles.
Scene 2 (1.6–4.0s): sostén completamente quieto. Sin animación, sin brillo, sin
respiración. La tarjeta cita la fuente completa y declara que no es asesoría legal.
