import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const button = css`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 10px 15px;
  border-radius: 9px;
  color: #fff;
  background: #80d0c7;
  font-weight: 900;
  text-transform: uppercase;
`;

const StyledButton = styled.button`
  ${button}
`;

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
  ${button}
`;

export default StyledButton;
