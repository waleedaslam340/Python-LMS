"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useProfile } from '@/lib/context/ProfileContext';
import { useRouter } from 'next/navigation';
import styles from './SelectProfile.module.css';
import { Users, Lock, ChevronRight } from 'lucide-react';

export default function SelectProfilePage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const { setActiveProfile } = useProfile();
  const router = useRouter();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/login');
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .or(`user_id.eq.${user.id},parent_id.eq.${user.id}`);

    if (data) setProfiles(data);
    setLoading(false);
  };

  const handleSelect = (profile: any) => {
    if (profile.role === 'parent' || !profile.pin) {
      confirmSelection(profile);
    } else {
      setSelectedProfile(profile);
      setError('');
    }
  };

  const confirmSelection = (profile: any) => {
    setActiveProfile(profile);
    if (profile.role === 'parent') {
      router.push('/parent');
    } else {
      router.push('/dashboard/kid');
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === selectedProfile.pin) {
      confirmSelection(selectedProfile);
    } else {
      setError('Oops! Wrong PIN. Try again! 🤫');
      setPin('');
    }
  };

  if (loading) return <div className={styles.loading}>Launching Mission Control... 🚀</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who's Coding Today? 🐢</h1>
      
      {!selectedProfile ? (
        <div className={styles.grid}>
          {profiles.map((profile) => (
            <button 
              key={profile.id} 
              className={styles.profileCard}
              onClick={() => handleSelect(profile)}
            >
              <div className={styles.avatar}>{profile.avatar_url || '👤'}</div>
              <span className={styles.name}>{profile.username}</span>
              <span className={styles.roleLabel}>{profile.role}</span>
            </button>
          ))}
          <button className={styles.addBtn} onClick={() => router.push('/create-child')}>
            <div className={styles.plus}>+</div>
            <span>Add Coder</span>
          </button>
        </div>
      ) : (
        <div className={styles.pinCard}>
          <div className={styles.avatarLarge}>{selectedProfile.avatar_url}</div>
          <h2>Hi, {selectedProfile.username}!</h2>
          <p>Enter your secret PIN to start:</p>
          
          <form onSubmit={handlePinSubmit} className={styles.pinForm}>
            <div className={styles.pinInputWrapper}>
              <Lock size={20} />
              <input 
                type="password" 
                maxLength={4} 
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                autoFocus
                placeholder="****"
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.goBtn}>
              Let's Go! <ChevronRight />
            </button>
          </form>
          <button className={styles.backBtn} onClick={() => setSelectedProfile(null)}>
            Not me? Go back
          </button>
        </div>
      )}
    </div>
  );
}
