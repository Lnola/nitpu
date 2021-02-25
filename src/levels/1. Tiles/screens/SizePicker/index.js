import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { StyledForm, StyledInput } from './index.styled';
import StyledButton from 'components/styled/Button';

import { createRandomDotTile } from '../../../../utils/Tiles/setRandomDotTile';

import { recoilDotTile } from '../../../../recoil/Tiles/recoilDotTile';
import { recoilNumberOfTiles } from '../../../../recoil/Tiles/recoilNumberOfTiles';

const SizePicker = () => {
  const history = useHistory();

  const [numberOfTiles, setNumberOfTiles] = useRecoilState(recoilNumberOfTiles);
  const setDotTile = useSetRecoilState(recoilDotTile);

  const handleSubmit = e => {
    e.preventDefault();

    if (+numberOfTiles > 2) {
      setNumberOfTiles(+numberOfTiles);
      createRandomDotTile(setDotTile, +numberOfTiles);
      history.push('/1/tile-board');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="number"
        placeholder="Can't be < 3"
        value={numberOfTiles}
        onChange={({ target }) => setNumberOfTiles(target.value)}
        autoFocus
      />
      <StyledButton size="1.5rem" type="submit">
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default SizePicker;
