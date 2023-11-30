'use client';
<<<<<<< HEAD
import { RecoilRoot } from 'recoil';

import Page from './home';
=======
import Image from 'next/image';
import { LandingPage } from '@/components/landing-page';
import { LoaderPage } from '@/components/loader-page';
>>>>>>> faa161d (loadingpage)

export default function Home() {
  return (
    <main>
<<<<<<< HEAD
      <RecoilRoot>
        <Page></Page>
      </RecoilRoot>
=======
      <LoaderPage />
>>>>>>> faa161d (loadingpage)
    </main>
  );
}
