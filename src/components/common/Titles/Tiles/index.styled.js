import styled, { keyframes } from 'styled-components';

const moveUpDown = keyframes`
  0%, 100% {
      top: 0;
    }
    50% {
      top: 10%;
    }
`;

export const StyledTitle = styled.span`
  margin-top: -5%;
  font-size: 10rem;
  font-weight: 900;
  display: flex;
  letter-spacing: 1rem;
  color: ${({ theme }) => theme.primaryLight};
`;

export const StyledI = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  letter-spacing: 0;

  &::before {
    content: '';
    background: ${({ background, theme }) => background || theme.green};
    position: absolute;
    padding: 1rem;
    border-radius: 0.3rem;

    animation: ${moveUpDown} 3s ease-in-out infinite;
  }
`;
