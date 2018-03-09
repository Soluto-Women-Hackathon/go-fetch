import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AdoptProfile from './pages/profile/AdoptProfile';
import Login from './pages/Login';

const NoMatch = () => 'no match :(';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />}/>
      <Route path="/login" component={Login}/>
      <Route path="/adopt" component={AdoptProfile} />
      <Route component={NoMatch}/>
    </Switch>
  </Router>
);
