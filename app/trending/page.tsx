'use client';

import { useState } from 'react';
import { TrendingUp, FlameIcon as Fire, Clock, Eye, Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PostCard } from '@/components/features/PostCard';
import { FileCard } from '@/components/features/FileCard';
import { useApp } from '@/contexts/AppContext';

export default function TrendingPage() {
  const { state } = useApp();
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month'>('today');
  const [selectedType, setSelectedType] = useState<'all' | 'posts' | 'files'>('all');

  const periods = [
    { id: 'today', label: 'Today', icon: Clock },
    { id: 'week', label: 'This Week', icon: TrendingUp },
    { id: 'month', label: 'This Month', icon: Fire },
  ];

  const types = [
    { id: 'all', label: 'All Content' },
    { id: 'posts', label: 'Posts Only' },
    { id: 'files', label: 'Files Only' },
  ];

  // Mock trending data - in real app this would come from API
  const trendingStats = [
    {
      title: 'Most Viewed Post',
      value: state.posts.reduce((max, post) => post.views > max.views ? post : max, state.posts[0]),
      icon: Eye,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
    {
      title: 'Most Liked Content',
      value: state.posts.reduce((max, post) => post.likes > max.likes ? post : max, state.posts[0]),
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
    },
    {
      title: 'Most Downloaded',
      value: state.files.reduce((max, file) => file.downloadCount > max.downloadCount ? file : max, state.files[0]),
      icon: Download,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
    },
    {
      title: 'Rising Star',
      value: state.posts[state.posts.length - 1], // Most recent as "rising"
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Trending Now
        </h1>
        <p className="text-muted-foreground text-lg mt-2">
          Discover what's hot in the community right now
        </p>
      </div>

      {/* Period Selection */}
      <div className="glassmorphism rounded-lg p-2 border border-white/20 bg-white/5 backdrop-blur-md">
        <div className="flex gap-2">
          {periods.map((period) => (
            <Button
              key={period.id}
              variant={selectedPeriod === period.id ? 'default' : 'ghost'}
              onClick={() => setSelectedPeriod(period.id as any)}
              className={`flex-1 ${
                selectedPeriod === period.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              <period.icon className="mr-2 h-4 w-4" />
              {period.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trendingStats.map((stat, index) => (
          <Card key={index} className="glassmorphism border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                  <div className="font-semibold truncate">{stat.value.title}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {'views' in stat.value ? `${stat.value.views} views` : 
                   'downloadCount' in stat.value ? `${stat.value.downloadCount} downloads` :
                   `${stat.value.likes} likes`}
                </span>
                <Badge className="glassmorphism border-white/20">
                  <Fire className="mr-1 h-3 w-3" />
                  Hot
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Type Filter */}
      <div className="glassmorphism rounded-lg p-2 border border-white/20 bg-white/5 backdrop-blur-md">
        <div className="flex gap-2">
          {types.map((type) => (
            <Button
              key={type.id}
              variant={selectedType === type.id ? 'default' : 'ghost'}
              onClick={() => setSelectedType(type.id as any)}
              className={`flex-1 ${
                selectedType === type.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Content */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Fire className="h-5 w-5 text-orange-400" />
          <h2 className="text-2xl font-bold">Trending Content</h2>
        </div>

        <div className="grid gap-6">
          {(selectedType === 'all' || selectedType === 'posts') && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">🔥 Hot Posts</h3>
              {state.posts
                .sort((a, b) => (b.likes + b.views) - (a.likes + a.views))
                .slice(0, 3)
                .map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          )}

          {(selectedType === 'all' || selectedType === 'files') && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-pink-400">📁 Popular Files</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {state.files
                  .sort((a, b) => (b.downloadCount + b.likes) - (a.downloadCount + a.likes))
                  .slice(0, 3)
                  .map((file) => (
                    <FileCard key={file.id} file={file} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
        <h3 className="text-xl font-semibold mb-4">Trending Topics</h3>
        <div className="flex flex-wrap gap-2">
          {['gaming', 'mods', 'vehicles', 'graphics', 'tutorial', 'showcase', 'community', 'enb'].map((topic) => (
            <Badge key={topic} className="glassmorphism border-white/20 hover:bg-white/20 cursor-pointer transition-all">
              #{topic}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
