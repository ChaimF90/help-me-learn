import React, { Component } from 'react';
import NavBar from './components/common/combos/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/screens/Signup/Container';
import Verify from './components/screens/Verify/Container';
import Bookings from './components/screens/Bookings/Container';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact={true} path={'/'} component={Bookings} />
            <Route path={'/signup'} component={Signup} />
            <Route path={'/verify/:token'} component={Verify} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
