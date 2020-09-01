import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './Contact.css'
import Input from '../../../components/UI/Input/Input'
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your name...",
          },
          value: "",
        },
        address: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your address...",
          },
          value: "",
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Your Email...",
          },
          value: "",
        },
        phone: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your Phone...",
          },
          value: "",
        },
      },
    };
  }

  handleUserInput = (e, inputType) => {
    const orderFormUpdate = { ...this.state.orderForm };
    const orderFormElement = {
      ...orderFormUpdate[inputType],
    };

    orderFormElement.value = e.target.value;
    orderFormUpdate[inputType] = orderFormElement;

    this.setState({
      orderForm: orderFormUpdate,
    });
  };

  handleOrder = (e) => {
    e.preventDefault();
    // Save order to db
    console.log(this.state.orderForm);
    console.log(this.props);
  }

  render() {
    const elementInputArr = [];
    for (let key in this.state.orderForm) {
      elementInputArr.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    return (
      <div className={classes.Contact}>
        <h1>Pls enter your data contact</h1>
        <form onSubmit={this.handleOrder}>
          {elementInputArr.map((el) => (
            <Input
              key={el.id}
              elementType={el.config.elementType}
              elementConfig={el.config.elementConfig}
              value={el.config.value}
              changed={(e) => this.handleUserInput(e, el.id)}
            />
          ))}
          <Button typeBtn="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}
 
export default Contact;