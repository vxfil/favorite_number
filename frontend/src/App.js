import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavbarComponent } from './components/NavbarComponent';
import { Main } from './pages/Main';
import { Voting } from './pages/Voting';
import { Logs } from './pages/Logs';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/voting" component={Voting} />
          <Route path="/logs" component={Logs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
