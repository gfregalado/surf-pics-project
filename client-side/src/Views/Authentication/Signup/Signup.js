import React, { Component } from 'react';
import Classes from './Signup.module.css';
import Switch from '@material-ui/core/Switch';

class Signup extends Component {
  state = {
    checkedB: true,
  };

  //   imageDisplayHandler = this.state.checkedB
  //     ? Classes.ImagePhotographer
  //     : Classes.ImageSurfer;

  ImageDisplayed = Classes.ImageSurfer;

  handleImageChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
    if (this.state.checkedB) {
      this.ImageDisplayed = Classes.ImagePhotographer;
    } else {
      this.ImageDisplayed = Classes.ImageSurfer;
    }
  };

  render() {
    return (
      <div className={Classes.SignupBox}>
        <div className={Classes.Form}>
          <form>
            <label For="FirstName">First Name</label>
            <input type="text" name="FirstName" placeholder="John"></input>
            <label For="LastName">Last Name</label>
            <input type="text" name="LastName" placeholder="Doe"></input>
            <label For="LastName">Email</label>
            <input
              type="email"
              name="Email"
              placeholder="john.doe@gmail.com"
            ></input>
            <label For="password">Password</label>
            <input type="password" name="password" placeholder="******"></input>
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleImageChange}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </form>
        </div>
        <div className={this.ImageDisplayed}></div>
      </div>
    );
  }
}

export default Signup;
