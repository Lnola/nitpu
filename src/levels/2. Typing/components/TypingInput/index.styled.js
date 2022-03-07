import styled from 'styled-components';
import { css } from 'styled-components';

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
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2%;
  border-bottom: 0.5rem dashed ${({ theme }) => theme.primaryLight};
  padding: 0.5rem 0;

  color: ${({ theme }) => theme.primaryLight};
  ${({ isInputValid }) => (isInputValid ? validInputCss : isInputValid !== undefined && invalidInputCss)};
`;

const validInputCss = css`
  color: ${({ theme }) => theme.green};
`;

const invalidInputCss = css`
  text-decoration: line-through;
  color: ${({ theme }) => theme.salmon};
`;

const StyledFeedTape = styled.div`
  font-size: 2rem;
  height: 2.4rem;
  overflow: hidden;
`;

export { StyledTypingInput, StyledInput, StyledFeedTape };
