import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }

  componentDidMount () {
    const fetchedOrders = [];
    axios.get('orders.json')
      .then(response => {
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({loading: false, orders: fetchedOrders});
      })
      .catch(error => {
        this.setState({loading: false})
      })
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}

export default Orders;
