import React from "react";

import Tile from "../components/common/Tile";
import Flex from "../components/styled/Flex";
import { determineTileType } from "../utils/determineTileType";
import { setTiles } from "../utils/setTiles";
import { useRecoilState } from "recoil";
import { recoilDotTile } from "../recoil/recoilDotTile";
import { recoilNumberOfTiles } from "../recoil/recoilNumberOfTiles";

const Tiles = () => {
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
            <Tile
              key={columnIndex}
              rotation={determineTileType(column, dotTile)}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Tiles;
