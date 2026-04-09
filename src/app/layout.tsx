import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://toeic-speaking-writing.koydo.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Koydo TOEIC Speaking & Writing",
    default: "Koydo TOEIC Speaking & Writing — Exam Prep",
  },
  description: "TOEIC Speaking & Writing exam preparation. Practice questions, mock tests, and AI-powered study tools. This app is an independent study aid and is not affiliated with, endorsed by, or approved by TOEIC or any official testing authority. All trademarks belong to their respective owners.",
  authors: [{ name: "Koydo", url: "https://koydo.app" }],
  creator: "Koydo",
  publisher: "Koydo",
  category: "education",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
