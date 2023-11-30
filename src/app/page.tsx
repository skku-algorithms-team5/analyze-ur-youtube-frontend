'use client';
import { RecoilRoot } from 'recoil';

import Page from './home';
export default function Home() {
  return (
    <main>
      <RecoilRoot>
        <Page></Page>
      </RecoilRoot>
    </main>
  );
}
