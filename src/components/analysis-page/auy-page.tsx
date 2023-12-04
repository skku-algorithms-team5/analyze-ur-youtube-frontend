import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { analysisState } from '@/recoil/atom';

import LoaderPage from '@/components/loader-page/loader-page';

import Navbar from './navbar';
import AdviceCard from './advice-card';
import BarGraph from './bar-graph';
import CommentCard from './comment-card';
import AnalysisCard from './analysis-card';

const AuyPage = ({ videoUrl }: { videoUrl: string }) => {
  const [analysisData, setAnalysisData] = useRecoilState(analysisState);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [sseString, setSseString] = React.useState<string>('');

  useEffect(() => {
    const SSE_URL = `https://port-0-analyze-ur-youtube-backend-3szcb0g2blp9bp0ek.sel5.cloudtype.app/stream_analyze?url=${videoUrl}`;
    // const SSE_URL =
    //   'http://127.0.0.1:8000/mocking_stream_analyze?url=https://www.youtube.com/watch?v=tnSUTDcKhPU';
    let example = '';
    const sseEventSource = new EventSource(SSE_URL, {
      withCredentials: true,
    });
    sseEventSource.onopen = (event) => {
      console.log(`SSE 연결 시작: ${event}`);
    };
    sseEventSource.onmessage = (event) => {
      console.log(event.data);
      example += event.data;
      setSseString(example);
    };
    sseEventSource.onerror = (event) => {
      console.log(`SSE 에러 ${event.target}`);
      console.log(`이때까진 쌓인 데이터: ${example}`);
      setIsLoading(false);
      try {
        example = example.replace('```json', '');
        example = example.replace('```', '');
        console.log('example을 파싱한 문자열');
        console.log(example);
        const result = JSON.parse(example);
        setAnalysisData({
          posRatio: result.pos_ratio,
          negRatio: result.neg_ratio,
          posComments: result.pos_comments,
          negComments: result.neg_comments,
          analysis: result.analysis,
          advice: result.advice,
          repreComment: result.repre_comment,
        });
      } catch (err) {
        console.log(err);
      }
      sseEventSource.close();
    };
    return () => {
      sseEventSource.close();
    };
  }, []);

  const positiveComments = analysisData.posComments.map((comment) => (
    <CommentCard
      className="mb-2 mr-2"
      //user={comment.user}
      comment={comment}
      key={comment}
      isPositive={true}
    />
  ));
  const negativeComments = analysisData.negComments.map((comment) => (
    <CommentCard
      className="mb-2 mr-2"
      //user={comment.user}
      comment={comment}
      key={comment}
      isPositive={false}
    />
  ));
  return (
    <div className="flex flex-col bg-base-200">
      <Navbar />
      {/** 모달 */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isLoading}
        readOnly
      />
      <div className="modal bg-neutral-50" role="dialog">
        <div className="modal-box w-4/5 h-[30rem]">
          <LoaderPage sseString={sseString} />
        </div>
      </div>

      {/** 분석 페이지 */}
      <div className="flex flex-col max-w-[52.5rem] m-auto">
        {/** 방향성 제시 */}
        <div className="m-2">
          <h1 className="h-10 leading-10 text-lg font-bold">
            &nbsp;방향성 제시
          </h1>
          <AdviceCard advice={analysisData.advice} />
        </div>
        {/** 댓글 분석 및 통계 막대그래프 */}
        <div className="m-2">
          <h1 className="h-10 leading-10 text-lg font-bold">&nbsp;댓글 통계</h1>
          <div className="flex flex-row">
            <AnalysisCard analysis={analysisData.analysis} />
            <BarGraph
              pos_ratio={analysisData.posRatio}
              neg_ratio={analysisData.negRatio}
            />
          </div>
        </div>
        {/** 긍정/부정 댓글 */}
        <div className="m-2 mt-4">
          <h1 className="h-10 leading-10 text-lg font-bold">
            &nbsp;긍정/부정 댓글
          </h1>
        </div>
        <div className="flex flex-row mx-2">
          <div>{positiveComments}</div>
          <div>{negativeComments}</div>
        </div>
      </div>
    </div>
  );
};

export default AuyPage;
