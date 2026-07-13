import type { Metadata } from 'next';
import { Space_Grotesk, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--space-grotesk',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--newsreader',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--plex-mono',
  display: 'swap',
});

const siteUrl = 'https://abhishekkumar.dev'; // EDIT ME: swap for your real deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abhishek Kumar — AI Product Builder',
    template: '%s — Abhishek Kumar',
  },
  description:
    'AI product builder based in Delhi. Recent work: NyayaMitra, a RAG-based legal aid agent for Indian citizens, and a Hindi voice AI mobile app built on the Sarvam AI pipeline.',
  keywords: [
    'Abhishek Kumar',
    'AI product builder',
    'RAG',
    'LangChain',
    'Sarvam AI',
    'Gemma',
    'Delhi',
    'hackathon',
  ],
  authors: [{ name: 'Abhishek Kumar' }],
  openGraph: {
    title: 'Abhishek Kumar — AI Product Builder',
    description:
      'AI product builder based in Delhi. Recent work: a RAG-based legal aid agent and a Hindi voice AI mobile app.',
    url: siteUrl,
    siteName: 'Abhishek Kumar',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Kumar — AI Product Builder',
    description:
      'AI product builder based in Delhi. Recent work: a RAG-based legal aid agent and a Hindi voice AI mobile app.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body className="bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
