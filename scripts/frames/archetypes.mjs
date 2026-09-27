/**
 * archetypes.mjs — los frames base que se combinan para armar un curso.
 *
 * Un curso de 45s son 5 frames y uno de 60s son 6. No todos los cursos
 * usan los mismos: cada uno elige de este catalogo segun que forma tiene
 * su contenido. La forma sale de los hechos verificados de
 * `courses/<slug>/INVESTIGACION.md`.
 *
 * Regla dura: lo que no este en INVESTIGACION.md no se dice en pantalla.
 * El copy llega ya verificado; aqui solo se le da forma y movimiento.
 *
 * Cada arquetipo arma el HTML del world como un arbol y recien al final
 * empuja las capas. Asi el orden de `f.html` siempre es [ground, world].
 */

import { rule, block } from './emit.mjs';
import { R, CANVAS } from './tokens.mjs';

const { PAD, INNER } = CANVAS;

const display = 'var(--font-display)';
const mono = 'var(--font-mono)';

/**
 * Une frases en `<span>` para revelarlas una a una.
 *
 * `frases` es un array de strings y cada uno es un span. El corte lo decide
 * quien escribe la spec, no el navegador. Son frases y no palabras por dos
 * razones:
 *
 *  1. Geometria. El contenedor es `display: flex` con wrap. Eso importa de
 *     verdad: el auditor de layout de hyperframes exonera el solapamiento
 *     entre bloques in-flow que comparten un ancestro flex/grid
 *     (`isManagedFlowOverlap`), porque el motor de layout ya les reservo
 *     espacio y no pueden chocar de verdad. Sin el flex, un `<h1>` block con
 *     spans inline daba `content_overlap` por slop de line-box. Se midio:
 *     con `display: block` daba 2 errores, con flex da 0.
 *  2. Lectura. Un titular de 148px que entra palabra por palabra se ve
 *     lento y de folleto. Por frases se lee como una linea.
 *
 * El espacio entre frases es el `gap` del flex, nunca un espacio dentro del
 * span: si el span contiene "LA " su caja se extiende sobre la siguiente.
 */
function spans(f, suffix, frases, indent) {
  return frases
    .map((fr, i) => f.box(`${suffix}-${i}`, 'span', {}, fr, indent))
    .join('');
}

/** Propiedades de un bloque que envuelve spans de revelado. */
const FRASES = {
  display: 'flex',
  'flex-wrap': 'wrap',
  gap: '0.04em 0.28em',
};

/** Las dos capas base: ground + world, con lo de adentro ya armado. */
function capas(f, worldInner) {
  f.html.push(
    f.box('-bg', 'div', {
      class: 'clip',
      'data-start': 0,
      'data-duration': f.duracion,
      'data-track-index': 0,
    }),
    f.layer('-world', { 'data-track-index': 1 }, worldInner, 4),
  );
}

/* ========================================================================= *
 * 1. GANCHO — la tesis. Sin numero, sin lista: una frase y su apoyo.
 * ========================================================================= */
export function gancho(f, { kicker, grande, remark }) {
  const t = f.tokens;

  rule(f, '-rule', { left: PAD, top: 212, width: 210, color: t.accent });
  block(f, '-kicker', {
    left: PAD, top: 152, font: mono, size: R.label, weight: 500,
    ls: '0.18em', color: t.greenLite, transform: 'uppercase',
  });
  block(f, '-hero', {
    left: PAD, top: 300, width: INNER, font: display, size: R.hero,
    weight: 500, lh: 1.02, ls: '-0.02em', color: t.ink,
  }, FRASES);
  if (remark) {
    block(f, '-remark', {
      left: PAD, top: 780, width: 1180, font: display, size: R.lead,
      weight: 400, lh: 1.34, color: t.greenDeep,
    });
  }

  capas(f, [
    f.box('-kicker-w', 'div', {}, f.box('-kicker', 'span', {}, kicker, 8), 6),
    f.box('-rule', 'span', {}, '', 6),
    f.box('-hero-w', 'div', {}, f.box('-hero', 'h1', {}, spans(f, '-hl', grande, 8), 8), 6),
    remark ? f.box('-remark-w', 'div', {}, f.box('-remark', 'p', {}, remark, 8), 6) : '',
  ].filter(Boolean).join(''));

  const qRule = f.q('-rule');
  const qKicker = f.q('-kicker');
  const qHero = f.q('-hero');

  f.line('');
  f.line('// — la regla del sistema entra primero, sin copy.');
  f.line(`tl.fromTo(${qRule}, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power3.out" }, 0.1);`);
  f.line(`tl.fromTo(${qKicker}, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.25);`);
  f.line('');
  f.line('// — la frase entra de una linea a la vez.');
  f.line(`var heroLines = Array.prototype.slice.call(${qHero}.querySelectorAll("span"));`);
  f.line('heroLines.forEach(function (l, i) {');
  f.line('  tl.fromTo(l, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.62, ease: "power3.out" }, 0.5 + i * 0.16);');
  f.line('});');
  if (remark) {
    const qRemark = f.q('-remark');
    f.line(`tl.fromTo(${qRemark}, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.4);`);
  }
}

