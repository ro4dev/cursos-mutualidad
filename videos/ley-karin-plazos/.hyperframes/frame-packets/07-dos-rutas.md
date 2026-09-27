# Frame packet: 07-dos-rutas

## Project inputs

- Project: /home/ro/Projects/cursos-mutualidad/videos/ley-karin-plazos
- Design tokens: /home/ro/Projects/cursos-mutualidad/videos/ley-karin-plazos/frame.md
- RULES_DIR: /home/ro/Projects/cursos-mutualidad/.agents/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 7 — Las dos rutas que no se eligen

- scene: Dos tarjetas de igual peso entran por alas opuestas: "investigación interna" frente a "a la Dirección del Trabajo"
- voiceover: ""
- duration: 9s
- poster: 7s
- transition_in: cut
- status: outline
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

## Selected blueprint: comparison-split

# comparison-split — Comparison Split-Cards

**intent**: Two paired items of equal weight shown side-by-side with mirrored 3D "book-open" tilts — the eye reads them as a balanced comparison, then a pill badge lands at each card's inner edge to punctuate. The motion IS the symmetry: two cards arriving from opposite wings into a held spread.

**roles served**

- Key_Feature (from `comparison-split-cards`): when two complementary features / capabilities of equal weight should be presented **simultaneously, not sequentially** — an A/B, a "X + Y together," paired concepts the viewer must weigh side-by-side. Not for >2 items (use `grid-card-assemble`) or sequential steps.

**duration**: 4–6s

**shot structure** (a `[bg]` canvas carrying two faint ambient glow blooms — `[accent A]` near 30%, `[accent B]` near 70% — so each side owns a color identity across a 50% symmetry axis; equal-width cards under one shared perspective parent)

- **Scene 1 (0.0–~0.8s) — title sets the concept.** A centered `[title line]` with an `[accent keyword]` slides DOWN into place from just above (a short smooth settle). The downward arrival is deliberate: it forms a non-conflicting T-shape against the cards, which arrive from the sides next.
- **Scene 2 (~0.4–1.9s) — the split-tilt entry (signature move).** Two equal-width feature cards arrive from opposite wings — `[left card]` from the left, `[right card]` from the right ~0.2s behind — each carrying a **mirrored 3D `rotateY` tilt** (left faces right, right faces left, opening like a book) and scaling ~0.85→1 as it lands. The entry overlaps the title's tail so the whole thing reads as ONE arrival, not two beats. Each card holds `[image / label / subtitle]`; box-shadows fall **outward** from the tilt (left shadow right, right shadow left).
- **Scene 3 (~1.9–end) — badges punctuate, then hold.** A pill `[badge]` lands at each card's **inner edge** (left then right, ~0.3s apart), overlapping its card ~15% so it reads as attached, not orbiting. This is the lone overshoot in the shot — it earns the punctuation. Settles and holds.

**motion vocabulary**: title slide-down from above; mirrored opposite-wing card entry; static book-open `rotateY` tilt (`+tilt` left, `−tilt` right); tilt-matched outward box-shadow; inner-edge badge spring-pop; gentle phase-opposed idle float (left vs right, never synchronized) registered as subtle jitter; dual side-glow ambient.

**rule mapping**

- two cards entering from opposite wings with mirrored `rotateY` tilts + tilt-matched shadow → `split-tilt-cards` (the signature; keep the two-layer split so the entry `x`/`scale` and the idle never collide on one alias)
- title slide-down settle → `gsap-effects` (translate + opacity on a long-tail `power3`)
- inner-edge pill badge pop (the one overshoot) → `spring-pop-entrance` (overshoot register — earns the punctuation)
- phase-opposed idle float on the pair → `sine-wave-loop` (low-amplitude register — subtle jitter, NOT lazy breathing; left `sin(t)`, right `sin(t+π)` so they never conveyor-belt)
- the two faint side glows behind the cards → `ambient-glow-bloom` (un-triggered soft bloom, one per accent)

**camera modifier**: camera-static by default — the symmetry is the subject and a move would break the balance.
