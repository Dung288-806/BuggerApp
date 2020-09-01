import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>
          {props.detailPrice} - {props.label}
        </div>
        <button
          className={classes.Less}
          onClick={props.removed}
          disabled={props.disable}
        >
          Less
        </button>
        <button className={classes.More} onClick={props.added}>
          Add
        </button>
      </div>
    );
}

export default buildControl