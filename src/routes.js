// src/routes.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';

export default (
  <Switch>
    <Route exact path="/" component={HomeView} />
  </Switch>
);
