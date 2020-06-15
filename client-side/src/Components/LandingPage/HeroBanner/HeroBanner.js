import React from 'react';
import Classes from './HeroBanner.module.css';
import Button from '../../UI/Buttons/Button';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className={Classes.Container}>
      <div className={Classes.Content}>
        <div className={Classes.Header}>
          <h1>SURF PICS PROJECT</h1>
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
