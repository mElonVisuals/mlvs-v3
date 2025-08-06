import { User, BlogPost, FileUpload, Notification } from '@/types';

export const sampleUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@mlvs.me',
    role: 'admin',
    avatar: '/placeholder.svg?height=40&width=40',
    joinDate: new Date('2023-01-01'),
    reputation: 1000,
    bio: 'Platform administrator and community manager',
    followers: 150,
    following: 50,
  },
  {
    id: '2',
    username: 'creator_dev',
    email: 'creator@mlvs.me',
    role: 'creator',
    avatar: '/placeholder.svg?height=40&width=40',
    joinDate: new Date('2023-02-15'),
    reputation: 750,
    bio: 'Content creator and mod developer',
    followers: 89,
    following: 32,
  },
  {
    id: '3',
    username: 'member_user',
    email: 'member@mlvs.me',
    role: 'member',
    avatar: '/placeholder.svg?height=40&width=40',
    joinDate: new Date('2023-06-10'),
    reputation: 250,
    bio: 'Gaming enthusiast and community member',
    followers: 25,
    following: 45,
  },
];

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to mlvs.me - The Future of Gaming Community',
    content: `# Welcome to mlvs.me

We're excited to introduce you to the next generation of gaming community platforms. Built with cutting-edge technology and designed with gamers in mind.

## What Makes Us Different

- **Glassmorphism Design**: Beautiful, modern interface that's easy on the eyes
- **Community-First**: Built by gamers, for gamers
- **File Sharing**: Share your mods, maps, and creations easily
- **Real-time Interactions**: Connect with fellow gamers instantly

Join us on this journey as we build the ultimate gaming community platform!`,
    excerpt: 'Introducing the next generation of gaming community platforms with beautiful glassmorphism design.',
    author: sampleUsers[0],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    published: true,
    tags: ['announcement', 'community', 'gaming'],
    likes: 42,
    views: 156,
    comments: [],
    category: 'announcement',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
  {
    id: '2',
    title: 'Best Practices for Mod Development in 2024',
    content: `# Mod Development Best Practices

Creating high-quality mods requires attention to detail and following industry standards.

## Key Guidelines

1. **Code Organization**: Keep your code clean and well-documented
2. **Performance**: Optimize for the best user experience
3. **Compatibility**: Test with popular mod combinations
4. **Documentation**: Provide clear installation instructions

Remember, the community appreciates quality over quantity!`,
    excerpt: 'Essential guidelines for creating high-quality mods that the community will love.',
    author: sampleUsers[1],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    published: true,
    tags: ['modding', 'development', 'tutorial'],
    likes: 28,
    views: 89,
    comments: [],
    category: 'tutorial',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
  {
    id: '3',
    title: 'Community Spotlight: Amazing Vehicle Mods',
    content: `# Vehicle Mods Showcase

This month we're highlighting some incredible vehicle modifications created by our talented community members.

## Featured Mods

- **Supercar Pack v2.0** by @creator_dev
- **Realistic Physics Overhaul** by @member_user
- **Custom Paint Jobs Collection** by @admin

Each of these mods brings something unique to the gaming experience. Download them today!`,
    excerpt: 'Showcasing the most impressive vehicle modifications from our community creators.',
    author: sampleUsers[2],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    published: true,
    tags: ['showcase', 'vehicles', 'mods'],
    likes: 35,
    views: 124,
    comments: [],
    category: 'showcase',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
];

export const sampleFiles: FileUpload[] = [
  {
    id: '1',
    filename: 'supercar_pack_v2.zip',
    title: 'Supercar Pack v2.0',
    description: 'A collection of high-quality supercars with realistic handling and detailed interiors.',
    category: 'vehicle',
    size: 45000000,
    mimeType: 'application/zip',
    downloadCount: 1250,
    likes: 89,
    author: sampleUsers[1],
    uploadDate: new Date('2024-01-12'),
    tags: ['vehicles', 'supercars', 'realistic'],
    thumbnail: '/placeholder.svg?height=150&width=200',
    virus_scanned: true,
    access_level: 'public',
  },
  {
    id: '2',
    filename: 'urban_clothing_set.zip',
    title: 'Urban Clothing Collection',
    description: 'Modern streetwear and urban fashion items for character customization.',
    category: 'clothing',
    size: 12000000,
    mimeType: 'application/zip',
    downloadCount: 567,
    likes: 34,
    author: sampleUsers[2],
    uploadDate: new Date('2024-01-08'),
    tags: ['clothing', 'urban', 'fashion'],
    thumbnail: '/placeholder.svg?height=150&width=200',
    virus_scanned: true,
    access_level: 'members',
  },
  {
    id: '3',
    filename: 'realistic_enb.zip',
    title: 'Realistic Graphics ENB',
    description: 'Enhanced graphics preset for more realistic lighting and visual effects.',
    category: 'enb',
    size: 8500000,
    mimeType: 'application/zip',
    downloadCount: 892,
    likes: 67,
    author: sampleUsers[0],
    uploadDate: new Date('2024-01-14'),
    tags: ['graphics', 'enb', 'realistic'],
    thumbnail: '/placeholder.svg?height=150&width=200',
    virus_scanned: true,
    access_level: 'public',
  },
];

export const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    message: 'creator_dev liked your post "Welcome to mlvs.me"',
    read: false,
    createdAt: new Date('2024-01-16T10:30:00'),
    userId: '1',
    relatedId: '1',
  },
  {
    id: '2',
    type: 'comment',
    message: 'member_user commented on your post "Best Practices for Mod Development"',
    read: false,
    createdAt: new Date('2024-01-16T09:15:00'),
    userId: '2',
    relatedId: '2',
  },
  {
    id: '3',
    type: 'follow',
    message: 'admin started following you',
    read: true,
    createdAt: new Date('2024-01-15T16:45:00'),
    userId: '3',
    relatedId: '1',
  },
];
