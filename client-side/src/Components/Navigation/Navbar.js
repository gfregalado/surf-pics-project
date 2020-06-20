import React from 'react';
import Classes from './Navbar.module.css';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className={Classes.Navbar}>
      <div className={Classes.Links}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </div>
      <h3 className={Classes.Logo}>SURFPICPROJECT</h3>
      <Space size="large">
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
        <Button type="primary">Login</Button>
      </Space>
    </div>
  );
};

export default navbar;
