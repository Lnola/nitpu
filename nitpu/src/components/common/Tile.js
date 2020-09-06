import React from "react";
import Flex from "../styled/Flex";
import { tileType } from "../../constants/tileType";
import { css } from "styled-components";
import { useRecoilState } from "recoil";
import { recoilDotTile } from "../../recoil/recoilDotTile";
import { setRandomDotTile } from "../../utils/setRandomDotTile";
import { recoilNumberOfTiles } from "../../recoil/recoilNumberOfTiles";
import { recoilVisitedDotTiles } from "../../recoil/recoilVisitedDotTiles";

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

const Tile = ({ rotation, tile }) => {
  const [numberOfTiles] = useRecoilState(recoilNumberOfTiles);
  const [dotTile, setDotTile] = useRecoilState(recoilDotTile);
  const [visitedDotTiles, setVisitedDotTiles] = useRecoilState(
    recoilVisitedDotTiles
  );

  const handleTileClick = () => {
    if (dotTile.row === tile.row && dotTile.column === tile.column) {
      setVisitedDotTiles((visitedDotTiles) => [...visitedDotTiles, tile]);
      setRandomDotTile(setDotTile, numberOfTiles, visitedDotTiles);
    }
  };

  return (
    <Flex css={TileBlockCss} onClick={handleTileClick}>
      {tileType[rotation]}
    </Flex>
  );
};

export default Tile;
