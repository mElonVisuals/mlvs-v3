import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <span className="text-lg font-semibold">Loading mlvs.me...</span>
        </CardContent>
      </Card>
    </div>
  );
}
