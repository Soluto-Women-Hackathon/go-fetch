import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import AdoptProfile from './pages/profile/AdoptProfile';
const NoMatch = () => 'no match :(';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/adopt" component={AdoptProfile} />
      <Route component={NoMatch}/>
    </Switch>
  </Router>
);
