import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </div>
      <img src="" alt="" />
      <div>
        {/* To be replaced with components*/}
        <button>Signup</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default navbar;
