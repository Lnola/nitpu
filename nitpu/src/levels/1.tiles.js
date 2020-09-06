import React, { useEffect } from "react";

import Tile from "../components/common/Tile";
import Flex from "../components/styled/Flex";
import { determineTileType } from "../utils/determineTileType";
import { setTiles } from "../utils/setTiles";
import { useRecoilState } from "recoil";
import { recoilDotTile } from "../recoil/recoilDotTile";
import { recoilNumberOfTiles } from "../recoil/recoilNumberOfTiles";
import { setRandomDotTile } from "../utils/setRandomDotTile";

const Tiles = () => {
  const [numberOfTiles] = useRecoilState(recoilNumberOfTiles);
  const [dotTile, setDotTile] = useRecoilState(recoilDotTile);

  useEffect(() => {
    setRandomDotTile(setDotTile, numberOfTiles);
  }, [setDotTile, numberOfTiles]);

  const array = setTiles(dotTile, numberOfTiles);

  console.log(array);

  return (
    <Flex wrap="wrap">
      {array.map((row, rowIndex) => (
        <Flex key={rowIndex} width="100%">
          {row.map((column, columnIndex) => (
            <Tile
              key={columnIndex}
              rotation={determineTileType(column, dotTile)}
              tile={column}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default Tiles;
