import React, { Component } from "react";
import Layout from './components/Layouts/Layout'
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder'
import Checkout from './Container/Checkout/Checkout'
import OrderBill from './components/Order/OrderBil/OrderBill'
import { Route, Switch } from 'react-router-dom'
import Auth from './Container/Auth/Auth'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch >
            <Route  path="/checkout" component={Checkout} />
            <Route path="/order" component={OrderBill} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
