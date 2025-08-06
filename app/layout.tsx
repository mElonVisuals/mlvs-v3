import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/contexts/AppContext';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { AuthModal } from '@/components/modals/AuthModal';
import { NotificationCenter } from '@/components/modals/NotificationCenter';
import { useApp } from '@/contexts/AppContext';

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

function ModalManager() {
  const { state } = useApp();

  return (
    <>
      {state.activeModal === 'auth' && <AuthModal />}
      {state.activeModal === 'notifications' && <NotificationCenter />}
    </>
  );
}

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
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <Header />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 md:ml-64 p-6">
                  {children}
                </main>
              </div>
              <ModalManager />
            </div>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
