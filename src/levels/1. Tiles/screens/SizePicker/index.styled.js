import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  color: transparent;
  text-shadow: 0 0 0 ${({ theme }) => theme.primaryLight};
  border: none;
  text-decoration: underline;
  line-height: 5px;
  font-size: 6rem;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.primaryLight};
    opacity: 0.5;
  }
`;
