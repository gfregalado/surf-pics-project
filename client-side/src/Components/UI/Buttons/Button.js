import React from 'react';
import Classes from './Button.module.css';
import Button from '@material-ui/core/Button';

const button = (props) => {
  let classname = props.buttonSecondary ? Classes.Secondary : Classes.Primary;
  return (
    <button style={{ marginTop: '0', marginBottom: '0' }} className={classname}>
      {props.children}
    </button>
  );
};

export default button;
