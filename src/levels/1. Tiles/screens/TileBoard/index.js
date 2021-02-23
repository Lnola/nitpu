import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import Tile from '../../../../components/common/Tile';
import Flex from '../../../../components/styled/Flex';

import { getDotTile } from '../../../../utils/Tiles/getDotTile';
import { createTiles } from '../../../../utils/Tiles/createTiles';
import { determineTileType } from '../../../../utils/Tiles/determineTileType';
import { areAllTilesVisited } from '../../../../utils/Tiles/areAllTilesVisited';

import { recoilNumberOfTiles } from '../../../../recoil/Tiles/recoilNumberOfTiles';
import { recoilTiles } from '../../../../recoil/Tiles/recoilTiles';
import { recoilDotTile } from '../../../../recoil/Tiles/recoilDotTile';

const TileBoard = () => {
  const history = useHistory();

  const [numberOfTiles] = useRecoilState(recoilNumberOfTiles);
  const [tiles, setTiles] = useRecoilState(recoilTiles);
  const [dotTile] = useRecoilState(recoilDotTile);

  useEffect(() => {
    setTiles(createTiles(dotTile, numberOfTiles));
  }, [setTiles, dotTile, numberOfTiles]);

  useEffect(() => {
    if (areAllTilesVisited(tiles)) {
      history.push('/end-screen');
    }
  }, [tiles, history]);

  return (
    <Flex wrap="wrap">
      {tiles.map((row, rowIndex) => (
        <Flex key={rowIndex} width="100%">
          {row.map((column, columnIndex) => (
            <Tile key={columnIndex} rotation={determineTileType(column, getDotTile(tiles))} tile={column} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default TileBoard;
