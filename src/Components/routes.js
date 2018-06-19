import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/pokemon/:id" component={Pokemon}/>
  </Switch>
)