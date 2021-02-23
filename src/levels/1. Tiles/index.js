import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SizePicker from "./screens/SizePicker";
import TileBoard from "./screens/TileBoard";
import EndScreen from "./screens/EndScreen";

const Tiles = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SizePicker} />
        <Route exact path="/tile-board" component={TileBoard} />
        <Route exact path="/end-screen" component={EndScreen} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Tiles;
