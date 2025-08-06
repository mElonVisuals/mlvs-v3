import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/contexts/AppContext';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ClientLayout } from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mlvs.me - Gaming Community Platform',
  description: 'The ultimate gaming community platform with beautiful glassmorphism design',
  keywords: 'gaming, community, mods, files, sharing, glassmorphism',
  authors: [{ name: 'mlvs.me Team' }],
  openGraph: {
    title: 'mlvs.me - Gaming Community Platform',
    description: 'The ultimate gaming community platform with beautiful glassmorphism design',
    url: 'https://mlvs.me',
    siteName: 'mlvs.me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mlvs.me - Gaming Community Platform',
    description: 'The ultimate gaming community platform with beautiful glassmorphism design',
  },
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="mlvs-theme">
          <AppProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
