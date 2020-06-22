import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.less';
import LandingPage from './Views/LandingPage/LandingPage';
import Signup from './Views/Authentication/Signup/Signup';
import FirebaseSDK from './Services/Firebase';
import firebase from 'firebase';
import Login from './Views/Authentication/Login/Login';
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
          //Creates the user in MongoDB
          createUser(email, firstName, lastName, userType);
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
        this.props.history.push('/');
      })
      .catch((err) => alert(err));
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
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
      </Switch>
    );
  }
}

export default withRouter(App);
