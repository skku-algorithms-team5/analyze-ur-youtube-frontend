import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { analysisState } from '@/recoil/atom';

import LoaderPage from '@/components/loader-page/loader-page';

import Navbar from './navbar';
import AdviceCard from './advice-card';
import BarGraph from './bar-graph';
import CommentCard from './comment-card';
import AnalysisCard from './analysis-card';

const exampleComments = [
  {
    user: '정지윤',
    comment:
      '예제 댓글입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리',
  },
  {
    user: '백윤재',
    comment:
      '예제 댓글입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리',
  },
  {
    user: '최원준',
    comment:
      '예제 댓글입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리',
  },
  {
    user: '이균서',
    comment:
      '예제 댓글입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리',
  },
];

const exampleAdvice =
  '2023년 유튜브의 동향은 시청자와 창작자 중심의 참여, AI 기반 기술의 부상, 라이브 스트리밍의 중요성, 기술 및 게임 콘텐츠의 인기, 그리고 다양한 비디오 형식에 초점을 맞추고 있습니다.생성적 AI 도구에 대한 관심이 크게 증가하여 17억 회 이상의 조회수를 기록했으며, 라이브 스트리밍은 실시간 상호작용 및 커뮤니티 구축을 위해 중요한 역할을 하고 있습니다.유튜브는 여전히 기술 애호가와 게이머들에게 주요 목적지이며, 짧은 형식의 콘텐츠와 다양한 형식의 비디오가 두드러진 추세입니다​';

const AuyPage = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const analysisData = useRecoilValue(analysisState);

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
  useEffect(() => {
    const SSE_URL =
      'https://port-0-analyze-ur-youtube-backend-3szcb0g2blp9bp0ek.sel5.cloudtype.app/stream_analyze?url=https://www.youtube.com/watch?v=tnSUTDcKhPU';
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
    };
    sseEventSource.onerror = (event) => {
      console.log(`SSE 에러 ${event.target}`);
      console.log(`이때까진 쌓인 데이터: ${example}`);
      sseEventSource.close();
    };
    return () => {
      sseEventSource.close();
    };
  }, []);

  return (
    <div className="flex flex-col bg-base-200">
      <Navbar />
      {/** 모달 */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isModalOpen}
        readOnly
      />
      <div className="modal bg-neutral-50" role="dialog">
        <div className="modal-box w-4/5 h-[30rem]">
          <LoaderPage />
        </div>
      </div>

      {/** 분석 페이지 */}
      <div className="px-4 lg:px-80">
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
            <BarGraph />
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
