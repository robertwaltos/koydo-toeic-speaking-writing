import type { Question } from './types';
export async function fetchQuestions(section?: string, limit = 20): Promise<Question[]> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (section) params.set('section', section);
  const res = await fetch(`/api/toeic-speaking-writing/questions?${params}`);
  if (!res.ok) throw new Error('Failed to fetch questions');
  return res.json();
}
