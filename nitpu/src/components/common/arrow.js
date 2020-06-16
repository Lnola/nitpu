import React from "react";
import Flex from "../styled/Flex";
import { arrowRotations } from "../../constants/arrowRotations";
import { css } from "styled-components";

const ArrowBlockCss = css`
  background-color: red;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 5px;
`;

const Arrow = ({ rotation }) => {
  return <Flex css={ArrowBlockCss}>{arrowRotations[rotation]}</Flex>;
};

export default Arrow;
