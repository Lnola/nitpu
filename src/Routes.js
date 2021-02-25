import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeScreen from 'levels/index';
import Tiles from 'levels/1. Tiles';
import Typing from 'levels/2. Typing';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/1" component={Tiles} />
      <Route exact path="/2" component={Typing} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
