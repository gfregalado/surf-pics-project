import React from 'react';
import classes from './HeroBanner.module.css';

const navbar = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <div className={classes.Header}>
          <h1>SURF PICS PROJECT</h1>
          <h3>Your Water Sports Marketplace</h3>
        </div>
        <div className={classes.Description}>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
      </div>
      <div className={classes.Image}></div>
    </div>
  );
};

export default navbar;
