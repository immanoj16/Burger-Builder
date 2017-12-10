import React from 'react';

import classes from './Order.css';

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Salad: (1)</p>
      <p>Total Price: USD 5.45</p>
    </div>
  )
}

export default Order;
