import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { getCatalog } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Cursos de mutualidad',
  description:
    'Catalogo de cursos de capacitacion en espanol de Chile, compuestos como video con hyperframes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <body>
        <header className="topbar">
          <div className="wrap topbar-inner">
            <Link href="/" className="brand">
              <b>cursos</b> / mutualidad
            </Link>
            <div className="topbar-meta">
              <span>es-CL</span>
              <span>1920x1080</span>
            </div>
          </div>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteFooter() {
  const cat = getCatalog();
  return (
    <footer className="wrap">
      <span>
        {cat.total} cursos &middot; {cat.areas.length} areas &middot; catalogo del {cat.generado}
      </span>
      <span>Material informativo. No constituye asesoria legal.</span>
    </footer>
  );
}
