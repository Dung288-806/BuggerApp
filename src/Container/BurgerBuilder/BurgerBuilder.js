import React, { Component } from "react";
import Aux from "../../Hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderBurger from '../../components/Burger/OrderBurger/OrderBurger'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import { addIngredient, removeIngredient, initialIngredient} from '../../store/Actions/Index'
import { connect } from 'react-redux'

const INGREDIENT_PRICE = {
  meat: 0.5,
  bacon: 1,
  salad: 0.5,
  cheese: 1,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    startPrice: 4,
    isShowOrder: false,
  };

  componentDidMount() {
    this.props.setInitialIngredient();
  }

  showBillOrder = () => {
    this.setState({
      isShowOrder: true,
    });
  };

  hiddenBillOrder = () => {
    this.setState({
      isShowOrder: false,
    });
  };

  continueCheck = () => {
    this.props.history.push("/checkout");
  }

  render() {
    let disableControl = { ...this.props.ing }; // { meat : 1}
    for (let key in disableControl) {
      disableControl[key] = disableControl[key] <= 0;
    }

    return (
      <Aux>
        <Backdrop
          clickToggle={this.hiddenBillOrder}
          isShow={this.state.isShowOrder}
        />
        <Modal isShow={this.state.isShowOrder}>
          <OrderBurger
            totalPrice={this.props.totalPrice}
            hiddenBack={this.hiddenBillOrder}
            continueCheck={this.continueCheck}
            ingredients={this.props.ing}
          />
        </Modal>
        <Burger ingredient={this.props.ing} />
        <BuildControls
          addIngredient={this.props.add}
          removeIngredient={this.props.remove}
          disableCt={disableControl}
          totalPrice={this.props.totalPrice}
          startPrice={this.state.startPrice}
          clickShow={this.showBillOrder}
          detailPrice={INGREDIENT_PRICE}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ing: state.ingredients,
    totalPrice: state.totalPrice,
  };
}

const mapDispacthToProps = dispatch => {
  return {
    add: (typeIng) => dispatch(addIngredient(typeIng)),
    remove: (typeIng) => dispatch(removeIngredient(typeIng)),
    setInitialIngredient: () => dispatch(initialIngredient())
  };
}

export default connect(mapStateToProps, mapDispacthToProps)(BurgerBuilder);
