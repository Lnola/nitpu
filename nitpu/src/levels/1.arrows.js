import React from "react";

import { rotations } from "../constants/rotations";
import Arrow from "../components/common/arrow";
import Flex from "../components/styled/Flex";
import { determineArrowRotation } from "../utils/determineArrowRotation";

const Arrows = () => {
  const array = new Array(5).fill(new Array(5).fill(0));

  return (
    <Flex wrap="wrap">
      {array.map((row, rowIndex) => (
        <Flex key={rowIndex} width="100%">
          {row.map((column, columnIndex) => (
            <Arrow
              key={columnIndex}
              rotation={determineArrowRotation(rowIndex, columnIndex)}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Arrows;
