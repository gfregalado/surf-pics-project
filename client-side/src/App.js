import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Views/LandingPage/LandingPage';
import Signup from './Views/Authentication/Signup/Signup';
import FirebaseSDK from './Services/Firebase';
import firebase from 'firebase';

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

  createNewFirebaseUser = async (email, password) => {
    try {
      let resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      this.setState({ loggedInUser: resp.user });
    } catch (error) {
      alert(error);
    }
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
      </Switch>
    );
  }
}

export default App;
