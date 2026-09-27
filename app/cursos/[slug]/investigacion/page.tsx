import { notFound } from 'next/navigation';
import Link from 'next/link';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { getCurso } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

/**
 * Vista de la investigacion de un curso.
 *
 * Se lee el INVESTIGACION.md de la carpeta en tiempo de render. Se podria
 * compilar en build, pero la investigacion se corrige seguido y no vale la
 * pena forzar un rebuild por cada palabra.
 */
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const curso = getCurso(slug);
  if (!curso) notFound();

  const dir = join(process.cwd(), 'courses', slug);
  const investigacion = readDoc(join(dir, 'INVESTIGACION.md'));
  const brief = readDoc(join(dir, 'BRIEF.md'));
  const storyboard = readDoc(join(dir, 'STORYBOARD.md'));
  const adjuntos = existsSync(dir) ? readdirSync(dir).sort() : [];

  return (
    <main className="wrap detail">
      <Link href={`/cursos/${slug}`} className="back">
        &larr; {curso.titulo}
      </Link>

      <h1>Investigacion y documentos</h1>
      <p className="detail-lede">
        Carpeta <code>courses/{slug}/</code>. Estos archivos son la fuente de verdad del
        copy: lo que no esta aqui no se dice en pantalla.
      </p>

      <ul className="grid" style={{ marginBottom: 34 }}>
        {adjuntos.map((f) => (
          <li className="card" key={f}>
            <h3>{f}</h3>
            <p>{DESCRIPCION[f] ?? 'Archivo del curso.'}</p>
            <div className="card-foot">
              <span>{statSync(join(dir, f)).isDirectory() ? 'carpeta' : 'documento'}</span>
            </div>
          </li>
        ))}
      </ul>

      <Doc titulo="INVESTIGACION.md" cuerpo={investigacion} />
      <Doc titulo="BRIEF.md" cuerpo={brief} />
      <Doc titulo="STORYBOARD.md" cuerpo={storyboard} />
    </main>
  );
}

const DESCRIPCION: Record<string, string> = {
  'BRIEF.md': 'Contrato de produccion: mensaje, angulo, duracion y que datos estan prohibidos.',
  'INVESTIGACION.md': 'Hechos verificados contra la fuente oficial, y lo que no se pudo verificar.',
  'STORYBOARD.md': 'Estructura de frames del video, con el reparto del tiempo.',
  'index.json': 'Metadata que lee el catalogo del visor.',
};

function readDoc(path: string): string {
  if (!existsSync(path)) return '_Archivo no encontrado._';
  return readFileSync(path, 'utf8');
}

function Doc({ titulo, cuerpo }: { titulo: string; cuerpo: string }) {
  return (
    <section style={{ marginBottom: 46 }}>
      <h2
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 12,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--fg-faint)',
          margin: '0 0 14px',
        }}
      >
        {titulo}
      </h2>
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          background: 'var(--bg-2)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          padding: 20,
          fontFamily: 'var(--mono)',
          fontSize: 13,
          lineHeight: 1.65,
          color: 'var(--fg-dim)',
          margin: 0,
          overflowX: 'auto',
        }}
      >
        {cuerpo}
      </pre>
    </section>
  );
}
