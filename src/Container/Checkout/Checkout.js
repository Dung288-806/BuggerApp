import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import Contact from "./ContactCheckout/Contact";
import { Route, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
class Checkout extends Component {

    render() { 
      let checkOut = <Redirect to="/" />
      if (Object.keys(this.props.ing).length !== 0 && this.props.ing.constructor === Object) {
        checkOut = (
          <div>
            <CheckoutSummary ingredient={this.props.ing} />
            <Route
              path={this.props.match.path + "/contact"}
              render={() => (
                <Contact
                  ingredient={this.props.ing}
                  totalPrice={this.props.totalPrice}
                />
              )}
            />
          </div>
        );
      }
        return checkOut ;
    }
}

const mapStateToProps = (state) => {
  return {
    ing: state.ingredients,
    totalPrice: state.totalPrice,
  };
};
 
export default connect(mapStateToProps)(Checkout);