import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";
import { withRouter } from 'react-router-dom'
const checkoutSummary = (props) => {

    const backToHome = () => {
        props.history.push('/')
    }
    const continueOrder = () => {
      props.history.replace("/checkout/contact");
    };


    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well !!</h1>
        <div
          style={{
            width: "100%",
            margin: "auto",
            overflowX: "auto",
          }}
        >
          <Burger ingredient={props.ingredient} />
        </div>
        <div>
          <Button typeBtn="Danger" clickHandle={backToHome}>
            CANCEL
          </Button>
          <Button typeBtn="Success" clickHandle={continueOrder}>
            CONTINUE
          </Button>
        </div>
      </div>
    );
};

export default withRouter(checkoutSummary);
