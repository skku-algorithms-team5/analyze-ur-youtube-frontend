'use client';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import { analysisState, analysisType } from '@/recoil/atom';

import { LandingPage } from '@/components/landing-page';
import AuyPage from '@/components/analysis-page/auy-page';
import { get } from 'http';

export default function Page() {
  const setAnalysis = useSetRecoilState(analysisState);
  const [pageStatus, setPageStatsus] = useState<string>('landing');
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState<boolean>(false);

  const submitHandler = (videoUrl: string) => {
    setPageStatsus('analysis');
    setIsLoadingModalOpen(false);
  };

  return (
    <>
      {pageStatus === 'landing' ? (
        <LandingPage onVideoUrl={submitHandler} />
      ) : (
        <AuyPage isModalOpen={isLoadingModalOpen} />
      )}
    </>
  );
}
