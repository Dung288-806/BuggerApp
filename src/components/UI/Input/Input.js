import React from 'react';
import classes from './Input.css'
const Input = (props) => {

    let inputElement = null

    switch (props.elementType) {
      case "input":
        inputElement = (
          <input
            value={props.value}
            onChange={props.changed}
            className={classes.inputElement}
            {...props.elementConfig}
          />
        );
        break;
      case "textarea":
        inputElement = (
          <textarea
            value={props.value}
            onChange={props.changed}
            className={classes.inputElement}
            {...props.elementConfig}
          />
        );
        break;
      default:
        inputElement = (
          <input
            value={props.value}
            onChange={props.changed}
            className={classes.inputElement}
            {...props.elementConfig}
          />
        );
    }

    return (
      <div className={classes.Input}>
        <label className={classes.label}>{props.label}</label>
        {inputElement}
      </div>
    );
}

export default Input