# cursos-mutualidad

Catalogo de cursos de capacitacion en espanol de Chile, uno por carpeta en
`courses/`, y un visor web en Next.js para recorrerlos.

## Como esta armado

```
courses/<slug>/          investigacion y documentos del curso
  BRIEF.md               contrato de produccion del video
  INVESTIGACION.md       hechos verificados + lo que no se pudo verificar
  STORYBOARD.md          estructura de frames con el reparto del tiempo
  index.json             metadata que lee el catalogo
courses/catalog.json     generado, no se edita a mano

videos/<carpeta>/        proyecto hyperframes, uno por curso
  BRIEF.md               copia del del curso
  INVESTIGACION.md       copia del del curso: la fuente de verdad del copy
  frame.md               sistema visual (el preset editorial-forest)
  STORYBOARD.md          frames, duraciones y cortes
  compositions/frames/   un HTML por frame
  compositions/components/ primitivas compartidas
  index.html             generado: la linea de tiempo ensamblada
  meta.json              incluye "course": el vinculo con el slug del catalogo
  capture/assets/fonts/  los dos woff2 reales, para que el render no dependa de la red

lib/                     tipos y lectura del catalogo
app/                     visor Next.js
scripts/                 generadores, guardas y pipeline de render
```

`videos/<carpeta>/` no siempre se llama como el slug. El piloto es
`videos/ley-karin-plazos/` para el curso `ley-karin`, porque asi se lee adentro
del composition. El vinculo declarado es el campo `course` de `meta.json`, y lo
resuelve `scripts/proyectos.mjs` para que el catalogo y el pipeline compartan un
solo mapa.

## Comandos

```bash
npm install

npm run dev                # visor en http://localhost:4310
npm run check              # catalogo + guard de CSS + catalogo regenerado
npm run catalog:check      # busca prosa corrupta en los 20 cursos
npm run catalog:build      # valida y regenera courses/catalog.json
npm run course:gen <slug>  # regenera los 4 documentos de un curso
npm run frames:check       # guard de selectores y de interlineado de los frames
npm run types              # tsc --noEmit

node scripts/scaffold.mjs --list   # que proyectos de hyperframes faltan
node scripts/scaffold.mjs          # crea los que faltan

npm run video:build  <carpeta>          # solo arma index.html
npm run video:render <carpeta>          # compone y renderiza
npm run video:render                   # todos los proyectos de videos/
```

## La regla que ordena todo

**Lo que no esta en `INVESTIGACION.md` no se dice en pantalla.**

Cada curso lista, en dos secciones separadas, los hechos que estan respaldados
por la fuente oficial y los que no se pudieron confirmar. El copy del video se
deriva solo de la primera seccion. Por eso el catalogo no menciona multas en
UTM ni plazos que no esten citados: no es que falten, es que no se verificaron.

## Por que los scripts en vez de documentos escritos a mano

La prosa larga en espanol generada por un modelo sale con fragmentos rotos:
caracteres de otros alfabetos pegados en una frase, palabras partidas, un `>`
colgando. `scripts/validate-courses.mjs` existe porque cada uno de sus patrones
salio de una corrupcion real de este repo, y falla ruidosamente en vez de dejar
que llegue al render.

Los generadores (`gen-courses.mjs`, `build-catalog.mjs`) cumplen la otra mitad
de la ecuacion: los hechos de los 20 cursos viven en un solo archivo, asi que
agregar un curso no es copiar y pegar 4 documentos.

## La clase de falla que los linters no ven

Cuatro cosas rompen un frame y ninguna las reporta, porque el frame sigue
"funcionando":

1. **Identificadores CSS que empiezan con digito.** `#07-algo` y `.07-algo` son
   selectores invalidos. El navegador descarta la regla entera, sin error ni
   aviso. Un frame puede quedarse sin una sola regla de estilo y seguir
   renderizando.
2. **Reglas que apuntan a un id o una clase que el HTML no define.** La regla
   no hace nada y nadie se entera.
3. **Ids que el CSS o el JS piden con un nombre y el HTML define con otro.** El
   elemento existe, pero la animacion no lo encuentra: el tween se pierde en
   silencio.
4. **`line-height` en `cqh` con `font-size` en `cqw`.** 1cqw son 19.2px y 1cqh
   son 10.8px, asi que el interlineado sale 56% mas corto de lo que dice y las
   lineas se montan unas en otras.

`scripts/check-selectors.mjs` caza las cuatro y es el primer paso de
`render-all.mjs`: si un frame tiene el CSS roto, no se compone ni se renderiza.
`hyperframes lint` solo revisa los ids que se usan desde `querySelector`, y por
eso no ve ninguna de las otras.

## Videos

Los MP4 no se versionan. El repo es publico y no hay hosting, asi que cada video
se renderiza a pedido:

```bash
node scripts/render-all.mjs ley-karin-plazos
```

El visor siempre ofrece algo: el MP4 si ya fue renderizado, la composicion viva
de hyperframes si esta ensamblada, y si no esta ninguna de las dos, el comando
exacto que falta. Nunca un reproductor vacio.

## Skills

Las skills de hyperframes van en `.agents/skills/` y se instalan siempre con
`--agent opencode`. Nunca con `-g` (global) ni gerando `.claude/`.

```bash
npx skills add heygen-com/hyperframes --agent opencode -y
```

## Alcance

Material informativo de capacitacion. No constituye asesoria legal.
