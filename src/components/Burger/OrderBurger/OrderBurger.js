import React from 'react';
import Button from '../../UI/Button/Button'
const orderBurger = (props) => {
    const listOrderIngredient = Object.keys(props.ingredients).map((igKey => {
        return <li key={igKey} style={{
            textDecoration: "none",
            listStyleType: "none"
        }}> <span>{igKey}</span>: {props.ingredients[igKey]} </li>
    }))

    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Your Order: </p>
        <ul>{listOrderIngredient}</ul>
        <p>Do you want to CheckOut?</p>
        <p>
          <strong>Total Price: {props.totalPrice}</strong>
        </p>
        <Button clickHandle={props.hiddenBack} typeBtn="Danger">
          CANCEL
        </Button>
        <Button typeBtn="Success" clickHandle={props.continueCheck}>
          CONTINUE
        </Button>
      </div>
    );
}

export default orderBurger