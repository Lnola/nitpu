import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { recoilTiles } from '../../../../recoil/Tiles/recoilTiles';

const EndScreen = () => {
  const history = useHistory();

  const setTiles = useSetRecoilState(recoilTiles);

  const handleRestart = () => {
    setTiles([]);
    history.push('/1');
  };

  return (
    <>
      <p>Win</p>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default EndScreen;
