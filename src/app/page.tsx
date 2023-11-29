'use client';
import { useState } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import axios from 'axios';

import { analysisState } from '@/recoil/atom';

import { LandingPage } from '@/components/landing-page';
import AuyPage from '@/components/analysis-page/auy-page';

export default function Home() {
  const setAnalysis = useSetRecoilState(analysisState);
  const [pageStatus, setPageStatsus] = useState<string>('landing');

  const submitHandler = (videoId: string) => {
    setPageStatsus('loading');
    axios
      .post('/analysis', { videoId })
      .then((res) => {
        const { data } = res;
        setAnalysis({
          posComments: data.pos_comments,
          negComments: data.neg_comments,
          analysis: data.analysis,
          advice: data.advice,
          repreComment: data.repre_comment,
        });
        setPageStatsus('analysis');
      })
      .catch((err) => {
        console.error(err);
        setPageStatsus('analysis');
      });
  };
  return (
    <main>
      <RecoilRoot>
        {pageStatus === 'landing' ? (
          <LandingPage onVideoId={submitHandler} />
        ) : pageStatus === 'loading' ? (
          <div>loading</div>
        ) : (
          <AuyPage />
        )}
      </RecoilRoot>
    </main>
  );
}
