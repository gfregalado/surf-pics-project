import React from 'react';

// import Classes from './SignupForm.module.css';

import { Form, Input, Radio } from 'antd';
import Button from '../UI/Buttons/Button';

const SignupForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="signup_form"
      className="login-form"
      onFinish={onFinish}
      style={{ marginLeft: '50px', marginRight: '50px', marginTop: '60px' }}
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
        <Input type="firstName" placeholder="First Name" />
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
        <Input type="LasttName" placeholder="Last Name" />
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
        <Input placeholder="Email" />
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
        <Input type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="radio-group"
        // label="Yo, I am a"
        rules={[
          {
            required: true,
            message: 'Please Choose which one are you!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value="a">Surfer</Radio>
          <Radio value="b">Photographer</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
