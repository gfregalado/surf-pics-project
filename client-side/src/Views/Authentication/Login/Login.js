import React from 'react';
import { Form, Input, Button } from 'antd';
import Classes from './Login.module.css';

const Login = () => {
  const onSubmit = async (values) => {
    console.log('TEST');
    try {
      const { email, password } = values;
      console.log('TEST' + email + password);
    } catch (error) {
      alert(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <React.Fragment>
      <h3 className={Classes.Logo}>SURFPICPROJECT</h3>
      <div className={Classes.LoginBox}>
        <div className={Classes.Form}>
          <h2>Good to see you again!</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ userType: 'surfer' }}
            onFinish={onSubmit}
            onFinishFailed={onFinishFailed}
            style={{
              marginLeft: '100px',
              marginRight: '100px',
              marginTop: '60px',
            }}
          >
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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            <span>Don't have an account? Go to Signup</span>
          </Form>
        </div>
        <div className={Classes.LoginImage}></div>
      </div>
    </React.Fragment>
  );
};

export default Login;
