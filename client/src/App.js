import React from "react";
import { Router, Route, browserHistory } from 'react-router'

import Signup from "./components/Signup";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
