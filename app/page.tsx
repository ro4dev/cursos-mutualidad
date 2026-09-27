import Link from 'next/link';
import { getCatalog, getCursosPorArea } from '@/lib/catalog';
import type { Curso } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default function Home() {
  const cat = getCatalog();
  const porArea = getCursosPorArea();
  const conVideo = cat.cursos.filter((c) => c.video.disponible).length;

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <h1>Cursos de capacitacion para mutualidades</h1>
          <p>
            Cada curso tiene su carpeta con la investigacion, los hechos verificados contra la
            fuente oficial y el storyboard del video. El video se compone con hyperframes y se
            reproduce aqui mismo; la descarga en MP4 aparece cuando el archivo ya fue renderizado.
          </p>
          <div className="hero-facts">
            <span className="pill">{cat.total} cursos</span>
            <span className="pill">{cat.areas.length} areas</span>
            <span className="pill on">{conVideo} con MP4</span>
            <span className="pill">video mudo, subtitulado</span>
            <span className="pill">1920x1080</span>
          </div>
        </div>
      </section>

      {cat.areas.map((area) => {
        const lista = porArea.get(area) ?? [];
        return (
          <section className="wrap area" key={area}>
            <div className="area-name">
              {area}
              <span className="area-count">{lista.length}</span>
            </div>
            <div className="grid">
              {lista.map((c) => (
                <CursoCard key={c.slug} curso={c} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

function CursoCard({ curso }: { curso: Curso }) {
  return (
    <Link href={`/cursos/${curso.slug}`} className="card">
      <h3>{curso.titulo}</h3>
      <p>{curso.mensaje}</p>
      <div className="card-foot">
        <span className={`tag ${curso.video.disponible ? 'ok' : 'research'}`}>
          {curso.video.disponible ? 'MP4' : 'en curso'}
        </span>
        <span>{curso.duracion}s</span>
        <span>{curso.angle}</span>
      </div>
    </Link>
  );
}
