'use client';

import { TrendingUp, Users, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PostCard } from '@/components/features/PostCard';
import { FileCard } from '@/components/features/FileCard';
import { useApp } from '@/contexts/AppContext';

const stats = [
  {
    title: 'Total Posts',
    value: '1,234',
    change: '+12%',
    icon: FileText,
  },
  {
    title: 'Active Users',
    value: '890',
    change: '+8%',
    icon: Users,
  },
  {
    title: 'Files Shared',
    value: '5,678',
    change: '+23%',
    icon: Download,
  },
  {
    title: 'Monthly Growth',
    value: '15.2%',
    change: '+4%',
    icon: TrendingUp,
  },
];

export default function HomePage() {
  const { state } = useApp();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            mlvs.me
          </span>
        </h1>
        <p className="text-muted-foreground text-lg">
          The ultimate gaming community platform with beautiful glassmorphism design
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glassmorphism border-white/10 bg-white/5 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-400">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="space-y-6">
            {state.posts.slice(0, 2).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Files</h2>
          <div className="space-y-6">
            {state.files.slice(0, 2).map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
