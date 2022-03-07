import shuffle from 'shuffle-array';
import text from 'constants/Typing/text';

export const getText = () => {
  console.log(text);
  return shuffle(text);
};
