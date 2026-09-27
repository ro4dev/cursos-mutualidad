'use client';

import { useEffect, useState } from 'react';

type Modo = 'mp4' | 'composicion' | 'pendiente';

type Props = {
  slug: string;
  mp4: string;
  /** El MP4 fue renderizado y existe en public/videos/. */
  hayMp4: boolean;
  /** Ruta servida por /composiciones/<slug>/, null si no esta ensamblada. */
  composicion: string | null;
  titulo: string;
};

/**
 * Decide que se muestra, en este orden:
 *
 *  1. MP4 renderizado          — es lo que la gente viene a ver.
 *  2. Composicion Ensamblada  — la composicion viva de hyperframes en un
 *                                 sandboxed iframe via <hyperframes-player>.
 *  3. Estado del curso        — que falta, y el comando exacto para hacerlo.
 *
 * Nunca se muestra un reproductor vacio: si no hay nada que reproducir, se
 * dice que falta y como se produce.
 */
export default function Reproductor({ slug, mp4, hayMp4, composicion, titulo }: Props) {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    let vivo = true;
    if (composicion) {
      import('@hyperframes/player')
        .then(() => vivo && setListo(true))
        .catch(() => vivo && setListo(false));
    }
    return () => {
      vivo = false;
    };
  }, [composicion]);

  const modo: Modo = hayMp4 ? 'mp4' : composicion && listo ? 'composicion' : 'pendiente';

  if (modo === 'mp4') {
    return (
      <div className="stage">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={mp4} controls playsInline preload="metadata" style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
    );
  }

  if (modo === 'composicion' && composicion) {
    return (
      <div className="stage">
        {/* El web component se registra en el useEffect de arriba. */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <hyperframes-player
          src={composicion}
          controls
          loop
          muted
          audio-locked=""
          width={1920}
          height={1080}
          title={titulo}
        />
      </div>
    );
  }

  return <Estado slug={slug} />;
}

function Estado({ slug }: { slug: string }) {
  return (
    <div className="stage">
      <div className="stage-empty">
        Todavia no hay video para este curso.
        <br />
        <br />
        <code>npm run video:build -- {slug}</code>
        <br />
        <code>npm run video:render -- {slug}</code>
      </div>
    </div>
  );
}
