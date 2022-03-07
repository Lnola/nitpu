import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { StyledInput, StyledTypingInput, StyledFeedTape } from './index.styled';

import { getText } from 'utils/Typing/getText';
import { validateInput } from 'utils/Typing/validateInput';

import { recoilTypingScore } from 'recoil/Typing/recoilTypingScore';
import { recoilTypingTimer } from 'recoil/Typing/recoilTypingTimer';

const TypingInput = () => {
  const history = useHistory();

  const setScore = useSetRecoilState(recoilTypingScore);
  const [timer, setTimer] = useRecoilState(recoilTypingTimer);

  const [text, setText] = useState();
  const [input, setInput] = useState('');
  const [isInputValid, setIsInputValid] = useState();
  const [started, setStarted] = useState(false);
  const [timerInterval, setTimerInterval] = useState();

  const handleTyping = ({ target }) => {
    setInput(target.value.replace(/\s/g, ''));
    if (!started) {
      setStarted(true);
      setTimerInterval(
        setInterval(() => {
          setTimer(t => t - 1);
        }, 1000),
      );
    }
  };

  const handleKeyPress = ({ key }) => {
    validateInput(key, input, setInput, setScore, text, setIsInputValid);
  };

  useEffect(() => {
    setText(getText());
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimer(60);
      clearInterval(timerInterval);
      history.push('/2/end-screen');
    }
  }, [timer, history, timerInterval, setTimer]);

  return (
    <StyledTypingInput>
      <StyledInput
        type="text"
        value={input}
        isInputValid={isInputValid}
        onChange={handleTyping}
        onKeyUp={handleKeyPress}
        autoFocus
      />
      <StyledFeedTape>
        {text?.map((word, index) => (
          <span key={index}> {word}</span>
        ))}
      </StyledFeedTape>
    </StyledTypingInput>
  );
};

export default TypingInput;
