import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Koydo TOEIC S&W',
  description: 'TOEIC Speaking & Writing Test — smart, adaptive exam prep powered by Koydo.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen bg-white text-gray-900 antialiased">{children}</body></html>);
}
