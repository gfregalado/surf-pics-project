import React from 'react';
import Classes from './Button.module.css';

const button = (props) => {
  let classname = props.buttonSecondary ? Classes.Secondary : Classes.Primary;
  return <button className={classname}>{props.children}</button>;
};

export default button;
// style={{ marginTop: '0', marginBottom: '0' }}
