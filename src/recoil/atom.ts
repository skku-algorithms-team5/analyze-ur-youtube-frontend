import { atom } from 'recoil';

export type analysisType = {
  analysis: string;
  advice: string;
  repreComment: string;
  posComments: string[];
  negComments: string[];
  // positiveCommentRate: number,
};

export const analysisState = atom<analysisType>({
  key: 'analysisState',
  default: {
    analysis: 'example analysis',
    advice: 'example advice',
    repreComment: '',
    posComments: ['example pos comment 1', 'example pos comment 2'],
    negComments: ['example neg comment 1', 'example neg comment 2'],
    // positiveCommentRate: 0,
  },
});
