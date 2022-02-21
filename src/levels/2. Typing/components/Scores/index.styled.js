import styled from 'styled-components';

const StyledScoresWrapper = styled.section`
  display: flex;
  margin-bottom: 2%;
`;

const StyledScore = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  & > h3 {
    font-size: 2rem;
    margin: 0;
  }
`;

const StyledTimer = styled.h3`
  ${({ isEnding }) => isEnding && 'color: red;'}
`;

export { StyledScoresWrapper, StyledScore, StyledTimer };
