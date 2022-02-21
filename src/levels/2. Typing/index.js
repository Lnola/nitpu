import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import TypingSpeed from './screens/TypingSpeed';
import EndScreen from './screens/EndScreen';

const Typing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/2" component={TypingSpeed} />
        <Route exact path="/2/end-screen" component={EndScreen} />
        <Redirect to="/2" />
      </Switch>
    </BrowserRouter>
  );
};

export default Typing;
