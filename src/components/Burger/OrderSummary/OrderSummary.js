import React from 'react';

import Aux from '../../../hoc/Aux';
import { Ingredient, Close } from './OrderSummary.css';

const OrderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span className={Ingredient}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    })

  return (
    <Aux>
      <span className={Close} onClick={props.modalClosed}>X</span>
      <h3>Your Order!</h3>
      <p>A delicious berger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Proceed to Checkout?</p>
    </Aux>
  );
}

export default OrderSummary;
