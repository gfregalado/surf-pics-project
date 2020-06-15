import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Views/LandingPage/LandingPage';
import Signup from './Views/Authentication/Signup/Signup';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/Signup" component={Signup} />
    </Switch>
  );
}

export default App;
