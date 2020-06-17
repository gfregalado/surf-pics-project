import React, { Component } from 'react';
import Classes from './Signup.module.css';
import { Form, Input, Radio } from 'antd';
import Button from '../../../Components/UI/Buttons/Button';

class Signup extends Component {
  state = {
    userType: 'surfer',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  // ========================== Handles form input changes & submission  ==========================

  onSubmit = (values) => {
    console.log('Received values of form: ', values);
  };

  // ========================== Handles the image change when pressing the switch  ==========================

  ImageDisplayed = Classes.ImageSurfer;

  handleImageChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    if (this.state.userType === 'photographer') {
      this.ImageDisplayed = Classes.ImageSurfer;
    } else {
      this.ImageDisplayed = Classes.ImagePhotographer;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h3 className={Classes.Logo}>SURFPICPROJECT</h3>
        <div className={Classes.SignupBox}>
          <div className={Classes.Form}>
            <h2>Ready to join the Community?</h2>
            <Form
              className="login-form"
              initialValues={{ userType: 'surfer' }}
              onFinish={this.onSubmit}
              style={{
                marginLeft: '50px',
                marginRight: '50px',
                marginTop: '60px',
              }}
            >
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your First name',
                  },
                ]}
              >
                <Input type="text" name="firstName" placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Last name',
                  },
                ]}
              >
                <Input type="text" name="lastName" placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input placeholder="Email" name="email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input type="password" name="password" placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="userType"
                rules={[
                  {
                    required: true,
                    message: 'Please Choose which one are you!',
                  },
                ]}
              >
                <Radio.Group
                  defaultValue="surfer"
                  onChange={this.handleImageChange}
                  name="userType"
                >
                  <Radio value="surfer">Surfer</Radio>
                  <Radio value="photographer">Photographer</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button htmlFor="submit" className="login-form-button">
                  Create Account
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={this.ImageDisplayed}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
