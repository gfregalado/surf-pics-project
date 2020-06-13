import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Links}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </div>
      <h3 className={classes.Logo}>SURFPICPROJECT</h3>
      <div className={classes.Buttons}>
        {/* To be replaced with components*/}
        <button>Signup</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default navbar;
