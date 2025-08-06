'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, AppAction } from '@/types';
import { sampleUsers, samplePosts, sampleFiles, sampleNotifications } from '@/data/sampleData';

const initialState: AppState = {
  user: null,
  theme: 'dark',
  sidebarOpen: true,
  activeModal: null,
  posts: samplePosts,
  files: sampleFiles,
  notifications: sampleNotifications,
  loading: false,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'SET_MODAL':
      return { ...state, activeModal: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload
            ? { ...post, likes: post.likes + 1 }
            : post
        ),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        ),
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
