import React from 'react';
import classes from './Backdrop.css'

const backdrop = (props) => {
    return props.isShow ? (
      <div  onClick={props.clickToggle} className={classes.Backdrop}></div>
    ) : null;
}

export default backdrop