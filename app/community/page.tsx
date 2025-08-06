'use client';

import { useState } from 'react';
import { Users, Crown, Star, Calendar, Search, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';
import { sampleUsers } from '@/data/sampleData';

export default function CommunityPage() {
  const { state } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'members' | 'leaderboard' | 'activity'>('members');

  const filteredUsers = sampleUsers.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.bio?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="h-4 w-4 text-yellow-500" />;
      case 'creator':
        return <Star className="h-4 w-4 text-purple-500" />;
      default:
        return <Users className="h-4 w-4 text-blue-500" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'creator':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const tabs = [
    { id: 'members', label: 'Members', icon: Users },
    { id: 'leaderboard', label: 'Leaderboard', icon: Crown },
    { id: 'activity', label: 'Recent Activity', icon: Calendar },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Community
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Connect with fellow gamers, creators, and community members
          </p>
        </div>
        <Button className="glassmorphism bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border border-white/20">
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Friends
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold">{sampleUsers.length}</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
          </div>
        </div>
        
        <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/20">
              <div className="h-6 w-6 rounded-full bg-green-400"></div>
            </div>
            <div>
              <div className="text-2xl font-bold">127</div>
              <div className="text-sm text-muted-foreground">Online Now</div>
            </div>
          </div>
        </div>

        <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Star className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {sampleUsers.filter(u => u.role === 'creator').length}
              </div>
              <div className="text-sm text-muted-foreground">Creators</div>
            </div>
          </div>
        </div>

        <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <Crown className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {sampleUsers.filter(u => u.role === 'admin').length}
              </div>
              <div className="text-sm text-muted-foreground">Admins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="glassmorphism rounded-lg p-2 border border-white/20 bg-white/5 backdrop-blur-md">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={selectedTab === tab.id ? 'default' : 'ghost'}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex-1 ${
                selectedTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'hover:bg-white/10'
              }`}
            >
              <tab.icon className="mr-2 h-4 w-4" />
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Search */}
      {selectedTab === 'members' && (
        <div className="glassmorphism rounded-lg p-4 border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glassmorphism border-white/30 bg-white/10"
            />
          </div>
        </div>
      )}

      {/* Content */}
      {selectedTab === 'members' && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="glassmorphism border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{user.username}</h3>
                      {getRoleIcon(user.role)}
                    </div>
                    <Badge className={`text-xs ${getRoleBadgeColor(user.role)}`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {user.bio && (
                  <p className="text-sm text-muted-foreground">{user.bio}</p>
                )}
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="font-medium">{user.reputation}</div>
                    <div className="text-muted-foreground">Reputation</div>
                  </div>
                  <div>
                    <div className="font-medium">{user.followers}</div>
                    <div className="text-muted-foreground">Followers</div>
                  </div>
                  <div>
                    <div className="font-medium">{user.following}</div>
                    <div className="text-muted-foreground">Following</div>
                  </div>
                </div>
                <Button className="w-full glassmorphism bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'leaderboard' && (
        <div className="glassmorphism rounded-lg border border-white/20 bg-white/5 backdrop-blur-md">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
            <div className="space-y-4">
              {sampleUsers
                .sort((a, b) => b.reputation - a.reputation)
                .map((user, index) => (
                  <div key={user.id} className="flex items-center gap-4 p-4 rounded-lg glassmorphism bg-white/5">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                      index === 0 ? 'bg-yellow-500 text-black' :
                      index === 1 ? 'bg-gray-400 text-black' :
                      index === 2 ? 'bg-amber-600 text-black' :
                      'bg-gray-600 text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{user.username}</span>
                        {getRoleIcon(user.role)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user.reputation} reputation points
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'activity' && (
        <div className="glassmorphism rounded-lg p-6 border border-white/20 bg-white/5 backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-4">Recent Community Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg glassmorphism bg-white/5">
              <div className="p-2 rounded-lg bg-green-500/20">
                <UserPlus className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <div className="font-medium">New member joined</div>
                <div className="text-sm text-muted-foreground">member_user joined the community</div>
              </div>
              <div className="text-sm text-muted-foreground ml-auto">2 hours ago</div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg glassmorphism bg-white/5">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Star className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <div className="font-medium">New file uploaded</div>
                <div className="text-sm text-muted-foreground">creator_dev uploaded "Supercar Pack v2.0"</div>
              </div>
              <div className="text-sm text-muted-foreground ml-auto">4 hours ago</div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg glassmorphism bg-white/5">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Users className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <div className="font-medium">New post created</div>
                <div className="text-sm text-muted-foreground">admin posted "Welcome to mlvs.me"</div>
              </div>
              <div className="text-sm text-muted-foreground ml-auto">6 hours ago</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
