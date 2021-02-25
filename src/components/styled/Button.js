import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const button = css`
  display: inline-block;
  margin: 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryLight};
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 800;
  font-size: ${({ size }) => size};

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  ${button}
`;

export const StyledButtonLink = styled(Link)`
  ${button}
`;

export default StyledButton;
