import { css } from "styled-components";

export const TileBlockCss = css`
  background-color: ${({ wasVisited }) => (wasVisited ? "green" : "red")};
  height: 100px;
  width: 100px;
  font-size: 45px;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 5px;
`;
