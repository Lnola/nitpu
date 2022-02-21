import styled, { keyframes } from 'styled-components';

const checkFalse = keyframes`
  0% {
      color: #ffffff;
  }

  1% {
      color: #ff9165;
  }

  100% {
      color: #ff9165;
  }
`;

const checkTrue = keyframes`
  0% {
      color: #ffffff;
  }

  1% {
      color: #65ff7a;
  }

  100% {
      color: #65ff7a;
  }
`;

const StyledTypingTitle = styled.header`
  animation: ${checkFalse} 2s ease-in-out 1s, ${checkFalse} 2s ease-in-out 6s, ${checkTrue} 2s ease-in-out 10s;
  margin-top: -5%;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
`;

export { StyledTypingTitle };
