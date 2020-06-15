import React, { Component } from 'react';
import Classes from './Signup.module.css';
import CustomSwitch from '../../../Components/UI/Switch/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '../../../Components/UI/Buttons/Button';
import surfIcon from '../../../Assets/Icons/surf-equipment.svg';
import photoIcon from '../../../Assets/Icons/photo-camera.svg';

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
            <form>
              <label For="FirstName">First Name</label>
              <input type="text" name="FirstName"></input>
              <label For="LastName">Last Name</label>
              <input type="text" name="LastName"></input>
              <label For="LastName">Email</label>
              <input type="email" name="Email"></input>
              <label For="password">Password</label>
              <input type="password" name="password"></input>

              <div className={Classes.Switch}>
                <img
                  src={photoIcon}
                  alt="surfIcon"
                  width="40px"
                  style={{ paddingRight: '27px' }}
                />
                <FormControlLabel
                  control={
                    <CustomSwitch
                      checked={this.state.userType}
                      onChange={this.handleImageChange}
                      name="userType"
                    />
                  }
                />
                <img src={surfIcon} alt="surfIcon" width="40px" />
              </div>
            </form>
            <div className={Classes.Button}>
              <Button>Create Account</Button>
            </div>
          </div>
          <div className={this.ImageDisplayed}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
