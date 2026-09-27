import type { DetailedHTMLProps, HTMLAttributes } from 'react';

/**
 * El paquete @hyperframes/player registra un web component. TypeScript no lo
 * conoce porque no es JSX Intrinsic, asi que se declara aca.
 *
 * Los atributos van en kebab-case porque HTML los normaliza a minusculas:
 * React pasa `audioLocked` a `audiLocked` si el elemento no esta definido, y
 * el atributo nunca llega al player.
 */
type HyperframesPlayerProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  'audio-src'?: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  muted?: boolean;
  'audio-locked'?: string;
  poster?: string;
  'playback-rate'?: number;
  autoplay?: boolean;
  loop?: boolean;
  'shader-capture-scale'?: number;
  'shader-loading'?: string;
  'assets-loading-ui'?: string;
  'low-power-idle'?: boolean;
  'disable-click-to-play'?: boolean;
  title?: string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'hyperframes-player': HyperframesPlayerProps;
    }
  }
}

export {};
