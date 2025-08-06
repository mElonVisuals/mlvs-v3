'use client';

import { useState } from 'react';
import { Search, Bell, Moon, Sun, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/contexts/AppContext';
import { useTheme } from '@/components/providers/ThemeProvider';

export function Header() {
  const { state, dispatch } = useApp();
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleAuthClick = () => {
    dispatch({ type: 'SET_MODAL', payload: 'auth' });
  };

  const handleNotificationClick = () => {
    dispatch({ type: 'SET_MODAL', payload: 'notifications' });
  };

  const handleProfileClick = () => {
    dispatch({ type: 'SET_MODAL', payload: 'profile' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-header">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-xl font-bold text-transparent">
              mlvs.me
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search posts, files, users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {state.user ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNotificationClick}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                {state.notifications.some(n => !n.read) && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleProfileClick}
              >
                <User className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Button onClick={handleAuthClick}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
