import React from 'react';
import TypeAnimation from 'react-type-animation';

import { StyledTypingTitle } from './index.styled';

const Typing = () => {
  return (
    <StyledTypingTitle>
      <TypeAnimation
        cursor={true}
        sequence={['Typing seed', 2000, 'Typing ', 2000, 'Typing sped', 2000, 'Typing ', 2000, 'Typing speed', 2000]}
        wrapper="h1"
      />
    </StyledTypingTitle>
  );
};

export default Typing;
