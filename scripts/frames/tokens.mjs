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
  'Legal / Derechos': { accent: '#9a4827', accentDeep: '#7a361b' }, // terracota
  'Legal / Acoso': { accent: '#9a4827', accentDeep: '#7a361b' },
  'Derecho Laboral': { accent: '#3b6481', accentDeep: '#2b4d66' }, // azul pizarra
  Seguridad: { accent: '#785c1b', accentDeep: '#5d4610' }, // ambar
  Bienestar: { accent: '#356959', accentDeep: '#265244' }, // verde agua
  Cultura: { accent: '#794f8b', accentDeep: '#623d6a' }, // ciruela
  Habilidades: { accent: '#2b667f', accentDeep: '#1d5066' }, // teal
  Liderazgo: { accent: '#96492a', accentDeep: '#7a371e' }, // terracota oscura
  Onboarding: { accent: '#3f6943', accentDeep: '#2f5232' }, // verde oliva
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
  heroMd: 118, // titular de gancho cuando la frase es larga
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
