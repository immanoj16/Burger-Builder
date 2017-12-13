import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders.js';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: ''
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your City'
        },
        value: ''
      },
      pin: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          option: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Fheapest'}
          ],
          placeholder: 'Your Name'
        },
        value: ''
      }
    },

    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false})
      })
  }

  render () {

    let form = (
      <form>
        <Input elementType='' elementConfig='' value='' />
        <Input elementType='' elementConfig='' value='' />
        <Input elementType='' elementConfig='' value='' />
        <Input elementType='' elementConfig='' value='' />
        <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
