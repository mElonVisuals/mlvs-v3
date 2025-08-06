'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { AuthModal } from '@/components/modals/AuthModal';
import { NotificationCenter } from '@/components/modals/NotificationCenter';
import { useApp } from '@/contexts/AppContext';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { state } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-6">
          {children}
        </main>
      </div>
      
      {/* Modals */}
      {state.activeModal === 'auth' && <AuthModal />}
      {state.activeModal === 'notifications' && <NotificationCenter />}
    </div>
  );
}
