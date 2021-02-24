import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Tiles from 'levels/1. Tiles';
import Typing from 'levels/2. Typing';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route exact path="/1" component={Tiles} />
          <Route exact path="/2" component={Typing} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
