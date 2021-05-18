import React, { useEffect, useState } from 'react';

import { StyledTitle, StyledI } from './index.styled';

import { rotations } from 'constants/Tiles/rotations';
import { tileType } from 'constants/Tiles/tileType';

const Tiles = () => {
  const [background, setBackground] = useState();

  useEffect(() => {
    setInterval(() => {
      // console.log(Object.keys(rotations)[Math.floor(Math.random() * 5)]);
    }, 3000);
  }, []);
  console.log(tileType['right'].props);

  return (
    <StyledTitle>
      T<StyledI background={background}>ı</StyledI>les
    </StyledTitle>
  );
};

export default Tiles;
