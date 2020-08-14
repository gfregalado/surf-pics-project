import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.less';
import Navbar from './Components/Navigation/Navbar';
import LandingPage from './Views/LandingPage/LandingPage';
import Signup from './Views/Authentication/Signup/Signup';
import Login from './Views/Authentication/Login/Login';
import Upload from './Views/Upload/Upload';
import Browse from './Views/Browse/Browse';

import { sessionPersist } from './Services/authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  updateUser = (user) => {
    const { email } = user;
    window.sessionStorage.setItem('userEmail', email);
    this.setState({
      user,
    });
  };

  checkUser() {
    const email = window.sessionStorage.getItem('userEmail');
    if (email) {
      sessionPersist(email).then((user) => {
        this.setState({
          user,
        });
      });
    }
  }

  // componentDidMount() {
  //   this.checkUser();
  // }

  // componentDidUpdate() {
  //   if (this.state.user === null) this.checkUser();
  // }

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
            render={(props) => (
              <Signup updateUser={this.updateUser} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login updateUser={this.updateUser} {...props} />
            )}
          />
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
