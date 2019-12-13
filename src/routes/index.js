import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Message from '../pages/Message';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Message} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
