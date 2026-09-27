import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, normalize, extname } from 'node:path';

/**
 * Sirve los proyectos de hyperframes al visor web.
 *
 * Las composiciones viven en videos/<slug>/ porque son el proyecto editable
 * (con BRIEF.md, STORYBOARD.md, frame.md y los packets). Next.js solo publica
 * public/, asi que esta ruta los expone como archivos estaticos de solo
 * lectura. El player los carga en un iframe sandboxed.
 *
 * Regla dura: nada sale de videos/. Se resuelve la ruta y se verifica que el
 * resultado real siga dentro del directorio, asi una ruta con .. no puede
 * leer package.json ni nada de afuera.
 */

export const dynamic = 'force-dynamic';

const PROJECTS_DIR = join(process.cwd(), 'videos');

const TIPOS: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
};

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;

  const relativo = normalize(path.join('/')).replace(/^(\.\.[/\\])+/, '');
  const destino = join(PROJECTS_DIR, relativo);

  // Contencion: el archivo resuelto tiene que seguir dentro de videos/.
  if (!destino.startsWith(PROJECTS_DIR)) {
    return new Response('fuera de rango', { status: 403 });
  }
  if (!existsSync(destino) || !statSync(destino).isFile()) {
    return new Response('no encontrado', { status: 404 });
  }

  const ext = extname(destino).toLowerCase();
  const tipo = TIPOS[ext];
  if (!tipo) {
    return new Response('tipo no servido', { status: 415 });
  }

  const cuerpo = readFileSync(destino);

  return new Response(new Uint8Array(cuerpo), {
    headers: {
      'Content-Type': tipo,
      'Cache-Control': 'no-cache',
      // Las composiciones cargan gsap desde un CDN dentro de su propio HTML;
      // no hay script inline nuestro que activar.
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
