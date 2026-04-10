import { PASSING_SCORE } from './constants';
import type { AttemptAnswer } from './types';
export function computeScore(answers: AttemptAnswer[]): { correct: number; total: number; pct: number; passed: boolean } {
  const correct = answers.filter(a => a.correct).length;
  const total = answers.length;
  const pct = total > 0 ? correct / total : 0;
  return { correct, total, pct, passed: pct >= PASSING_SCORE };
}
