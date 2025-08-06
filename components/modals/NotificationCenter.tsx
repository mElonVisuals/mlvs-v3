'use client';

import { X, Bell, Heart, MessageCircle, UserPlus, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useApp } from '@/contexts/AppContext';

export function NotificationCenter() {
  const { state, dispatch } = useApp();

  const closeModal = () => {
    dispatch({ type: 'SET_MODAL', payload: null });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="h-4 w-4 text-red-500" />;
      case 'comment':
        return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case 'follow':
        return <UserPlus className="h-4 w-4 text-green-500" />;
      case 'upload':
        return <Upload className="h-4 w-4 text-purple-500" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-16 pr-4">
      <div className="w-full max-w-sm glassmorphism border-white/20 bg-white/10 backdrop-blur-md rounded-lg">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={closeModal}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="h-96">
          <div className="p-2">
            {state.notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No notifications yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {state.notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`glassmorphism rounded-lg p-3 transition-all hover:bg-white/10 ${
                      !notification.read ? 'border-l-4 border-l-purple-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.createdAt.toLocaleString()}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>

        {state.notifications.length > 0 && (
          <div className="p-4 border-t border-white/10">
            <Button
              variant="outline"
              size="sm"
              className="w-full glassmorphism border-white/20 hover:bg-white/10"
            >
              Mark all as read
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