/* ========================================================================= *
 * 2. STAT — un numero gigante, su unidad y una bajada.
 * ========================================================================= */
export function stat(f, { kicker, numero, unidad, bajada, sub }) {
  const t = f.tokens;

  rule(f, '-rule', { left: PAD, top: 176, width: INNER, color: t.greenLite });
  block(f, '-kicker', {
    left: PAD, top: 122, font: mono, size: R.label, weight: 500,
    ls: '0.18em', color: t.greenLite, transform: 'uppercase',
  });
  block(f, '-num', {
    left: PAD - 12, top: 240, width: 700, font: display, size: R.stat,
    weight: 500, lh: 0.84, ls: '-0.03em', color: t.greenDeep,
  });
  if (unidad) {
    block(f, '-unit', {
      left: 124, top: 626, width: 660, font: mono, size: 34, weight: 500,
      ls: '0.14em', color: t.accent, transform: 'uppercase',
    });
  }
  rule(f, '-vrule', { left: 900, top: 272, width: 2, height: 430, color: t.accent, origin: '50% 0%' });
  block(f, '-lead', {
    left: 976, top: 266, width: 848, font: display, size: R.title,
    weight: 500, lh: 1.14, color: t.ink,
  });
  if (sub) {
    rule(f, '-srule', { left: 976, top: 706, width: 120, color: t.greenLite });
    block(f, '-sub', {
      left: 976, top: 746, width: 800, font: mono, size: R.micro, weight: 500,
      ls: '0.08em', color: t.greenLite,
    });
  }

  const digitos = numero
    .split('')
    .map((d, i) => f.box(`-d${i}`, 'span', {}, d === ' ' ? '&nbsp;' : d, 8))
    .join('');

  capas(f, [
    f.box('-kicker-w', 'div', {}, f.box('-kicker', 'span', {}, kicker, 8), 6),
    f.box('-rule', 'span', {}, '', 6),
    f.box('-num-w', 'div', {}, f.box('-num', 'div', {}, digitos, 8), 6),
    unidad ? f.box('-unit-w', 'div', {}, f.box('-unit', 'span', {}, unidad, 8), 6) : '',
    f.box('-vrule', 'span', {}, '', 6),
    bajada ? f.box('-lead-w', 'div', {}, f.box('-lead', 'h2', {}, bajada, 8), 6) : '',
    sub ? f.box('-srule', 'span', {}, '', 6) : '',
    sub ? f.box('-sub-w', 'div', {}, f.box('-sub', 'p', {}, sub, 8), 6) : '',
  ].filter(Boolean).join(''));

  const qRule = f.q('-rule');
  const qKicker = f.q('-kicker');
  const qNum = f.q('-num');
  const qVrule = f.q('-vrule');

  f.line('');
  f.line(`tl.fromTo(${qRule}, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power3.out" }, 0.1);`);
  f.line(`tl.fromTo(${qKicker}, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, 0.2);`);
  f.line('');
  f.line('// — el numero se cuenta digito a digito.');
  f.line(`var digits = Array.prototype.slice.call(${qNum}.querySelectorAll("span"));`);
  f.line('digits.forEach(function (d, i) {');
  f.line('  tl.fromTo(d, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.4 + i * 0.13);');
  f.line('});');
  if (unidad) {
    const qUnit = f.q('-unit');
    f.line(`tl.fromTo(${qUnit}, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }, 0.95);`);
  }
  f.line(`tl.fromTo(${qVrule}, { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: "power3.out" }, 0.7);`);
  if (bajada) {
    const qLead = f.q('-lead');
    f.line(`tl.fromTo(${qLead}, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.25);`);
  }
  if (sub) {
    const qSrule = f.q('-srule');
    const qSub = f.q('-sub');
    f.line(`tl.fromTo(${qSrule}, { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "power3.out" }, 1.9);`);
    f.line(`tl.fromTo(${qSub}, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, 2.0);`);
  }
}

