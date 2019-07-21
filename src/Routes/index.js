import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../Views/IndexView';
import NotFound from '../Views/NotFoundView'
import GeneratedResults from "../Views/GeneratedResultsView";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/generated" exact component={GeneratedResults} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
