import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
<<<<<<< HEAD
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
=======

class BurgerBuilder extends Component {
  render () {
    return (
      <Aux>
        <div>Burger</div>
>>>>>>> 30a9f3679a1b03efa7a19eb4f54858849ebe9503
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
