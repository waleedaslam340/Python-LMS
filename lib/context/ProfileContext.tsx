"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

interface Profile {
  id: string;
  username: string;
  avatar_url: string;
  role: 'parent' | 'child';
  points: number;
}

interface ProfileContextType {
  activeProfile: Profile | null;
  setActiveProfile: (profile: Profile | null) => void;
  isLoading: boolean;
  logout: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [activeProfile, setActiveProfileState] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedProfile = localStorage.getItem('activeProfile');
    if (savedProfile) {
      setActiveProfileState(JSON.parse(savedProfile));
    }
    setIsLoading(false);
  }, []);

  const setActiveProfile = (profile: Profile | null) => {
    setActiveProfileState(profile);
    if (profile) {
      localStorage.setItem('activeProfile', JSON.stringify(profile));
    } else {
      localStorage.removeItem('activeProfile');
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setActiveProfile(null);
    router.push('/login');
  };

  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile, isLoading, logout }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
