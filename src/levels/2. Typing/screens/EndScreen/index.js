import React from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

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
      <p>Win</p>
      <article>
        <h2>{score.total}</h2>
        <p>Total</p>
      </article>
      <article>
        <h2>{score.correct}</h2>
        <p>Correct</p>
      </article>
      <article>
        <h2>{score.total !== 0 ? ((score.correct / score.total) * 100).toFixed(2) : 0}%</h2>
        <p>Percent</p>
      </article>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default EndScreen;
