/**
 * Tipos del catalogo de cursos.
 *
 * El catalogo se genera con scripts/build-catalog.mjs desde las carpetas de
 * courses/, asi que estos tipos son el contrato entre ese script y el visor.
 */

export type Curso = {
  slug: string;
  titulo: string;
  area: string;
  mensaje: string;
  duracion: number;
  aspect: string;
  language: string;
  angle: string;
  narration: boolean;
  status: 'research' | 'storyboard' | 'composed' | 'rendered';
  fuente: string;
  video: {
    /** Ruta del proyecto de hyperframes, null si no esta ensamblado. */
    composicion: string | null;
    /** Cuantos frames se encontraron montados en el index.html. */
    framesMontadas: number;
    /** Ruta publica del MP4, solo valida si `disponible`. */
    mp4: string;
    /** El MP4 fue renderizado y existe en public/videos/. */
    disponible: boolean;
    /** Bytes, null si no hay MP4. */
    tamano: number | null;
  };
};

export type Catalog = {
  generado: string;
  total: number;
  areas: string[];
  cursos: Curso[];
};
