/**
 * emit.mjs — esqueleto determinista de un frame HyperFrames.
 *
 * Por que existe: el piloto (ley-karin-plazos) se escribio a mano y
 * acumulo cuatro bugs silenciosos, ninguno reportado por una herramienta:
 *
 *   1. Selectores CSS que empiezan con digito (`#07-...`) se descartan sin
 *      avisar -> el frame queda sin CSS.
 *   2. `line-height` en cqh con `font-size` en cqw -> lineas encimadas.
 *   3. JS que busca un id que no existe -> tween sobre `null`, sin warning.
 *   4. Tipografia mixta a mano.
 *
 * Aqui la geometria se calcula en px enteros y se emite una sola vez, asi
 * que las clases 1, 2 y 4 no se pueden escribir. La clase 3 se cierra con
 * `check-selectors.mjs`, que corre antes de cada render.
 *
 * Convenciones que se respetan (sacadas del piloto que si renderizo bien):
 *   - Todo id arranca con digito, asi que TODO selector es de atributo:
 *     `[id="03-algo"]`. Nunca `#03-algo`, nunca `.03-algo`.
 *   - Cada elemento lleva `data-hf-id` (target estable de Studio).
 *   - Un `<style>` solo para @font-face (las woff2 reales del proyecto) y
 *     otro para el resto.
 *   - El ground de fondo es su propia capa `clip`, nunca el root.
 *   - Un unico timeline pausado registrado en `window.__timelines[id]`.
 *   - `tl.to({}, { duration: N }, t)` ancla la duracion declarada.
 */

export const W = 1920;
export const H = 1080;
export const PAD = 96; // margen de slide, el mismo que usa el piloto

/* ------------------------------------------------------------------------ *
 * ids estables
 * ------------------------------------------------------------------------ */

/**
 * Hash determinista -> 4 chars base36. El piloto usa ids tipo `hf-nzco`.
 * Se derivan del nombre del elemento para que dos corridas den el mismo
 * archivo y `git diff` solo muestre lo que cambio de verdad.
 */
function hash4(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  // 36^4 = 1679616
  return (h >>> 0).toString(36).padStart(4, '0').slice(-4);
}

/* ------------------------------------------------------------------------ *
 * el constructor de un frame
 * ------------------------------------------------------------------------ */

export class Frame {
  /**
   * @param {object} o
   * @param {string} o.id      id de composicion, p.ej. `03-plazo-2-dias`
   * @param {number} o.duracion segundos declarados en data-duration
   * @param {object} o.tokens  paleta (ver tokens.mjs)
   */
  constructor({ id, duracion, tokens }) {
    this.id = id;
    this.duracion = duracion;
    this.tokens = tokens;

    /** @type {string[]} todo selector de atributo emitido, para auditar */
    this.sel = [];
    this.css = [];
    this.html = [];
    this.js = [];

    this.track = 0;

    /* Las variables de color viajan como custom properties para que los
       primitivos montados (count-up) sean token-native. */
    this.vars = {
      '--brand': tokens.brand,
      '--accent': tokens.accent,
      '--accent-2': tokens.brandLite,
      '--fg': tokens.ink,
      '--bg': tokens.cream,
      '--font-display': `"${tokens.display}", Georgia, serif`,
      '--font-mono': `"${tokens.mono}", ui-monospace, monospace`,
    };
  }

  /* ---- ids ------------------------------------------------------------- */

  /**
   * Nombre corto sin registrar, dentro del prefijo del frame. El guion
   * inicial del sufijo es opcional: `-rule` y `rule` dan el mismo id, para
   * que los ids no salgan con doble guion.
   */
  el(suffix) {
    return `${this.id}-${String(suffix).replace(/^-+/, '')}`;
  }

  /** Registra un id y devuelve su selector de atributo. */
  use(suffix) {
    const sel = `[id="${this.el(suffix)}"]`;
    if (!this.sel.includes(sel)) this.sel.push(sel);
    return sel;
  }

  /* ---- CSS ------------------------------------------------------------- */

  /**
   * Emite una regla. `decl` es un objeto; se ordena para que el archivo sea
   * estable entre corridas.
   */
  rule(selector, decl) {
    const body = Object.entries(decl)
      .filter(([, v]) => v !== undefined && v !== null)
      .map(([k, v]) => `        ${k}: ${v};`)
      .join('\n');
    if (!body) return;
    this.css.push(`${selector} {\n${body}\n      }`);
  }

  /** Regla literal (para @keyframes y cosas que no son un mapa). */
  raw(text) {
    this.css.push(text);
  }

  /* ---- HTML ------------------------------------------------------------ */

