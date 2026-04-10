export interface Question {
  id: string; section: string; difficulty: 'easy' | 'medium' | 'hard';
  stem: string; choices: string[]; correctIndex: number; explanation: string;
}
export interface AttemptAnswer { questionId: string; selected: number; correct: boolean; timeMs: number; }
export interface ExamAttempt { id: string; userId: string; startedAt: string; answers: AttemptAnswer[]; score?: number; }
export interface UserEntitlement { plan: 'free' | 'pro' | 'lifetime'; expiresAt?: string; }
