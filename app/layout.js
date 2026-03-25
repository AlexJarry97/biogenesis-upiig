import './globals.css';

export const metadata = {
  title: 'Biogénesis 2026 · UPIIG Impact Lab',
  description: '5° Congreso de Emprendimiento en Biotecnología · 40% OFF para comunidad UPIIG · 7-9 Mayo, Guadalajara',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
