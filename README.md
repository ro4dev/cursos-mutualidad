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

videos/<slug>/           proyecto hyperframes (solo para los que ya se componen)
lib/                     tipos y lectura del catalogo
app/                     visor Next.js
scripts/                 generadores, validador y pipeline de render
```

## Comandos

```bash
npm install

npm run dev                # visor en http://localhost:3000
npm run catalog:check      # busca prosa corrupta en los 20 cursos
npm run catalog:build      # valida y regenera courses/catalog.json
npm run course:gen <slug>  # regenera los 4 documentos de un curso

npm run video:build  <slug>   # solo arma index.html
npm run video:render <slug>   # compone y renderiza a public/videos/<slug>.mp4
npm run video:render          # todos los proyectos de videos/
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

## Videos

Los MP4 no se versionan. El repo es publico y no hay hosting, asi que cada video
se renderiza a pedido:

```bash
npm run video:render ley-karin
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
