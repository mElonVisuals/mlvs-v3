'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="glassmorphism rounded-lg p-8 max-w-md mx-auto border-white/10 bg-white/5 backdrop-blur-md">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Oops!
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-white">Something went wrong</h2>
          <p className="text-gray-300 mb-6">
            We encountered an unexpected error. Please try again.
          </p>
          <Button 
            onClick={reset}
            className="glassmorphism bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-white/20"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
