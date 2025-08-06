'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Upload, Users, Settings, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  { label: 'Posts', value: '1.2K' },
  { label: 'Files', value: '5.6K' },
  { label: 'Users', value: '890' },
  { label: 'Downloads', value: '12K' },
];

export function Sidebar() {
  const { state } = useApp();
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r bg-background transition-transform duration-200 ease-in-out',
        state.sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0'
      )}
    >
      <div className="flex h-full flex-col gap-4 p-4">
        <nav className="flex-1 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Platform Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
