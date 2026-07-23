"use client";

import { useState } from 'react';
import { usePyodide } from '@/hooks/usePyodide';
import styles from './PracticeBoard.module.css';
import { Play, RotateCcw, Lightbulb, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PracticeBoardProps {
  initialCode?: string;
  hint?: string;
  language?: 'python' | 'html';
}

export default function PracticeBoard({ initialCode = '', hint = '', language = 'python' }: PracticeBoardProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { isLoading, error: engineError, runCode } = usePyodide();

  const handleRun = async () => {
    if (language === 'html') {
      setHtmlOutput(code);
      setErrorVisible(false);
      return;
    }

    setOutput('Running...');
    const result = await runCode(code);
    if (result.error) {
      setOutput(result.error);
      setErrorVisible(true);
    } else {
      setOutput(result.output || 'Code ran successfully! (No output)');
      setErrorVisible(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setHtmlOutput('');
    setErrorVisible(false);
    setShowHint(false);
  };

  if (language === 'python' && engineError) return <div className={styles.error}>{engineError}</div>;

  return (
    <motion.div 
      className={styles.board}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>Practice Board 🚀</h3>
        <div className={styles.actions}>
          <motion.button 
            className={styles.runBtn} 
            onClick={handleRun} 
            disabled={language === 'python' && isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} fill="currentColor" /> {(language === 'python' && isLoading) ? 'Loading...' : 'Run Code'}
          </motion.button>
          <motion.button 
            className={styles.resetBtn} 
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={20} /> Reset
          </motion.button>
        </div>
      </div>

      <div className={styles.editorContainer}>
        <textarea
          className={styles.editor}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
          placeholder={language === 'html' ? "<!-- Type your HTML here! -->" : "# Type your Python code here!"}
        />
      </div>

      {language === 'html' ? (
        <AnimatePresence>
          <motion.div 
            className={`${styles.console} ${styles.htmlConsole}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className={styles.consoleHeader}>Browser Output</div>
            <div className={styles.iframeWrapper}>
              {htmlOutput ? (
                <iframe srcDoc={htmlOutput} title="HTML Output" className={styles.htmlIframe} sandbox="allow-scripts allow-same-origin" />
              ) : (
                <div className={styles.placeholder}>Click Run to see your webpage!</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {output && (
            <motion.div 
              className={`${styles.console} ${errorVisible ? styles.consoleError : ''}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.consoleHeader}>Output</div>
              <pre className={styles.output}>{output}</pre>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <div className={styles.footer}>
        <button className={styles.hintBtn} onClick={() => setShowHint(!showHint)}>
          <Lightbulb size={20} /> Need a Hint?
        </button>
        <button className={styles.duckBtn} onClick={() => alert("The Rubber Duck says: Describe your code out loud! Why did you write it this way?")}>
          <MessageCircleQuestion size={20} /> Rubber Duck Help
        </button>
      </div>

      {showHint && hint && (
        <motion.div 
          className={styles.hintBox}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <strong>💡 Hint:</strong> {hint}
        </motion.div>
      )}
    </motion.div>
  );
}
