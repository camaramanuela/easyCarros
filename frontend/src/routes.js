import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Login';
import ListCars from './pages/ListCars';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/carros" component={ListCars} />
      </Switch>
    </BrowserRouter>
  );
}