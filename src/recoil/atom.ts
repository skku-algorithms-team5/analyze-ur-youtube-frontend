import { atom } from 'recoil';

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

export type analysisType = {
  posRatio: number;
  negRatio: number;
  analysis: string;
  advice: string;
  repreComments: string[];
  posComments: string[];
  negComments: string[];
  // positiveCommentRate: number,
};

export const analysisState = atom<analysisType>({
  key: 'analysisState',
  default: {
    posRatio: 0.7,
    negRatio: 0.3,
    analysis: '댓글을 분석중 입니다...',
    advice: '댓글을 분석중 입니다...',
    repreComments: [
      'repre 댓글을 분석 중입니다... 1',
      'repre 댓글을 분석 중입니다... 2',
    ],
    posComments: [
      '긍정 댓글을 분석중 입니다... 1',
      '긍정 댓글을 분석중 입니다... 2',
    ],
    negComments: [
      '부정 댓글을 분석중 입니다... 1',
      '부정 댓글을 분석중 입니다... 2',
    ],
    // positiveCommentRate: 0,
  },
});
