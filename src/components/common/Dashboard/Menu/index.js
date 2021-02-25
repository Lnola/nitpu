import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu } from './index.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <span role="img" aria-label="home">
          &#127969;
        </span>
        Home
      </Link>
      <Link to="/1">
        <span role="img" aria-label="tiles">
          &#10060;
        </span>
        Tiles
      </Link>
      <Link to="/2">
        <span role="img" aria-label="typing-speed">
          &#128187;
        </span>
        Typing Speed
      </Link>
    </StyledMenu>
  );
};
export default Menu;
