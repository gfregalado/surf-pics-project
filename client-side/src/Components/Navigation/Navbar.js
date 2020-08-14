import React, { Component } from 'react';
import Classes from './Navbar.module.css';
import { Button, Space, Avatar, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Group 1.svg';

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
    if (this.props.user) {
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
        <div className={Classes.Logo}>
          <img src={Logo} alt="TOTORA" width="52%" />
        </div>
        <div>{this.buttonsDisplay}</div>
      </div>
    );
  }
}

export default Navbar;
