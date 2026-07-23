"use client";

import React, { useState } from 'react';
import { Lesson, Topic, QuizQuestion } from '@/lib/curriculum/data';
import PracticeBoard from '@/components/PracticeBoard';
import styles from './LessonViewer.module.css';
import Link from 'next/link';
import {
  BookOpen,
  PenTool,
  Trophy,
  Star,
  CheckCircle,
  List,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfile } from '@/lib/context/ProfileContext';
import { completeLessonProgress } from '@/lib/progress';

// ─── Interactive MCQ Quiz component ──────────────────────────────────────────
function TopicQuiz({ questions }: { questions: QuizQuestion[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState<number[]>([]); // indices answered correctly
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q.answer;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    if (idx === q.answer) {
      setScore(s => s + 1);
      setAnswered(prev => [...prev, current]);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered([]);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '👍' : '💪';
    return (
      <motion.div 
        className={styles.quizResult}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className={styles.quizResultEmoji}>{emoji}</div>
        <h3 className={styles.quizResultTitle}>
          {pct === 100 ? 'Perfect Score!' : pct >= 70 ? 'Great Job!' : 'Keep Practising!'}
        </h3>
        <p className={styles.quizResultScore}>
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong> ({pct}%)
        </p>
        <button className={styles.quizRestartBtn} onClick={handleRestart}>
          Try Again 🔄
        </button>
      </motion.div>
    );
  }

  return (
    <div className={styles.quizWrapper}>
      {/* Progress bar */}
      <div className={styles.quizProgress}>
        <span className={styles.quizProgressLabel}>Question {current + 1} of {questions.length}</span>
        <div className={styles.quizProgressTrack}>
          <div className={styles.quizProgressFill} style={{ width: `${((current) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className={styles.quizQuestion}>
        <span className={styles.quizQNum}>Q{current + 1}</span>
        <p className={styles.quizQText}>{q.question}</p>
      </div>

      {/* Options */}
      <ul className={styles.quizOptions}>
        {q.options.map((opt, idx) => {
          let cls = styles.quizOption;
          if (isAnswered) {
            if (idx === q.answer) cls = `${styles.quizOption} ${styles.quizOptionCorrect}`;
            else if (idx === selected) cls = `${styles.quizOption} ${styles.quizOptionWrong}`;
          } else if (idx === selected) {
            cls = `${styles.quizOption} ${styles.quizOptionSelected}`;
          }
          return (
            <motion.li key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <button className={cls} onClick={() => handleSelect(idx)} disabled={isAnswered}>
                <span className={styles.quizOptionLetter}>{String.fromCharCode(65 + idx)}</span>
                {opt}
              </button>
            </motion.li>
          );
        })}
      </ul>

      {/* Explanation (shown after answering) */}
      {isAnswered && (
        <div className={`${styles.quizExplanation} ${isCorrect ? styles.quizExplanationCorrect : styles.quizExplanationWrong}`}>
          <strong>{isCorrect ? '✅ Correct!' : '❌ Not quite!'}</strong>
          <p>{q.explanation}</p>
        </div>
      )}

      {/* Next / Finish */}
      {isAnswered && (
        <button className={styles.quizNextBtn} onClick={handleNext}>
          {current < questions.length - 1 ? 'Next Question →' : 'See Results 🏆'}
        </button>
      )}
    </div>
  );
}

interface LessonViewerProps {
  lesson: Lesson;
}

// ─── Multi-topic lesson viewer ────────────────────────────────────────────────
function TopicLessonViewer({ lesson }: { lesson: Lesson }) {
  const topics = lesson.topics!;
  const [activeTopic, setActiveTopic] = useState<Topic>(topics[0]);
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'quiz' | 'challenge'>('learn');
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [isCompleting, setIsCompleting] = useState(false);
  const router = useRouter();
  const { activeProfile, setActiveProfile } = useProfile();

  const currentIndex = topics.findIndex(t => t.id === activeTopic.id);

  const goNext = () => {
    if (currentIndex < topics.length - 1) {
      setCompletedTopics(prev => new Set(prev).add(activeTopic.id));
      setActiveTopic(topics[currentIndex + 1]);
      setActiveTab('learn');
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setActiveTopic(topics[currentIndex - 1]);
      setActiveTab('learn');
    }
  };

  const handleComplete = async () => {
    setIsCompleting(true);
    try {
      const result = await completeLessonProgress(lesson.id, activeProfile, setActiveProfile);
      alert(result.message);
      if (result.ok || result.redirectTo === '/select-profile') {
        router.push(result.redirectTo);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong saving your progress. Please try again.');
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Week header */}
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Courses
        </Link>
        <div className={styles.badges}>
          <span className={styles.phaseBadge}>Phase {lesson.phase}</span>
          <span className={styles.weekBadge}>Week {lesson.week}</span>
        </div>
        <h1 className={styles.title}>{lesson.title}</h1>
        <p className={styles.description}>{lesson.description}</p>
      </header>

      {/* Main layout: sidebar + content */}
      <div className={styles.topicLayout}>

        {/* ── Topic sidebar ──────────────────────────────── */}
        <aside className={styles.topicSidebar}>
          <div className={styles.sidebarTitle}>
            <List size={18} /> Topics
          </div>
          <ul className={styles.topicList}>
            {topics.map((topic) => {
              const isActive = topic.id === activeTopic.id;
              const isDone = completedTopics.has(topic.id);
              return (
                <li key={topic.id}>
                  <button
                    className={`${styles.topicItem} ${isActive ? styles.topicItemActive : ''} ${isDone ? styles.topicItemDone : ''}`}
                    onClick={() => { setActiveTopic(topic); setActiveTab('learn'); }}
                  >
                    <span className={styles.topicNumber}>{topic.number}</span>
                    <span className={styles.topicLabel}>{topic.title}</span>
                    {isDone && <CheckCircle size={14} className={styles.doneIcon} />}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Overall progress */}
          <div className={styles.progressSection}>
            <div className={styles.progressLabel}>
              {completedTopics.size} / {topics.length} topics completed
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${(completedTopics.size / topics.length) * 100}%` }}
              />
            </div>
          </div>
        </aside>

        {/* ── Topic content ───────────────────────────────── */}
        <div className={styles.topicContent}>
          {/* Tab bar – shows only tabs relevant to the current topic */}
          <nav className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'learn' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('learn')}
            >
              <BookOpen size={18} /> Learn
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'practice' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('practice')}
            >
              <PenTool size={18} /> Practice
            </button>
            {activeTopic.quiz && activeTopic.quiz.length > 0 && (
              <button
                className={`${styles.tab} ${activeTab === 'quiz' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                <HelpCircle size={18} /> Quiz
              </button>
            )}
            {currentIndex === topics.length - 1 && (
              <button
                className={`${styles.tab} ${activeTab === 'challenge' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('challenge')}
              >
                <Trophy size={18} /> Challenge
              </button>
            )}
          </nav>

          <AnimatePresence mode="wait">
            {/* ── Learn tab ── */}
            {activeTab === 'learn' && (
              <motion.div 
                key="learn"
                className={styles.learnSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.topicHeader}>
                <span className={styles.topicBadge}>{activeTopic.number}</span>
                <h2 className={styles.topicTitle}>{activeTopic.title}</h2>
              </div>

              {/* Theory paragraphs */}
              <section className={styles.card}>
                <h3><BookOpen className={styles.icon} size={20} /> Theory</h3>
                <div className={styles.theoryBody}>
                  {activeTopic.theory.map((para, i) => (
                    <p key={i} className={styles.theoryPara}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Syntax section */}
              {activeTopic.syntax && (
                <section className={styles.card}>
                  <h3><PenTool className={styles.icon} size={20} /> How it looks (Syntax)</h3>
                  <code className={styles.syntax}>{activeTopic.syntax}</code>
                </section>
              )}

              {/* Key points */}
              {activeTopic.keyPoints && activeTopic.keyPoints.length > 0 && (
                <section className={styles.card}>
                  <h3><Star className={styles.icon} size={20} /> Key Points</h3>
                  <ul className={styles.keyPointsList}>
                    {activeTopic.keyPoints.map((pt, i) => (
                      <li key={i} className={styles.keyPoint}>
                        <span className={styles.bullet}>→</span> {pt}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Code example */}
              {activeTopic.codeExample && (
                <section className={styles.card}>
                  <h3><Star className={styles.icon} size={20} /> Example Code</h3>
                  <div className={styles.exampleBox}>
                    <pre>{activeTopic.codeExample}</pre>
                  </div>
                </section>
              )}

              {/* Practice Prompt */}
              <div className={styles.practicePrompt}>
                <div className={styles.practicePromptContent}>
                  <h3>Ready to try it? 🎮</h3>
                  <p>Put your knowledge to the test in the interactive coding environment!</p>
                </div>
                <button className={styles.practicePromptBtn} onClick={() => setActiveTab('practice')}>
                  Go to Practice <PenTool size={18} />
                </button>
              </div>

              {/* Navigation */}
              <div className={styles.topicNav}>
                <button
                  className={styles.navBtn}
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                >
                  ← Previous
                </button>
                <span className={styles.navInfo}>
                  {currentIndex + 1} of {topics.length}
                </span>
                {currentIndex < topics.length - 1 ? (
                  <button className={styles.navBtnNext} onClick={goNext}>
                    Next Topic →
                  </button>
                ) : (
                  <button className={styles.navBtnNext} onClick={() => setActiveTab('challenge')}>
                    Final Challenge 🏆
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Practice tab ── */}
          {activeTab === 'practice' && (
            <motion.div 
              key="practice"
              className={styles.practiceSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.sidebar}>
                <h3>Practise: {activeTopic.title} 🎮</h3>
                <p>Run the starter code, then experiment with it!</p>
                {activeTopic.hint && (
                  <div className={styles.tipBox}>
                    <strong>💡 Hint:</strong> {activeTopic.hint}
                  </div>
                )}
              </div>
              <div className={styles.boardWrapper}>
                <PracticeBoard
                  initialCode={activeTopic.practiceCode || '# Try experimenting with code here!'}
                  hint={activeTopic.hint || 'No hint available for this topic, just play around!'}
                  language={lesson.id.startsWith('html') ? 'html' : 'python'}
                />
              </div>
            </motion.div>
          )}

          {/* ── Quiz tab ── */}
          {activeTab === 'quiz' && activeTopic.quiz && (
            <motion.div 
              key="quiz"
              className={styles.quizSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.quizHeader}>
                <HelpCircle size={24} className={styles.icon} />
                <div>
                  <h3 className={styles.quizSectionTitle}>Quiz: {activeTopic.title}</h3>
                  <p className={styles.quizSectionSub}>Read each question carefully and pick the best answer.</p>
                </div>
              </div>
              <TopicQuiz key={activeTopic.id} questions={activeTopic.quiz} />
            </motion.div>
          )}

          {/* ── Challenge tab (last topic only) ── */}
          {activeTab === 'challenge' && (
            <motion.div 
              key="challenge"
              className={styles.challengeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.challengeCard}>
                <Trophy size={48} className={styles.trophyIcon} />
                <h2>Week {lesson.week} Final Mission!</h2>
                <p className={styles.challengeText}>{lesson.challenge}</p>
                <div className={styles.boardWrapper}>
                  <PracticeBoard initialCode="" hint={lesson.hint} language={lesson.id.startsWith('html') ? 'html' : 'python'} />
                </div>
                <button
                  className={styles.completeBtn}
                  onClick={handleComplete}
                  disabled={isCompleting}
                >
                  {isCompleting ? 'Saving...' : 'I finished the challenge! 🏆'}
                </button>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Single-topic lesson viewer (original, used for weeks without topics) ─────
function SingleLessonViewer({ lesson }: { lesson: Lesson }) {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'challenge'>('learn');
  const [isCompleting, setIsCompleting] = useState(false);
  const router = useRouter();
  const { activeProfile, setActiveProfile } = useProfile();

  const handleComplete = async () => {
    setIsCompleting(true);
    try {
      const result = await completeLessonProgress(lesson.id, activeProfile, setActiveProfile);
      alert(result.message);
      if (result.ok || result.redirectTo === '/select-profile') {
        router.push(result.redirectTo);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong saving your progress. Please try again.');
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Courses
        </Link>
        <div className={styles.badges}>
          <span className={styles.phaseBadge}>Phase {lesson.phase}</span>
          <span className={styles.weekBadge}>Week {lesson.week}</span>
        </div>
        <h1 className={styles.title}>{lesson.title}</h1>
        <p className={styles.description}>{lesson.description}</p>
      </header>

      <nav className={styles.tabs}>
        <button className={`${styles.tab} ${activeTab === 'learn' ? styles.activeTab : ''}`} onClick={() => setActiveTab('learn')}>
          <BookOpen size={20} /> Learn
        </button>
        <button className={`${styles.tab} ${activeTab === 'practice' ? styles.activeTab : ''}`} onClick={() => setActiveTab('practice')}>
          <PenTool size={20} /> Practice
        </button>
        <button className={`${styles.tab} ${activeTab === 'challenge' ? styles.activeTab : ''}`} onClick={() => setActiveTab('challenge')}>
          <Trophy size={20} /> Challenge
        </button>
      </nav>

      <main className={styles.content}>
        <AnimatePresence mode="wait">
          {activeTab === 'learn' && (
            <motion.div 
              key="learn"
              className={styles.learnSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <section className={styles.card}>
                <h2><BookOpen className={styles.icon} /> The Concept</h2>
              <p>{lesson.concept}</p>
            </section>
            <section className={styles.card}>
              <h2><PenTool className={styles.icon} /> How it looks (Syntax)</h2>
              <code className={styles.syntax}>{lesson.syntax}</code>
            </section>
            <section className={styles.card}>
              <h2><Star className={styles.icon} /> Example</h2>
              <div className={styles.exampleBox}>
                <pre>{lesson.example}</pre>
                <button className={styles.tryBtn} onClick={() => setActiveTab('practice')}>
                  Try this example!
                </button>
                </div>
              </section>
            </motion.div>
          )}
          {activeTab === 'practice' && (
            <motion.div 
              key="practice"
              className={styles.practiceSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.sidebar}>
              <h3>Let&apos;s play with code! 🎮</h3>
              <p>Type your code in the editor and click &quot;Run Code&quot; to see what happens.</p>
              <div className={styles.tipBox}>
                <strong>Pro Tip:</strong> Computers are super fast, but they only follow exact instructions!
              </div>
            </div>
            <div className={styles.boardWrapper}>
                <PracticeBoard initialCode={lesson.preloadedCode} hint={lesson.hint} language={lesson.id.startsWith('html') ? 'html' : 'python'} />
              </div>
            </motion.div>
          )}
          {activeTab === 'challenge' && (
            <motion.div 
              key="challenge"
              className={styles.challengeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.challengeCard}>
              <Trophy size={48} className={styles.trophyIcon} />
              <h2>Your Mission!</h2>
              <p className={styles.challengeText}>{lesson.challenge}</p>
              <div className={styles.boardWrapper}>
                <PracticeBoard initialCode="" hint={lesson.hint} language={lesson.id.startsWith('html') ? 'html' : 'python'} />
              </div>
              <button className={styles.completeBtn} onClick={handleComplete} disabled={isCompleting}>
                  {isCompleting ? 'Saving...' : 'I finished the challenge! 🏆'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// ─── Public export: routes to the right viewer ────────────────────────────────
export default function LessonViewer({ lesson }: LessonViewerProps) {
  if (lesson.topics && lesson.topics.length > 0) {
    return <TopicLessonViewer lesson={lesson} />;
  }
  return <SingleLessonViewer lesson={lesson} />;
}
