import React from "react";
import { useRecoilState } from "recoil";

import Flex from "../../styled/Flex";
import { TileBlockCss } from "./index.styled";

import { getDotTile } from "../../../utils/Tiles/getDotTile";
import { setTileAsVisited } from "../../../utils/Tiles/setTileAsVisited";
import { setRandomDotTile } from "../../../utils/Tiles/setRandomDotTile";

import { tileType } from "../../../constants/tileType";
import { recoilTiles } from "../../../recoil/Tiles/recoilTiles";

const Tile = ({ rotation, tile }) => {
  const [tiles, setTiles] = useRecoilState(recoilTiles);
  const dotTile = getDotTile(tiles);

  const handleTileClick = () => {
    if (tile.row === dotTile.row && tile.column === dotTile.column) {
      setTileAsVisited(setTiles);
      setRandomDotTile(tiles, setTiles);
    }
  };

  return (
    <Flex
      css={TileBlockCss}
      wasVisited={tile.wasVisited}
      onClick={handleTileClick}
    >
      {tileType[rotation]}
    </Flex>
  );
};

export default Tile;
