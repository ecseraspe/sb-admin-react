import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Charts from './containers/Charts';

const RootRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/charts" component={Charts} />
    </Switch>
  )
}

export default RootRoutes;