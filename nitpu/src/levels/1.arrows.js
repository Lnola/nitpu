import React from "react";

import Arrow from "../components/common/arrow";
import Flex from "../components/styled/Flex";
import { determineArrowRotation } from "../utils/determineArrowRotation";
import { setTiles } from "../utils/setTiles";
import { useRecoilState } from "recoil";
import { recoilDotTile } from "../recoil/recoilDotTile";
import { recoilNumberOfTiles } from "../recoil/recoilNumberOfTiles";

const Arrows = () => {
  const [numberOfTiles] = useRecoilState(recoilNumberOfTiles);
  const [dotTile] = useRecoilState(recoilDotTile);
  dotTile.row = Math.floor(Math.random() * numberOfTiles);
  dotTile.column = Math.floor(Math.random() * numberOfTiles);

  const array = setTiles(dotTile, numberOfTiles);

  return (
    <Flex wrap="wrap">
      {array.map((row, rowIndex) => (
        <Flex key={rowIndex} width="100%">
          {row.map((column, columnIndex) => (
            <Arrow
              key={columnIndex}
              rotation={determineArrowRotation(column, dotTile)}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Arrows;
