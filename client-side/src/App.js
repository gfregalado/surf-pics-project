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
    this.state = {};
  }
  componentDidMount() {
    firebase.initializeApp({
      FirebaseSDK,
    });
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    );
  }
}

export default App;
