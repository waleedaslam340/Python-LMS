"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import styles from './CreateChild.module.css';
import { User, Smile, ShieldCheck, ArrowRight } from 'lucide-react';

const AVATARS = [
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵'
];

export default function CreateChildPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [pin, setPin] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCreateChild = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      // Create child profile
      // Note: In a real app, you might create a separate auth user for the child.
      // For this prototype, we'll store child profiles linked to the parent.
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: crypto.randomUUID(),
            username: name,
            full_name: name,
            avatar_url: selectedAvatar,
            role: 'child',
            parent_id: user.id,
            pin: pin || null,
          },
        ]);

      if (profileError) throw profileError;

      router.push('/parent');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Create a Child Profile 🎨</h1>
        <p>Add a profile for your little coder to track their progress.</p>

        <form onSubmit={handleCreateChild} className={styles.form}>
          <div className={styles.avatarGrid}>
            {AVATARS.map((avatar) => (
              <button
                key={avatar}
                type="button"
                className={`${styles.avatarBtn} ${selectedAvatar === avatar ? styles.active : ''}`}
                onClick={() => setSelectedAvatar(avatar)}
              >
                {avatar}
              </button>
            ))}
          </div>

          <div className={styles.inputGroup}>
            <User size={20} />
            <input
              type="text"
              placeholder="Child's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <Smile size={20} />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <ShieldCheck size={20} />
            <input
              type="password"
              placeholder="Simple PIN (optional)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Creating...' : 'Create Profile'} <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
