'use client';

import { useState } from 'react';
import { X, Github, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useApp } from '@/contexts/AppContext';
import { sampleUsers } from '@/data/sampleData';

export function AuthModal() {
  const { dispatch } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const closeModal = () => {
    dispatch({ type: 'SET_MODAL', payload: null });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would be an API call
    const user = sampleUsers.find(u => u.email === loginData.email);
    if (user) {
      dispatch({ type: 'SET_USER', payload: user });
      closeModal();
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - in production, this would be an API call
    if (registerData.password === registerData.confirmPassword) {
      const newUser = {
        id: Date.now().toString(),
        username: registerData.username,
        email: registerData.email,
        role: 'member' as const,
        joinDate: new Date(),
        reputation: 0,
        followers: 0,
        following: 0,
      };
      dispatch({ type: 'SET_USER', payload: newUser });
      closeModal();
    }
  };

  const handleSocialLogin = (provider: string) => {
    // Mock social login
    dispatch({ type: 'SET_USER', payload: sampleUsers[0] });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md glassmorphism border-white/20 bg-white/10 backdrop-blur-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Welcome to mlvs.me</h2>
          <Button variant="ghost" size="icon" onClick={closeModal}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 glassmorphism">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="glassmorphism border-white/20 bg-white/5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="glassmorphism border-white/20 bg-white/5 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full glassmorphism bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={() => handleSocialLogin('github')}
                className="glassmorphism border-white/20 hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSocialLogin('google')}
                className="glassmorphism border-white/20 hover:bg-white/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Choose a username"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                  className="glassmorphism border-white/20 bg-white/5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  className="glassmorphism border-white/20 bg-white/5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="Create a password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  className="glassmorphism border-white/20 bg-white/5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  className="glassmorphism border-white/20 bg-white/5"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full glassmorphism bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
