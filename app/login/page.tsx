"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
import { Mail, Lock, LogIn, User, Rocket, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useProfile } from '@/lib/context/ProfileContext';

type LoginStep = 'choice' | 'parent' | 'child';

export default function LoginPage() {
  const [step, setStep] = useState<LoginStep>('choice');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [childUsername, setChildUsername] = useState('');
  const [childPin, setChildPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const { setActiveProfile } = useProfile();

  const handleParentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) throw loginError;

      if (data.user) {
        // Update user_id email in profile if needed (for next time)
        await supabase.from('profiles').update({ email }).eq('id', data.user.id);
        router.push('/select-profile');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChildLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Find the parent profile by email
      const { data: parent, error: parentError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', parentEmail)
        .eq('role', 'parent')
        .single();

      if (parentError || !parent) {
        throw new Error("Mission Control can't find that Parent Email! 🚀 Check with your Mission Controller.");
      }

      // 2. Find the child profile under that parent
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('parent_id', parent.id)
        .eq('username', childUsername)
        .eq('role', 'child')
        .single();

      if (profileError || !profile) {
        throw new Error("Mission Control can't find that Coder Name! 🔍 Check your spelling.");
      }

      // 3. Verify PIN
      if (profile.pin && profile.pin !== childPin) {
        throw new Error("Oops! Secret PIN is incorrect. 🤫");
      }

      // 4. Set active profile and launch mission
      setActiveProfile(profile);
      router.push('/dashboard/kid');
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderChoice = () => (
    <div className={styles.card}>
      <div className={styles.header}>
        <Rocket size={48} className={styles.icon} />
        <h1>Welcome Back! 👋</h1>
        <p>Who is logging in today?</p>
      </div>

      <div className={styles.roleGrid}>
        <div className={`${styles.roleCard} ${styles.parent}`} onClick={() => setStep('parent')}>
          <div className={styles.roleIcon}>🛰️</div>
          <span className={styles.roleLabel}>Parent</span>
          <p className={styles.roleDesc}>Mission Control & Stats</p>
        </div>
        <div className={`${styles.roleCard} ${styles.child}`} onClick={() => setStep('child')}>
          <div className={styles.roleIcon}>👨‍🚀</div>
          <span className={styles.roleLabel}>Kid</span>
          <p className={styles.roleDesc}>Start Your coding Mission</p>
        </div>
      </div>

      <p className={styles.footer}>
        New here? <a href="/signup">Join the Mission! 🚀</a>
      </p>
    </div>
  );

  const renderParentLogin = () => (
    <div className={styles.card}>
      <button className={styles.backBtn} onClick={() => setStep('choice')}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className={styles.header}>
        <LogIn size={48} className={styles.icon} />
        <h1>Parent Login</h1>
        <p>Access your Mission Control dashboard.</p>
      </div>

      <form onSubmit={handleParentLogin} className={styles.form}>
        <div className={styles.inputGroup}>
          <Mail size={20} />
          <input
            type="email"
            placeholder="Parent Email"
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
          {loading ? 'Connecting...' : 'Enter Mission Control'}
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
        Sign in with Google
      </button>
    </div>
  );

  const renderChildLogin = () => (
    <div className={styles.card}>
      <button className={styles.backBtn} onClick={() => setStep('choice')}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className={styles.header}>
        <User size={48} className={styles.icon} />
        <h1>Kid Login</h1>
        <p>Ready to continue your mission, Astro-Coder?</p>
      </div>

      <form onSubmit={handleChildLogin} className={styles.form}>
        <div className={styles.inputGroup}>
          <Mail size={20} />
          <input
            type="email"
            placeholder="Parent Email Address"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className={styles.inputGroup}>
          <Rocket size={20} />
          <input
            type="text"
            placeholder="Your Coder Name"
            value={childUsername}
            onChange={(e) => setChildUsername(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className={styles.inputGroup}>
          <ShieldCheck size={20} />
          <input
            type="password"
            placeholder="Secret PIN"
            value={childPin}
            onChange={(e) => setChildPin(e.target.value)}
            maxLength={4}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Launching Mission...' : 'Start My Mission! 🚀'}
        </button>
      </form>

      <p className={styles.footer}>
        Parent needs to log in? <a href="#" onClick={() => setStep('parent')}>Click here</a>
      </p>
    </div>
  );

  return (
    <div className={styles.container}>
      {step === 'choice' && renderChoice()}
      {step === 'parent' && renderParentLogin()}
      {step === 'child' && renderChildLogin()}
    </div>
  );
}
