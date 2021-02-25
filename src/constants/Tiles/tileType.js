import React from 'react';

export const tileType = {
  right: <span>&rarr;</span>,
  left: <span>&larr;</span>,
  up: <span>&uarr;</span>,
  down: <span>&darr;</span>,
  dot: (
    <span role="img" aria-label="tiles">
      &#10060;
    </span>
  ),
  w: <span>W</span>,
  i: <span>I</span>,
  n: <span>N</span>,
  none: <span></span>,
};
