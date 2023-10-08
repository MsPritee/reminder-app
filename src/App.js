
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Protected from './components/Protected';
import Signup from './components/Signup';


function App() {


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>

          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/protected" component={Protected} />
          <Route path="/signup" component={Signup} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
