import React from 'react';
import { useRecoilState } from 'recoil';

import { recoilTypingScore } from 'recoil/Typing/recoilTypingScore';
import { recoilTypingTimer } from 'recoil/Typing/recoilTypingTimer';

const Scores = () => {
  const [score] = useRecoilState(recoilTypingScore);
  const [timer] = useRecoilState(recoilTypingTimer);

  return (
    <>
      <article>
        <h2>{score.total}</h2>
        <p>Total</p>
      </article>
      <article>
        <h2>{score.correct}</h2>
        <p>Correct</p>
      </article>
      <article>
        <h2>{timer}</h2>
        <p>Timer</p>
      </article>
    </>
  );
};

export default Scores;
