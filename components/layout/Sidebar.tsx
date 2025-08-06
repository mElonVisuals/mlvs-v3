'use client';

import { Home, FileText, Upload, Users, Settings, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Posts', href: '/posts', icon: FileText },
  { name: 'Files', href: '/files', icon: Upload },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Trending', href: '/trending', icon: TrendingUp },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const stats = [
  { label: 'Total Posts', value: '1,234' },
  { label: 'Files Shared', value: '5,678' },
  { label: 'Active Users', value: '890' },
  { label: 'Downloads', value: '12.3K' },
];

export function Sidebar() {
  const { state } = useApp();

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-white/10 glassmorphism transition-transform duration-200 ease-in-out',
        state.sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0'
      )}
    >
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start glassmorphism hover:bg-white/10"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Button>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
            Platform Stats
          </h3>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glassmorphism rounded-lg p-3">
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-lg font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
