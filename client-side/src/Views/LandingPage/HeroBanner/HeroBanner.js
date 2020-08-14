import React from 'react';
import Classes from './HeroBanner.module.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../../../Assets/Images/Group 1.svg';

const navbar = () => {
  return (
    <div className={Classes.Container}>
      <div className={Classes.Content}>
        <div className={Classes.Header}>
          <img src={Logo} alt="TOTORA" width="30%" />
          <h3>Your Water Sports Marketplace</h3>
        </div>
        <div className={Classes.Description}>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <div className={Classes.Buttons}>
            <Link to="/signup">
              <Button>Signup</Button>
            </Link>
            <Button buttonSecondary>Login</Button>
          </div>
        </div>
      </div>
      <div className={Classes.Image}></div>
    </div>
  );
};

export default navbar;
