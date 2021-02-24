import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { getText } from 'utils/Typing/getText';

import { recoilTypingScore } from 'recoil/Typing/recoilTypingScore';
import { recoilTypingTimer } from 'recoil/Typing/recoilTypingTimer';

const TypingInput = () => {
  const history = useHistory();

  const setScore = useSetRecoilState(recoilTypingScore);
  const [timer, setTimer] = useRecoilState(recoilTypingTimer);

  const [text, setText] = useState();
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);
  const [timerInterval, setTimerInterval] = useState();

  const handleTyping = ({ target }) => {
    setInput(target.value.replace(/\s/g, ''));
    if (!started) {
      setStarted(true);
      setTimerInterval(
        setInterval(() => {
          setTimer(t => t + 1);
        }, 1000),
      );
    }
  };

  const handleWordSubmit = ({ key }) => {
    if (key === 'Enter' || key === ' ') {
      if (input === text[0]) {
        setScore(prevState => ({ ...prevState, correct: prevState.correct + 1 }));
      }

      text.shift();
      setInput('');
      setScore(prevState => ({ ...prevState, total: prevState.total + 1 }));
    }
  };

  useEffect(() => {
    setText(getText());
  }, []);

  useEffect(() => {
    if (timer === 30) {
      setTimer(0);
      clearInterval(timerInterval);
      history.push('/2/end-screen');
    }
  }, [timer, history, timerInterval, setTimer]);

  return (
    <>
      <input type="text" value={input} onChange={handleTyping} onKeyUp={handleWordSubmit} autoFocus />
      <div>
        {text?.map((word, index) => (
          <span key={index}> {word}</span>
        ))}
      </div>
    </>
  );
};

export default TypingInput;
