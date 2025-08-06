export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'creator' | 'member';
  avatar?: string;
  joinDate: Date;
  reputation: number;
  bio?: string;
  followers: number;
  following: number;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  tags: string[];
  likes: number;
  views: number;
  comments: Comment[];
  category: string;
  thumbnail?: string;
}

export interface FileUpload {
  id: string;
  filename: string;
  title: string;
  description: string;
  category: 'vehicle' | 'clothing' | 'enb' | 'map' | 'script' | 'other';
  size: number;
  mimeType: string;
  downloadCount: number;
  likes: number;
  author: User;
  uploadDate: Date;
  tags: string[];
  thumbnail?: string;
  virus_scanned: boolean;
  access_level: 'public' | 'members' | 'premium';
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  parentId?: string;
  replies?: Comment[];
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'upload';
  message: string;
  read: boolean;
  createdAt: Date;
  userId: string;
  relatedId?: string;
}

export interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  activeModal: string | null;
  posts: BlogPost[];
  files: FileUpload[];
  notifications: Notification[];
  loading: boolean;
}

export type AppAction = 
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_MODAL'; payload: string | null }
  | { type: 'ADD_POST'; payload: BlogPost }
  | { type: 'LIKE_POST'; payload: string }
  | { type: 'ADD_COMMENT'; payload: { postId: string; comment: Comment } }
  | { type: 'SET_LOADING'; payload: boolean };
