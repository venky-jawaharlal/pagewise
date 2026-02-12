import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c8aeb',
};

export const metadata: Metadata = {
  title: 'PageWise — Productivity Book Summaries',
  description:
    'Discover key insights from 500+ of the world\'s best productivity, self-improvement, and business books — distilled into powerful, actionable summaries.',
  keywords: [
    'book summaries',
    'productivity books',
    'self-improvement',
    'business books',
    'book reviews',
    'key takeaways',
    'atomic habits',
    'deep work',
  ],
  authors: [{ name: 'PageWise' }],
  metadataBase: new URL('https://pagewise.dev'),
  openGraph: {
    title: 'PageWise — Productivity Book Summaries',
    description:
      'Discover key insights from 500+ of the world\'s best productivity books.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PageWise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PageWise — Productivity Book Summaries',
    description:
      'Discover key insights from 500+ of the world\'s best productivity books.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font & image CDNs for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://covers.openlibrary.org" />
        {/* Font loaded with display=swap for non-blocking render */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* DNS prefetch for image CDN */}
        <link rel="dns-prefetch" href="https://covers.openlibrary.org" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
