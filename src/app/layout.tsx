import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cotação Inteligente | IA que recomenda, não apenas consulta',
  description:
    'Plataforma de cotação assistida por IA. Ao invés de entregar dados para você interpretar, entregamos a resposta.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
