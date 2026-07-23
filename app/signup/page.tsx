"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import styles from './Signup.module.css';
import { Mail, Lock, User, Rocket } from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            role: 'parent',
          },
        },
      });

      if (signupError) throw signupError;

      if (data.user) {
        alert("Mission account created! Check your email to confirm, then log in. 🚀");
        router.push('/login');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Rocket size={48} className={styles.icon} />
          <h1>Join the Mission! 🚀</h1>
          <p>Parents, create an account to start your child's journey.</p>
        </div>

        <form onSubmit={handleSignup} className={styles.form}>
          <div className={styles.inputGroup}>
            <User size={20} />
            <input
              type="text"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <Mail size={20} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <Lock size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Parent Account'}
          </button>
        </form>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <button 
          onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + '/parent' } })}
          className={styles.googleBtn}
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} />
          Sign up with Google
        </button>

        <p className={styles.footer}>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}