/* ========================================================================= *
 * 3. LISTA — 3 a 5 items con su filete. El cuerpo de la mayoria.
 * ========================================================================= */
export function lista(f, { kicker, titulo, items }) {
  const t = f.tokens;
  const itemW = INNER - 40;
  const top0 = 404;
  const gap = 130;

  rule(f, '-toprule', { left: PAD, top: 96, width: INNER, color: t.green });
  block(f, '-kicker', {
    left: PAD, top: 118, font: mono, size: R.label, weight: 500,
    ls: '0.18em', color: t.greenLite, transform: 'uppercase',
  });
  block(f, '-titulo', {
    left: PAD, top: 170, width: 1200, font: display, size: R.title,
    weight: 500, lh: 1.06, ls: '-0.01em', color: t.ink,
  });

  const partes = [
    f.box('-toprule', 'span', {}, '', 6),
    f.box('-kicker-w', 'div', {}, f.box('-kicker', 'span', {}, kicker, 8), 6),
    f.box('-titulo-w', 'div', {}, f.box('-titulo', 'h2', {}, titulo, 8), 6),
  ];

  items.forEach((it, i) => {
    const y = top0 + i * gap;
    const s = `-i${i}`;

    rule(f, `${s}-rule`, { left: PAD, top: y, width: itemW, color: t.greenLite });
    block(f, `${s}-num`, {
      left: PAD, top: y + 26, width: 76, font: mono, size: R.numeral,
      weight: 500, color: t.accent,
    });
    block(f, `${s}-head`, {
      left: PAD + 100, top: y + 16, width: 470, font: display, size: 40,
      weight: 500, lh: 1.1, color: t.ink,
    });
    block(f, `${s}-gloss`, {
      left: PAD + 620, top: y + 20, width: itemW - 620, font: display, size: 27,
      weight: 400, lh: 1.4, color: t.greenDeep,
    });

    partes.push(f.box(`${s}-w`, 'div', {}, [
      f.box(`${s}-rule`, 'span', {}, '', 8),
      f.box(`${s}-num`, 'span', {}, it.n ?? String(i + 1), 8),
      f.box(`${s}-head`, 'h3', {}, it.head, 8),
      f.box(`${s}-gloss`, 'p', {}, it.gloss, 8),
    ].join(''), 6));
  });

  capas(f, partes.join(''));

  const qToprule = f.q('-toprule');
  const qKicker = f.q('-kicker');
  const qTitulo = f.q('-titulo');

  f.line('');
  f.line(`tl.fromTo(${qToprule}, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power3.out" }, 0.1);`);
  f.line(`tl.fromTo(${qKicker}, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, 0.2);`);
  f.line(`tl.fromTo(${qTitulo}, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.45);`);
  f.line('');
  f.line('// — cada item entra con su filete, de arriba hacia abajo.');

  items.forEach((_, i) => {
    const s = `-i${i}`;
    const at = 0.95 + i * 0.34;
    const qR = f.q(`${s}-rule`);
    const qN = f.q(`${s}-num`);
    const qH = f.q(`${s}-head`);
    const qG = f.q(`${s}-gloss`);
    f.line(`tl.fromTo(${qR}, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power3.out" }, ${at.toFixed(2)});`);
    f.line(`tl.fromTo(${qN}, { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }, ${(at + 0.06).toFixed(2)});`);
    f.line(`tl.fromTo(${qH}, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, ${(at + 0.12).toFixed(2)});`);
    f.line(`tl.fromTo(${qG}, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, ${(at + 0.2).toFixed(2)});`);
  });
}

/* ========================================================================= *
 * 4. CIERRE — la fuente y la regla que se llevan puesto.
 * ========================================================================= */
