"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import styles from './ParentDashboard.module.css';
import { Users, BookOpen, Clock, Lightbulb, Gamepad2, PlusCircle, User, Trash2, Edit, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/lib/context/ProfileContext';

export default function ParentDashboard() {
  const [children, setChildren] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingChild, setEditingChild] = useState<any>(null);
  const [editForm, setEditForm] = useState({ username: '', pin: '', avatar_url: '' });
  const [isSaving, setIsSaving] = useState(false);
  const { setActiveProfile } = useProfile();
  const router = useRouter();

  const openKidDashboard = (child: any) => {
    setActiveProfile({
      id: child.id,
      username: child.username,
      avatar_url: child.avatar_url,
      role: 'child',
      points: child.points || 0,
    });
    router.push('/dashboard/kid');
  };

  useEffect(() => {
    async function loadChildren() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profiles } = await supabase
        .from('profiles')
        .select('*')
        .eq('parent_id', user.id)
        .eq('role', 'child');

      if (profiles) {
        setChildren(profiles);
      }
      setLoading(false);
    }
    loadChildren();
  }, []);

  const handleDeleteChild = async (childId: string, username: string) => {
    if (window.confirm(`Are you sure you want to permanently delete the profile for ${username}? This will erase all their progress and cannot be undone.`)) {
      const { error } = await supabase.from('profiles').delete().eq('id', childId);
      if (!error) {
        setChildren((prev) => prev.filter(c => c.id !== childId));
      } else {
        alert('Failed to delete child profile.');
      }
    }
  };

  const openEditModal = (child: any) => {
    setEditingChild(child);
    setEditForm({ username: child.username, pin: child.pin || '', avatar_url: child.avatar_url });
  };

  const closeEditModal = () => {
    setEditingChild(null);
  };

  const handleSaveEdit = async () => {
    if (!editForm.username.trim()) return;
    
    setIsSaving(true);
    const { data, error } = await supabase
      .from('profiles')
      .update({
        username: editForm.username,
        pin: editForm.pin,
        avatar_url: editForm.avatar_url
      })
      .eq('id', editingChild.id)
      .select();

    if (!error && data && data.length > 0) {
      setChildren((prev) => prev.map(c => c.id === editingChild.id ? data[0] : c));
      closeEditModal();
    } else {
      alert('Failed to update profile.');
    }
    setIsSaving(false);
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.parentInfo}>
          <h1>Parent Dashboard 👨‍👩‍👧</h1>
          <p>Manage your children's learning journey.</p>
        </div>
        <Link href="/create-child" className={styles.addChildBtn}>
          <PlusCircle size={20} /> Add Child Profile
        </Link>
      </header>

      <main className={styles.grid}>
        <section className={`${styles.card} ${styles.fullWidth}`}>
          <h2><Users size={24} className={styles.icon} /> Your Little Coders</h2>
          {loading ? (
            <p>Loading profiles...</p>
          ) : children.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No child profiles yet. Create one to start tracking!</p>
              <Link href="/create-child" className={styles.link}>Create Profile</Link>
            </div>
          ) : (
            <div className={styles.childrenGrid}>
              {children.map((child) => (
                <div key={child.id} className={styles.childCard}>
                  <div className={styles.childAvatar}>{child.avatar_url}</div>
                  <div className={styles.childInfo}>
                    <h3>{child.username}</h3>
                    <p>{child.points} Points Earned</p>
                  </div>
                  <button type="button" className={styles.viewBtn} onClick={() => openKidDashboard(child)}>
                    View Dashboard
                  </button>
                  <div className={styles.actionsRow}>
                    <button className={`${styles.actionBtn} ${styles.editBtn}`} onClick={() => openEditModal(child)} aria-label="Edit Profile" title="Edit Profile">
                      <Edit size={16} />
                    </button>
                    <button className={`${styles.actionBtn} ${styles.deleteBtn}`} onClick={() => handleDeleteChild(child.id, child.username)} aria-label="Delete Profile" title="Delete Profile">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className={styles.card}>
          <h2><Lightbulb size={24} className={styles.icon} /> Teaching Tips</h2>
          <div className={styles.tips}>
            <div className={styles.tip}>
              <strong>Variables = Boxes</strong>
              <p>Remind them that variables are just labeled boxes where the computer stores items.</p>
            </div>
            <div className={styles.tip}>
              <strong>Error = Learning Opportunity</strong>
              <p>If the code doesn't work, encourage them to read the error message like a secret code.</p>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <h2><Gamepad2 size={24} className={styles.icon} /> Offline Activity</h2>
          <div className={styles.activityBox}>
            <h3>"Be the Robot"</h3>
            <p>Give your child a "program" (steps) to get to a snack. Example: "Forward 3, Turn Left 1, Pick Up Object".</p>
          </div>
        </section>
      </main>

      {editingChild && (
        <div className={styles.modalOverlay} onClick={closeEditModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Edit Profile</h2>
              <button className={styles.closeBtn} onClick={closeEditModal}><X size={24} /></button>
            </div>
            
            <div className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Username</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  value={editForm.username}
                  onChange={(e) => setEditForm({...editForm, username: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Access PIN (Optional)</label>
                <input 
                  type="text" 
                  maxLength={4}
                  placeholder="e.g. 1234"
                  className={styles.formInput} 
                  value={editForm.pin}
                  onChange={(e) => setEditForm({...editForm, pin: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Avatar Emoji</label>
                <input 
                  type="text" 
                  maxLength={2}
                  className={styles.formInput} 
                  value={editForm.avatar_url}
                  onChange={(e) => setEditForm({...editForm, avatar_url: e.target.value})}
                />
              </div>
              
              <div className={styles.modalActions}>
                <button className={styles.cancelBtn} onClick={closeEditModal}>Cancel</button>
                <button 
                  className={styles.saveBtn} 
                  onClick={handleSaveEdit} 
                  disabled={isSaving || !editForm.username.trim()}
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
