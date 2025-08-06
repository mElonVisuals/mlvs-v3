'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types';
import { useApp } from '@/contexts/AppContext';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const { dispatch } = useApp();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    dispatch({ type: 'LIKE_POST', payload: post.id });
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/posts/${post.id}`);
  };

  return (
    <Card className="glassmorphism border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
              <AvatarFallback>{post.author.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author.username}</p>
              <p className="text-sm text-muted-foreground">
                {post.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="glassmorphism">
            {post.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {post.thumbnail && (
          <img
            src={post.thumbnail || "/placeholder.svg"}
            alt={post.title}
            className="h-48 w-full rounded-lg object-cover"
          />
        )}

        <div>
          <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="glassmorphism border-white/20">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`glassmorphism hover:bg-white/10 ${
                liked ? 'text-red-500' : ''
              }`}
            >
              <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              {post.likes + (liked ? 1 : 0)}
            </Button>

            <Button variant="ghost" size="sm" className="glassmorphism hover:bg-white/10">
              <MessageCircle className="mr-2 h-4 w-4" />
              {post.comments.length}
            </Button>

            <Button variant="ghost" size="sm" className="glassmorphism hover:bg-white/10">
              <Eye className="mr-2 h-4 w-4" />
              {post.views}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className={`glassmorphism hover:bg-white/10 ${
                bookmarked ? 'text-yellow-500' : ''
              }`}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="glassmorphism hover:bg-white/10"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
