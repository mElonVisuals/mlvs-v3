'use client';

import { useState } from 'react';
import { Download, Heart, Shield, Lock, Globe, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/types';

interface FileCardProps {
  file: FileUpload;
}

export function FileCard({ file }: FileCardProps) {
  const [liked, setLiked] = useState(false);

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getAccessIcon = () => {
    switch (file.access_level) {
      case 'public':
        return <Globe className="h-4 w-4" />;
      case 'members':
        return <Lock className="h-4 w-4" />;
      case 'premium':
        return <Shield className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleDownload = () => {
    console.log(`Downloading ${file.filename}`);
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={file.author.avatar || "/placeholder.svg"} />
              <AvatarFallback>{file.author.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{file.author.username}</p>
              <p className="text-sm text-muted-foreground">
                {file.uploadDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{file.category}</Badge>
            {file.virus_scanned && (
              <Badge variant="outline" className="border-green-500/50 text-green-600">
                <Shield className="mr-1 h-3 w-3" />
                Safe
              </Badge>
            )}
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {file.thumbnail && (
          <img
            src={file.thumbnail || "/placeholder.svg"}
            alt={file.title}
            className="h-32 w-full rounded-lg object-cover"
          />
        )}

        <div>
          <h3 className="mb-2 text-lg font-bold">{file.title}</h3>
          <p className="text-sm text-muted-foreground">{file.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{formatFileSize(file.size)}</span>
          <div className="flex items-center gap-1">
            {getAccessIcon()}
            <span className="capitalize">{file.access_level}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {file.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={liked ? 'text-red-500' : ''}
            >
              <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              {file.likes + (liked ? 1 : 0)}
            </Button>

            <span className="text-sm text-muted-foreground">
              {file.downloadCount} downloads
            </span>
          </div>

          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
