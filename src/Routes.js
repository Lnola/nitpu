import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeScreen from 'levels/index';
import Tiles from 'levels/1. Tiles';
import Typing from 'levels/2. Typing';
import Titles from 'components/common/Titles';
import { StyledContainer } from 'index.styled';

const Routes = () => {
  return (
    <StyledContainer>
      <Titles />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/1" component={Tiles} />
        <Route exact path="/2" component={Typing} />
        <Redirect to="/" />
      </Switch>
    </StyledContainer>
  );
};

export default Routes;