  /**
   * Anade un elemento. `attrs` sin `id` es valido (envoltorios).
   * Devuelve el html ya indentado, para que los llamadores lo puedan anidar.
   */
  box(suffix, tag, attrs = {}, inner = '', indent = 6) {
    const pad = ' '.repeat(indent);
    const a = { 'data-hf-id': `hf-${hash4(this.el(suffix))}` };
    if (suffix) a.id = this.el(suffix);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null) continue;
      a[k] = v;
    }
    const s = Object.entries(a)
      .map(([k, v]) => `${k}="${String(v).replace(/"/g, '&quot;')}"`)
      .join(' ');
    if (inner === '') return `${pad}<${tag} ${s}></${tag}>`;
    return `${pad}<${tag} ${s}>${inner}</${tag}>`;
  }

  /** Capa `clip`: lo unico que el runtime usa para Visibility. */
  layer(suffix, attrs = {}, inner = '', indent = 4) {
    const a = { class: 'clip', 'data-start': 0, 'data-duration': this.duracion, ...attrs };
    return this.box(suffix, 'div', a, inner, indent);
  }

  text(suffix, tag, content, attrs = {}, indent = 8) {
    return this.box(suffix, tag, attrs, content, indent);
  }

  /* ---- JS -------------------------------------------------------------- */

  /**
   * Registra un id como "usado por la animacion" y devuelve la expresion JS
   * para seleccionarlo. Registrarlo tiene un efecto util: `toHTML` escribe la
   * lista IDS al principio del script, y si alguno no existe en el DOM el
   * frame lanza al cargar en vez de dejar un tween sobre `null` que no hace
   * nada. Ese fue el bug del frame 09 del piloto.
   */
  q(suffix) {
    const id = this.el(suffix);
    this._used = this._used || [];
    if (!this._used.includes(id)) this._used.push(id);
    return `byId("${id}")`;
  }

  line(text) {
    this.js.push(text);
  }

  /* ---- salida ---------------------------------------------------------- */

  toHTML() {
    const t = this.tokens;
    const fontFace = `      /* frame.md typography, resolved to the real woff2 files shipped in
         capture/assets/fonts. Both are the latin subset variable cuts, so
         the render host never falls back to a generic family. */
      @font-face {
        font-family: '${t.display}';
        font-style: normal;
        font-weight: 200 900;
        font-display: block;
        src: url('capture/assets/fonts/source-serif-4-latin.woff2') format('woff2');
      }
      @font-face {
        font-family: '${t.mono}';
        font-style: normal;
        font-weight: 100 800;
        font-display: block;
        src: url('capture/assets/fonts/jetbrains-mono-latin.woff2') format('woff2');
      }`;

    const base = `      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* ── Frame root — full ${W}x${H} ground box, container-query basis ─── */
      [id="${this.id}"] {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        isolation: isolate;
        color: ${t.ink};
        font-family: var(--font-display);
      }

      /* ── Full-bleed ground (own clip layer, never the root) ───────────── */
      ${this.use('-bg')} {
        position: absolute;
        inset: 0;
        background: ${t.cream};
      }

      /* ── El mundo: una camara virtual. Todo lo que se mueve, sube aqui ── */
      ${this.use('-world')} {
${Object.entries(this.vars)
  .map(([k, v]) => `        ${k}: ${v};`)
  .join('\n')}
        position: absolute;
        inset: 0;
        overflow: hidden;
      }`;

    const body = [...this.css].join('\n\n');
    const usedList = (this._used || []).map((id) => `          "${id}",`).join('\n');

    return `<template>
  <div data-hf-id="hf-${hash4(this.id)}" id="${this.id}" data-composition-id="${this.id}" data-start="0" data-duration="${this.duracion}" data-width="${W}" data-height="${H}">
    <style>
${fontFace}
    </style>

    <style>
${base}

${body}
    </style>

${this.html.join('\n')}

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      (function () {
        "use strict";

        // Ids and class names carry no custom tokens: every selector is an
        // attribute or id selector, so sibling frames cannot collide.
        var byId = function (id) {
          return document.querySelector('[id="' + id + '"]');
        };

        // Cada id que este frame anima tiene que existir de verdad. Si falta
        // uno, el tween seria sobre null y el reveal nunca correria — que es
        // exactamente el bug que tubo el frame 09 del piloto.
        var IDS = [
${usedList}
        ];
        var faltantes = IDS.filter(function (id) { return !byId(id); });
        if (faltantes.length) {
          throw new Error(
            "[${this.id}] ids sin elemento en el DOM: " + faltantes.join(", "),
          );
        }

        var tl = gsap.timeline({ paused: true });

${this.js.map((l) => (l ? '        ' + l : '')).join('\n')}

        // hold the declared ${this.duracion}s window open without an exit tween
        tl.to({}, { duration: 0.01 }, ${this.duracion - 0.01});

        tl.seek(0);
        window.__timelines = window.__timelines || {};
        window.__timelines["${this.id}"] = tl;
      })();
    </script>
  </div>
</template>
`;
  }
}

/* ------------------------------------------------------------------------ *
 * utilidades de layout
 * ------------------------------------------------------------------------ */

/** px -> cqw, con el comentario que el piloto usa para que se pueda leer. */
export function cqw(px) {
  return `${+(px / (W / 100)).toFixed(4)}cqw`;
}

/** Un filete horizontal. */
export function rule(frame, suffix, { left, top, width, color, height = 2, origin = '0% 50%' }) {
  frame.rule(frame.use(suffix), {
    position: 'absolute',
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    background: color,
    'transform-origin': origin,
    'will-change': 'transform',
  });
}

/**
 * Un bloque de texto posicionado en absoluto.
 *
 * `mas` se mezcla al final y sirve para declaraciones que no estan en la
 * lista de arriba (display, flex-wrap, gap, align-items...). Sin ese canal
 * la propiedad se perdia en silencio, que es como se perdia el `display:
 * flex` del hero y por que el auditor de layout seguia reportando
 * content_overlap.
 */
export function block(frame, suffix, { left, top, width, font, size, weight = 400, lh = 1.25, ls = '0', color, transform, align }, mas = {}) {
  frame.rule(frame.use(suffix), {
    position: 'absolute',
    left: `${left}px`,
    top: `${top}px`,
    ...(width ? { width: `${width}px` } : {}),
    margin: 0,
    color,
    'font-family': font,
    'font-size': cqw(size),
    'font-weight': weight,
    'line-height': lh,
    'letter-spacing': ls,
    ...(transform ? { 'text-transform': transform } : {}),
    ...(align ? { 'text-align': align } : {}),
    ...mas,
    'will-change': 'transform, opacity',
  });
}
