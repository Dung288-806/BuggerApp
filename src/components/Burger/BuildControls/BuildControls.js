import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const control = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
    { label: 'Cheese', type: 'cheese'},
]

const buildControls = (props) => {

    return (
      <div className={classes.BuildControls}>
        <p style={{
          margin: "0"
        }}>
          Price Current: <strong>{props.totalPrice}</strong>
        </p>
        {control.map((ctrl) => {
          return (
            <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              added={() => props.addIngredient(ctrl.type)}
              removed={() => props.removeIngredient(ctrl.type)}
              disable={props.disableCt[ctrl.type]}
              detailPrice={props.detailPrice[ctrl.type]}
            />
          );
        })}
        <button
          className={classes.OrderButton}
          disabled={props.totalPrice === props.startPrice}
          onClick={props.clickShow}
        >
          ORDER NOW
        </button>
      </div>
    );
}

export default buildControls 