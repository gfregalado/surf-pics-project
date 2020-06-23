import React, { Component } from 'react';
import Classes from './Navbar.module.css';
import { Button, Space, Avatar, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    current: null,
  };

  buttonsDisplay = (
    <Space size="large">
      <Link to="/signup">
        <Button>Signup</Button>
      </Link>
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
    </Space>
  );

  componentDidUpdate() {
    console.log('LOOP?');
    if (this.props.loggedInUser) {
      this.buttonsDisplay = (
        <Space size="large">
          <Menu
            onClick={this.handleClick}
            selectedKeys={this.state.current}
            mode="horizontal"
            style={{ backgroundColor: '#f5f5f5' }}
          >
            <Menu.Item key="browse">
              Browse Pictures
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="upload">
              Upload Pictures
              <Link to="/upload" />
            </Menu.Item>
          </Menu>
          <Avatar
            style={{ backgroundColor: '#000000' }}
            icon={<UserOutlined />}
          />
        </Space>
      );
    }
  }
  // Handling Click for Navbar items

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className={Classes.Navbar}>
        <h3 className={Classes.Logo}>SURFPICPROJECT</h3>
        {this.buttonsDisplay}
      </div>
    );
  }
}

export default Navbar;
