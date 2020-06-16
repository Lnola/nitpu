import React from "react";
import Flex from "../styled/Flex";
import { tileType } from "../../constants/tileType";
import { css } from "styled-components";

const TileBlockCss = css`
  background-color: red;
  height: 100px;
  width: 100px;
  font-size: 45px;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 5px;
`;

const Tile = ({ rotation }) => {
  return <Flex css={TileBlockCss}>{tileType[rotation]}</Flex>;
};

export default Tile;
