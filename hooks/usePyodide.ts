"use client";

import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    loadPyodide: any;
    pyodide: any;
    __pyodidePromptInput?: (promptText: string) => string | null;
  }
}

export const usePyodide = () => {
  const [pyodide, setPyodide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadScript = async () => {
      if (window.pyodide) {
        setPyodide(window.pyodide);
        setIsLoading(false);
        return;
      }

      try {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
        script.async = true;
        script.onload = async () => {
          const py = await window.loadPyodide();
          window.pyodide = py;
          setPyodide(py);
          setIsLoading(false);
        };
        script.onerror = () => {
          setError('Failed to load Python engine. Check your internet connection!');
          setIsLoading(false);
        };
        document.body.appendChild(script);
      } catch (err) {
        setError('Failed to load Python engine. Check your internet connection!');
        setIsLoading(false);
      }
    };

    loadScript();
  }, []);

  const runCode = useCallback(async (code: string) => {
    if (!pyodide) return { output: '', error: 'Python engine not ready.' };

    try {
      window.__pyodidePromptInput = (promptText: string) => {
        const answer = window.prompt(promptText || '');
        return answer;
      };

      await pyodide.runPythonAsync(`
import sys
import io
from js import window

sys.stdout = io.StringIO()

def input(prompt=''):
    result = window.__pyodidePromptInput(str(prompt))
    if result is None:
        raise EOFError('Input cancelled')
    print(str(prompt) + str(result))
    return str(result)
      `);

      await pyodide.runPythonAsync(code);

      const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      return { output: stdout, error: null };
    } catch (err: any) {
      const message = err?.message || String(err);
      if (message.includes('Input cancelled') || message.includes('EOFError')) {
        return { output: '', error: 'Input cancelled — run again and enter a value when asked.' };
      }
      return { output: '', error: message };
    }
  }, [pyodide]);

  return { isLoading, error, runCode };
};
