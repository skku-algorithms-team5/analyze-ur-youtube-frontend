import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Analyze Your YouTube',
  description: '당신의 YouTube Video를 분석해 보세요!',
  openGraph: {
    type: 'website',
    url: 'https://https://analyze-ur-youtube-frontend.vercel.app',
    title: 'Analyze Your YouTube',
    description: '당신의 YouTube Video를 분석해 보세요!',
    siteName: 'Analyze Your YouTube',
    images: [
      {
        url: 'https://i.ibb.co/cyj9qMH/2023-12-05-031249.png',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