export function cierre(f, { kicker, regla, fuente, nota }) {
  const t = f.tokens;

  rule(f, '-rule', { left: PAD, top: 304, width: 210, color: t.accent });
  block(f, '-kicker', {
    left: PAD, top: 246, font: mono, size: R.label, weight: 500,
    ls: '0.18em', color: t.greenLite, transform: 'uppercase',
  });
  block(f, '-regla', {
    left: PAD, top: 404, width: 1440, font: display, size: 76,
    weight: 500, lh: 1.08, ls: '-0.01em', color: t.ink,
  }, FRASES);
  if (nota) {
    block(f, '-nota', {
      left: PAD, top: 800, width: 1200, font: display, size: R.body,
      weight: 400, lh: 1.4, color: t.greenDeep,
    });
  }
  rule(f, '-frule', { left: PAD, top: 954, width: INNER, color: t.greenLite });
  block(f, '-fuente', {
    left: PAD, top: 980, width: 1300, font: mono, size: R.micro, weight: 500,
    ls: '0.06em', color: t.greenLite,
  });
  block(f, '-marca', {
    left: 1420, top: 980, width: 404, font: mono, size: R.micro, weight: 500,
    ls: '0.06em', color: t.greenLite, align: 'right',
  });

  capas(f, [
    f.box('-kicker-w', 'div', {}, f.box('-kicker', 'span', {}, kicker, 8), 6),
    f.box('-rule', 'span', {}, '', 6),
    f.box('-regla-w', 'div', {}, f.box('-regla', 'h2', {}, spans(f, '-rl', regla, 8), 8), 6),
    nota ? f.box('-nota-w', 'div', {}, f.box('-nota', 'p', {}, nota, 8), 6) : '',
    f.box('-frule', 'span', {}, '', 6),
    f.box('-fuente-w', 'div', {}, f.box('-fuente', 'p', {}, fuente, 8), 6),
    f.box('-marca-w', 'div', {}, f.box('-marca', 'p', {}, 'CURSOS DE MUTUALIDAD', 8), 6),
  ].filter(Boolean).join(''));

  const qRule = f.q('-rule');
  const qKicker = f.q('-kicker');
  const qRegla = f.q('-regla');
  const qFrule = f.q('-frule');
  const qFuente = f.q('-fuente');
  const qMarca = f.q('-marca');

  f.line('');
  f.line(`tl.fromTo(${qRule}, { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power3.out" }, 0.15);`);
  f.line(`tl.fromTo(${qKicker}, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, 0.28);`);
  f.line('');
  f.line('// — la regla entra de una linea a la vez.');
  f.line(`var reglaLines = Array.prototype.slice.call(${qRegla}.querySelectorAll("span"));`);
  f.line('reglaLines.forEach(function (l, i) {');
  f.line('  tl.fromTo(l, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.58, ease: "power3.out" }, 0.55 + i * 0.18);');
  f.line('});');
  if (nota) {
    const qNota = f.q('-nota');
    f.line(`tl.fromTo(${qNota}, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }, 1.35);`);
  }
  f.line('// — el bloque de fuente se dibuja al final, ya en plano de salida.');
  f.line(`tl.fromTo(${qFrule}, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power3.out" }, 1.7);`);
  f.line(`tl.fromTo(${qFuente}, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, 1.85);`);
  f.line(`tl.fromTo(${qMarca}, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, 1.95);`);
}

/* ========================================================================= *
 * 5. PAR — dos columnas comparadas. Sirve para "A contra B", "hacer contra
 *    no hacer", "deber del empleador contra deber del trabajador".
 *    La columna izquierda va en verde macizo (la que gana) y la derecha en
 *    contour sobre el crema (la que se descarta).
 * ========================================================================= */
