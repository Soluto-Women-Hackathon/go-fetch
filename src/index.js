import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const NoMatch = () => 'no match :(';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
);

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();
