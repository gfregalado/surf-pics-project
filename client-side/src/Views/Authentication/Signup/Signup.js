import React, { Component } from 'react';
import Classes from './Signup.module.css';
import SignupForm from '../../../Components/Forms/SignupForm';

class Signup extends Component {
  state = {
    userType: true,
  };

  // ========================== Handles the image change when pressing the switch  ==========================

  ImageDisplayed = Classes.ImageSurfer;

  imageDisplayHandler = this.state.checkedB
    ? Classes.ImagePhotographer
    : Classes.ImageSurfer;

  handleImageChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
    if (this.state.userType) {
      this.ImageDisplayed = Classes.ImagePhotographer;
    } else {
      this.ImageDisplayed = Classes.ImageSurfer;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h3 className={Classes.Logo}>SURFPICPROJECT</h3>
        <div className={Classes.SignupBox}>
          <div className={Classes.Form}>
            <h2>Ready to join the Community?</h2>
            <SignupForm switch={this.handleImageChange}></SignupForm>
          </div>
          <div className={this.ImageDisplayed}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
