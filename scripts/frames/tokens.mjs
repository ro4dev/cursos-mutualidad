/**
 * tokens.mjs — paletas y rampas tipograficas.
 *
 * El piloto usa `editorial-forest`. Las 19 carpetas comparten la misma
 * familia visual (es un catalogo de una sola mutualidad: el video se tiene
 * que ver como parte de la misma serie), pero cada area cambia de acento
 * para que el espectador distinga el tema de un vistazo.
 *
 * Regla: los ids de composicion empiezan con digito, y por eso ningun
 * selector de clase puede empezar con digito. Las clases que needs el
 * layout se prefijan con `r` (de "rule") — ver fix-css-selectors.mjs.
 */

import { W, H } from './emit.mjs';

/* Paleta base: la del piloto, ver frame.md de ley-karin-plazos. */
const BASE = {
  ink: '#1a1a17',
  cream: '#efe7d4',
  cream2: '#e6dcc4',
  green: '#2e4a2a',
  greenDeep: '#243a21',
  greenLite: '#3a5a36',
  pink: '#e89cb1',
  pinkDeep: '#d27e96',
};

/**
 * Un acento por area. El verde se queda como estructura en todas; lo que
 * cambia es el color del filete de enfasis y del numero gigante.
 */
const ACENTOS = {
  'Legal / Derechos': { accent: '#b8562f', accentDeep: '#8f3f20' }, // terracota
  'Legal / Acoso': { accent: '#b8562f', accentDeep: '#8f3f20' },
  'Derecho Laboral': { accent: '#3f6b8a', accentDeep: '#2b4d66' }, // azul pizarra
  Seguridad: { accent: '#c99a2e', accentDeep: '#a37a1c' }, // ambar
  Bienestar: { accent: '#3f7d6a', accentDeep: '#2b5c4d' }, // verde agua
  Cultura: { accent: '#8a5a9e', accentDeep: '#66406f' }, // ciruela
  Habilidades: { accent: '#2f6f8a', accentDeep: '#1d5066' }, // teal
  Liderazgo: { accent: '#a8522f', accentDeep: '#803a1f' }, // terracota oscura
  Onboarding: { accent: '#4a7a4e', accentDeep: '#345a37' }, // verde oliva
};

export function tokens(area) {
  const a = ACENTOS[area] || { accent: BASE.pink, accentDeep: BASE.pinkDeep };
  return {
    ...BASE,
    accent: a.accent,
    accentDeep: a.accentDeep,
    display: 'Source Serif 4',
    mono: 'JetBrains Mono',
  };
}

/**
 * Rampa de sizes en px sobre un canvas de 1920x1080. Todo entero, para que
 * el layout aritmetico no derive. `cqw` se calcula en emit.mjs.
 */
export const R = {
  hero: 148, // titular de gancho
  heroSm: 96,
  stat: 300, // numeral gigante
  title: 56, // titulo de tarjeta
  body: 30, // cuerpo
  lead: 38, // entradilla
  label: 22, // rotulo mono
  micro: 17, // microcopy
  numeral: 26, // numero de estacion
};

export const CANVAS = { W, H, PAD: 96, INNER: W - 2 * 96 };
