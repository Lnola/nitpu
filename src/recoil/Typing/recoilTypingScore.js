import { atom } from 'recoil';

export const recoilTypingScore = atom({
  key: 'typingScore',
  default: {
    total: 0,
    correct: 0,
  },
});
