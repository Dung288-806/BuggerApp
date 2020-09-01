import React from 'react';
import classes from './Button.css'

const button = (props) => {
    return (
        <button onClick={props.clickHandle} className={[classes.Button, classes[props.typeBtn]].join(' ')}>
            {props.children}
        </button>
    )
}

export default button