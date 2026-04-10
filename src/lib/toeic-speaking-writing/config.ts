export const toeic_speaking_writingConfig = {
  examId: 'EXAM008',
  slug: 'toeic-speaking-writing',
  name: 'TOEIC S&W',
  fullName: 'TOEIC Speaking & Writing Test',
  sections: ['Speaking', 'Writing'] as const,
  themeColor: '#1565C0',
  themeColorDark: '#003C8F',
  country: 'US',
  language: 'en',
  pricing: '$4.99/mo',
  ipDisclaimer: `TOEIC S&W™ is a registered trademark of ETS. Koydo is not affiliated with or endorsed by ETS.`,
} as const;
export type ToeicSpeakingWritingSection = | 'Speaking'
  | 'Writing';
