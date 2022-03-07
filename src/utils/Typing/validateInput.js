export const validateInput = (key, input, setInput, setScore, text, setIsInputValid) => {
  if (key === 'Enter' || key === ' ') {
    if (input === text[0]) {
      setScore(prevState => ({ ...prevState, correct: prevState.correct + 1 }));
    }

    text.shift();
    setInput('');
    setScore(prevState => ({ ...prevState, total: prevState.total + 1 }));
    setIsInputValid();
  } else {
    if (input === text[0]) setIsInputValid(true);
    else if (text[0].substring(0, input.length) === input) setIsInputValid();
    else setIsInputValid(false);
  }
};
