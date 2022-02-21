import React from 'react';
import { useRecoilState } from 'recoil';

import { recoilTypingScore } from 'recoil/Typing/recoilTypingScore';
import { recoilTypingTimer } from 'recoil/Typing/recoilTypingTimer';
import { StyledScoresWrapper, StyledScore, StyledTimer } from './index.styled';

const Scores = () => {
  const [score] = useRecoilState(recoilTypingScore);
  const [timer] = useRecoilState(recoilTypingTimer);

  return (
    <StyledScoresWrapper>
      <StyledScore>
        <StyledTimer isEnding={timer <= 10}>{timer}</StyledTimer>
        <p>Timer</p>
      </StyledScore>

      <StyledScore>
        <h3>{score.total}</h3>
        <p>Total</p>
      </StyledScore>

      <StyledScore>
        <h3>{score.correct}</h3>
        <p>Correct</p>
      </StyledScore>
    </StyledScoresWrapper>
  );
};

export default Scores;
