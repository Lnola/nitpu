import React from 'react';
import { useLocation } from 'react-router-dom';

import Tiles from './Tiles';
import Typing from './Typing';

const Titles = () => {
  const { pathname } = useLocation();

  switch (+pathname.split('/')[1]) {
    case 1:
      return <Tiles />;
    case 2:
      return <Typing />;
    default:
      return null;
  }
};

export default Titles;
