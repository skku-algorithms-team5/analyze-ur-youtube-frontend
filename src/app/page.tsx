'use client';
import Image from 'next/image';
import { LandingPage } from '@/components/landing-page';
import { LoaderPage } from '@/components/loader-page';

export default function Home() {
  return (
    <main>
      <LoaderPage />
    </main>
  );
}
