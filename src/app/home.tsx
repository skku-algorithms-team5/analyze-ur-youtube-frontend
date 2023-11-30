'use client';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import { analysisState } from '@/recoil/atom';

import { LandingPage } from '@/components/landing-page';
import AuyPage from '@/components/analysis-page/auy-page';
import LoaderPage from '@/components/loader-page/loader-page';

export default function Page() {
  const setAnalysis = useSetRecoilState(analysisState);
  const [pageStatus, setPageStatsus] = useState<string>('landing');

  let response;
  let result;

  const submitHandler = (videoUrl: string) => {
    setPageStatsus('loading');
    axios
      .get(`http://127.0.0.1:8000/analyze?url=${videoUrl}`)
      .then((res) => {
        const { data } = res;
        response = data.result;

        response = response.replace('```json', '');
        response = response.replace('```', '');

        // console.log(response);

        result = JSON.parse(response);

        // console.log(result);

        setAnalysis({
          posComments: result.pos_comments,
          negComments: result.neg_comments,
          analysis: result.analysis,
          advice: result.advice,
          repreComment: result.repre_comment,
        });
        setPageStatsus('analysis');
      })
      .catch((err) => {
        console.error(err);
        setPageStatsus('analysis');
      });
  };
  return (
    <>
      {pageStatus === 'landing' ? (
        <LandingPage onVideoUrl={submitHandler} />
      ) : pageStatus === 'loading' ? (
        <LoaderPage />
      ) : (
        <AuyPage />
      )}
    </>
  );
}
