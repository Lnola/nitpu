import { css } from 'styled-components';

export const TileBlockCss = css`
  background-color: ${({ wasVisited }) => (wasVisited ? '#ff9165' : '#65ff7a')};
  height: 100px;
  width: 100px;
  font-size: 45px;
  color: ${({ theme }) => theme.primaryLight};
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 7px;
`;
