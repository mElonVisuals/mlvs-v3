'use client';

import { useState } from 'react';
import { Upload, Filter, Search, Download, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileCard } from '@/components/features/FileCard';
import { useApp } from '@/contexts/AppContext';

export default function FilesPage() {
  const { state } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', 'vehicle', 'clothing', 'enb', 'map', 'script', 'other'];
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Most Downloaded' },
    { value: 'liked', label: 'Most Liked' },
    { value: 'oldest', label: 'Oldest' },
  ];

  const filteredFiles = state.files.filter(file => {
    const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || file.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            File Library
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Browse and download community-created mods, maps, and resources
          </p>
        </div>
        <Button className="glassmorphism bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border border-white/20">
          <Upload className="mr-2 h-4 w-4" />
          Upload File
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="glassmorphism rounded-lg p-4 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="text-2xl font-bold text-purple-400">{state.files.length}</div>
          <div className="text-sm text-muted-foreground">Total Files</div>
        </div>
        <div className="glassmorphism rounded-lg p-4 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="text-2xl font-bold text-pink-400">
            {state.files.reduce((sum, file) => sum + file.downloadCount, 0).toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">Total Downloads</div>
        </div>
        <div className="glassmorphism rounded-lg p-4 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="text-2xl font-bold text-blue-400">
            {state.files.filter(file => file.virus_scanned).length}
          </div>
          <div className="text-sm text-muted-foreground">Verified Safe</div>
        </div>
        <div className="glassmorphism rounded-lg p-4 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="text-2xl font-bold text-green-400">
            {state.files.filter(file => file.access_level === 'public').length}
          </div>
          <div className="text-sm text-muted-foreground">Public Files</div>
        </div>
      </div>

      {/* Filters */}
      <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glassmorphism border-white/30 bg-white/10"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40 glassmorphism border-white/30 bg-white/10">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="glassmorphism border-white/20 bg-black/80 backdrop-blur-md">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="hover:bg-white/10">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 glassmorphism border-white/30 bg-white/10">
                <Download className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="glassmorphism border-white/20 bg-black/80 backdrop-blur-md">
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="hover:bg-white/10">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex border border-white/30 rounded-md glassmorphism bg-white/10">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-purple-600' : 'hover:bg-white/10'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-purple-600' : 'hover:bg-white/10'}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Files Grid */}
      <div className={viewMode === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'grid gap-4'}>
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => (
            <FileCard key={file.id} file={file} />
          ))
        ) : (
          <div className="glassmorphism rounded-lg p-12 text-center border border-white/20 bg-white/5 backdrop-blur-md col-span-full">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">No files found</h3>
            <p className="text-muted-foreground">
              {searchQuery || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Be the first to upload a file to this community!'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
