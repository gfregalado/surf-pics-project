import React from 'react';
import Classes from './Navbar.module.css';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className={Classes.Navbar}>
      <div className={Classes.Links}>
        <ul>
          <Space size="large">
            <Link>
              <li>Browse</li>
            </Link>
            <Link>
              <li>Upload</li>
            </Link>
          </Space>
        </ul>
      </div>
      <h3 className={Classes.Logo}>SURFPICPROJECT</h3>
      <Space size="large">
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
        <Link to="/login">
          <Button type="primary">Login</Button>
        </Link>
      </Space>
    </div>
  );
};

export default navbar;
