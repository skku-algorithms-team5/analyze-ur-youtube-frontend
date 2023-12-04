'use client';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import { analysisState } from '@/recoil/atom';

import { LandingPage } from '@/components/landing-page';
import AuyPage from '@/components/analysis-page/auy-page';

export default function Page() {
  const [pageStatus, setPageStatsus] = useState<string>('landing');
  const [videoUrl, setVidoeUrl] = useState<string>('');

  let response;
  let result;

  const urlHandler = (videoUrl: string) => {
    setPageStatsus('analysis');
    setVidoeUrl(videoUrl);
  };
  return (
    <>
      {pageStatus === 'landing' ? (
        <LandingPage onVideoUrl={urlHandler} />
      ) : (
        <AuyPage videoUrl={videoUrl} />
      )}
    </>
  );
}
