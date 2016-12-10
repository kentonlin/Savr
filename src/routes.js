import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Signup from './signup';


// Route Path is always your main display
// Nested in the Path are the children needed to change
export default (
  <Route>
    <Route path="signup" component={Signup} />
    <Route path="/" component={App} />
  </Route>
);
