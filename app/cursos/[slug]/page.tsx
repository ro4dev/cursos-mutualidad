import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCurso, getCatalog } from '@/lib/catalog';
import Reproductor from '@/components/Reproductor';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return getCatalog().cursos.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const curso = getCurso(slug);
  if (!curso) notFound();

  const tamano = curso.video.tamano ? formatoBytes(curso.video.tamano) : null;

  return (
    <main className="wrap detail">
      <Link href="/" className="back">
        &larr; Catalogo
      </Link>

      <h1>{curso.titulo}</h1>
      <p className="detail-lede">{curso.mensaje}</p>

      <Reproductor
        slug={curso.slug}
        mp4={curso.video.mp4}
        hayMp4={curso.video.disponible}
        composicion={curso.video.composicion}
        titulo={curso.titulo}
      />

      <div className="actions">
        {curso.video.disponible ? (
          <a className="btn primary" href={curso.video.mp4} download>
            Descargar MP4{tamano ? ` (${tamano})` : ''}
          </a>
        ) : (
          <span className="btn" aria-disabled="true">
            MP4 no renderizado
          </span>
        )}
        <Link className="btn" href={`/cursos/${curso.slug}/investigacion`}>
          Ver investigacion
        </Link>
      </div>

      <dl className="specs">
        <div className="spec">
          <dt>Area</dt>
          <dd>{curso.area}</dd>
        </div>
        <div className="spec">
          <dt>Duracion</dt>
          <dd>{curso.duracion}s</dd>
        </div>
        <div className="spec">
          <dt>Formato</dt>
          <dd>{curso.aspect}</dd>
        </div>
        <div className="spec">
          <dt>Angulo</dt>
          <dd>{curso.angle}</dd>
        </div>
        <div className="spec">
          <dt>Idioma</dt>
          <dd>{curso.language}</dd>
        </div>
        <div className="spec">
          <dt>Estado</dt>
          <dd>{estadoLabel(curso.status)}</dd>
        </div>
      </dl>

      <p className="fuente">
        <strong>Fuente:</strong> {curso.fuente}
      </p>

      <div className="descargo">
        <b>Descargo.</b> Material informativo de capacitacion. No constituye asesoria
        legal ni reemplaza la lectura del texto legal vigente. Cada curso lista
        explicitamente los datos que no se pudieron verificar contra la fuente
        oficial, y esos datos no aparecen en el video.
      </div>
    </main>
  );
}

function estadoLabel(s: string) {
  switch (s) {
    case 'rendered':
      return 'Renderizado';
    case 'composed':
      return 'Componido';
    default:
      return 'En investigacion';
  }
}

/**
 * Los videos mudos pesan poco: un clip de 75s suele estar en el orden de
 * cientos de KB, y "0.0 MB" no le dice nada a nadie.
 */
function formatoBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
