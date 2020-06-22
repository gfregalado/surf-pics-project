import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.less';
import LandingPage from './Views/LandingPage/LandingPage';
import Signup from './Views/Authentication/Signup/Signup';
import Login from './Views/Authentication/Login/Login';
import Upload from './Views/Upload/Upload';

import FirebaseSDK from './Services/Firebase';
import firebase from 'firebase';

import { createUser } from './Services/authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
    };
  }

  componentDidMount() {
    firebase.initializeApp(FirebaseSDK);
  }

  createNewFirebaseUser = async (
    email,
    password,
    firstName,
    lastName,
    userType
  ) => {
    try {
      await firebase
        .auth()
        //Creates the user in Firebase
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          //Creates the user in MongoDB & Updates state
          createUser(email, firstName, lastName, userType);
          this.setState({ loggedInUser: true });
          this.props.history.push('/');
        })
        .catch((error) => console.log(error));
    } catch (error) {
      alert(error);
    }
  };

  loginFirebaseUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        this.setState({ loggedInUser: true });
        this.props.history.push('/');
      })
      .catch((err) => alert(err));
  };

  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <LandingPage loggedInUser={this.state.loggedInUser} {...props} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              createNewFirebaseUser={this.createNewFirebaseUser}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login loginFirebaseUser={this.loginFirebaseUser} {...props} />
          )}
        />
        <Route exact path="/upload" render={(props) => <Upload {...props} />} />
      </Switch>
    );
  }
}

export default withRouter(App);
