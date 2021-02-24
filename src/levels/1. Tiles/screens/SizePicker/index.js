import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { createRandomDotTile } from '../../../../utils/Tiles/setRandomDotTile';

import { recoilDotTile } from '../../../../recoil/Tiles/recoilDotTile';
import { recoilNumberOfTiles } from '../../../../recoil/Tiles/recoilNumberOfTiles';

const SizePicker = () => {
  const history = useHistory();

  const [numberOfTiles, setNumberOfTiles] = useRecoilState(recoilNumberOfTiles);
  const setDotTile = useSetRecoilState(recoilDotTile);

  const handleSubmit = e => {
    e.preventDefault();

    setNumberOfTiles(+numberOfTiles);
    createRandomDotTile(setDotTile, +numberOfTiles);
    history.push('/1/tile-board');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" value={numberOfTiles} onChange={({ target }) => setNumberOfTiles(target.value)} />
        <input type="submit" />
      </form>
    </>
  );
};

export default SizePicker;
