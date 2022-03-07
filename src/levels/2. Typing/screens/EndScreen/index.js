import React from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import StyledButton from 'components/styled/Button';
import { StyledTitle } from './index.styled';
import { StyledScore, StyledScoresWrapper } from 'levels/2. Typing/components/Scores/index.styled';

import { recoilTypingScore } from 'recoil/Typing/recoilTypingScore';

const EndScreen = () => {
  const history = useHistory();

  const [score, setScore] = useRecoilState(recoilTypingScore);

  const handleRestart = () => {
    setScore({ total: 0, correct: 0 });
    history.push('/2');
  };

  return (
    <>
      <StyledTitle>
        Game over, well done!
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </StyledTitle>

      <StyledScoresWrapper>
        <StyledScore>
          <h3>{score.total}</h3>
          <p>Total</p>
        </StyledScore>
        <StyledScore>
          <h3>{score.correct}</h3>
          <p>Correct</p>
        </StyledScore>
        <StyledScore>
          <h3>{score.total !== 0 ? ((score.correct / score.total) * 100).toFixed(2) : 0}%</h3>
          <p>Percent</p>
        </StyledScore>
      </StyledScoresWrapper>

      <StyledButton onClick={handleRestart} size="1.5rem">
        Restart
      </StyledButton>
    </>
  );
};

export default EndScreen;
