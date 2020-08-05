import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.less';
import Navbar from './Components/Navigation/Navbar';
import LandingPage from './Views/LandingPage/LandingPage';
import Signup from './Views/Authentication/Signup/Signup';
import Login from './Views/Authentication/Login/Login';
import Upload from './Views/Upload/Upload';
import Browse from './Views/Browse/Browse';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <LandingPage user={this.state.user} {...props} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/upload"
            render={(props) => <Upload {...props} />}
          />
          <Route
            exact
            path="/browse"
            render={(props) => <Browse {...props} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
