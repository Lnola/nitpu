import styled from 'styled-components';

const StyledTypingInput = styled.section`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryLight};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2%;
`;

const StyledFeedTape = styled.div`
  font-size: 2rem;
  height: 2.4rem;
  overflow: hidden;
`;

export { StyledTypingInput, StyledInput, StyledFeedTape };
