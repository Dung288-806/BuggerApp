import React from 'react';
import classes from './Modal.css'
const modal = (props) => (
  <div
    style={{
      transform: props.isShow ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.isShow ? "1" : "0",
    }}
    className={classes.Modal}
  >
    {props.children}
  </div>
);

export default modal