export function par(f, { kicker, titulo, izq, der }) {
  const t = f.tokens;
  const colW = 812;
  const gap = 104;
  const colTop = 430;
  const colH = 470;

  rule(f, '-toprule', { left: PAD, top: 96, width: INNER, color: t.green });
  block(f, '-kicker', {
    left: PAD, top: 118, font: mono, size: R.label, weight: 500,
    ls: '0.18em', color: t.greenLite, transform: 'uppercase',
  });
  block(f, '-titulo', {
    left: PAD, top: 170, width: 1400, font: display, size: R.title,
    weight: 500, lh: 1.06, ls: '-0.01em', color: t.ink,
  });

  const cols = [
    { sfx: '-a', x: PAD, data: izq, solido: true },
    { sfx: '-b', x: PAD + colW + gap, data: der, solido: false },
  ];

  const partes = [
    f.box('-toprule', 'span', {}, '', 6),
    f.box('-kicker-w', 'div', {}, f.box('-kicker', 'span', {}, kicker, 8), 6),
    f.box('-titulo-w', 'div', {}, f.box('-titulo', 'h2', {}, titulo, 8), 6),
  ];

  for (const c of cols) {
    const fg = c.solido ? t.cream : t.ink;
    const sub = c.solido ? t.cream2 : t.greenDeep;
    // el rotulo va en crema sobre el verde macizo: el acento no tendria
    // contraste suficiente ahi.
    const lab = c.solido ? t.cream2 : t.accent;

    /* filete vertical de acento, pegado al borde izquierdo de la columna */
    rule(f, `-${c.sfx}-card`, { left: c.x, top: colTop, width: 4, height: colH, color: c.solido ? t.green : t.accent, origin: '50% 0%' });
    block(f, `-${c.sfx}-label`, {
      left: c.x + 40, top: colTop + 44, width: colW - 80, font: mono, size: R.micro,
      weight: 500, ls: '0.2em', color: lab, transform: 'uppercase',
    });
    block(f, `-${c.sfx}-head`, {
      left: c.x + 40, top: colTop + 90, width: colW - 80, font: display, size: 46,
      weight: 500, lh: 1.06, ls: '-0.01em', color: fg,
    });
    rule(f, `-${c.sfx}-rule`, { left: c.x + 40, top: colTop + 176, width: 110, color: c.solido ? t.cream : t.accent });
    block(f, `-${c.sfx}-body`, {
      left: c.x + 40, top: colTop + 214, width: colW - 80, font: display, size: 28,
      weight: 400, lh: 1.44, color: sub,
    });

    // el fondo de la columna que gana
    if (c.solido) {
      rule(f, `-${c.sfx}-bg`, {
        left: c.x, top: colTop - 28, width: colW, height: colH + 56, color: t.green,
      });
    }

    partes.push(f.box(`${c.sfx}-w`, 'div', {}, [
      c.solido ? f.box(`${c.sfx}-bg`, 'span', {}, '', 8) : '',
      f.box(`${c.sfx}-card`, 'span', {}, '', 8),
      f.box(`${c.sfx}-label`, 'span', {}, c.data.label, 8),
      f.box(`${c.sfx}-head`, 'h3', {}, c.data.head, 8),
      f.box(`${c.sfx}-rule`, 'span', {}, '', 8),
      f.box(`${c.sfx}-body`, 'p', {}, c.data.body, 8),
    ].join(''), 6));
  }

  capas(f, partes.join(''));

  const qTop = f.q('-toprule');
  const qKick = f.q('-kicker');
  const qTit = f.q('-titulo');
  f.line('');
  f.line(`tl.fromTo(${qTop}, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power3.out" }, 0.1);`);
  f.line(`tl.fromTo(${qKick}, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, 0.2);`);
  f.line(`tl.fromTo(${qTit}, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.45);`);
  f.line('');
  f.line('// — la columna que gana entra como bloque macizo; la que se descarta,');
  f.line('// en contour, despues, para que el contraste se lea.');

  /* Un solo recorrido sobre `cols`, que ya sabe que columna va solida. Una
     lista de motions aparte se desincronizo de la del markup y termino
     animando un id que no existe — justo lo que caza check-selectors. */
  cols.forEach((c, i) => {
    const at = 0.95 + i * 0.5;
    const card = f.q(`${c.sfx}-card`);
    const label = f.q(`${c.sfx}-label`);
    const head = f.q(`${c.sfx}-head`);
    const ruleS = f.q(`${c.sfx}-rule`);
    const body = f.q(`${c.sfx}-body`);

    if (c.solido) {
      const bg = f.q(`${c.sfx}-bg`);
      f.line(`tl.fromTo(${bg}, { opacity: 0, x: -28 }, { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }, ${at});`);
    }
    f.line(`tl.fromTo(${card}, { scaleY: 0 }, { scaleY: 1, duration: 0.5, ease: "power3.out" }, ${at + 0.05});`);
    f.line(`tl.fromTo(${label}, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, ${at + 0.16});`);
    f.line(`tl.fromTo(${head}, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }, ${at + 0.24});`);
    f.line(`tl.fromTo(${ruleS}, { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power3.out" }, ${at + 0.36});`);
    f.line(`tl.fromTo(${body}, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, ${at + 0.44});`);
  });
}

export const ARQUETIPOS = { gancho, stat, lista, par, cierre };
