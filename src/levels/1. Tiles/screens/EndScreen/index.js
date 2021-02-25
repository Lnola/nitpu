import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { StyledTitle, StyledCaption, StyledWrapper } from './index.styled';
import StyledButton from 'components/styled/Button';

import { recoilTiles } from '../../../../recoil/Tiles/recoilTiles';

const EndScreen = () => {
  const history = useHistory();

  const setTiles = useSetRecoilState(recoilTiles);

  const handleRestart = () => {
    setTiles([]);
    history.push('/1');
  };

  return (
    <StyledWrapper>
      <StyledTitle>
        You won!
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </StyledTitle>
      <StyledCaption>Press the restart button if you want to play again!</StyledCaption>
      <StyledButton onClick={handleRestart} size="1.5rem">
        Restart
      </StyledButton>
    </StyledWrapper>
  );
};

export default EndScreen;
