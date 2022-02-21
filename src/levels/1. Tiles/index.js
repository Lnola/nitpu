import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SizePicker from './screens/SizePicker';
import TileBoard from './screens/TileBoard';
import EndScreen from './screens/EndScreen';

const Tiles = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/1" component={SizePicker} />
        <Route exact path="/1/tile-board" component={TileBoard} />
        <Route exact path="/1/end-screen" component={EndScreen} />
        <Redirect to="/1" />
      </Switch>
    </BrowserRouter>
  );
};

export default Tiles;
