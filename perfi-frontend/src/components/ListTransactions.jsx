import React, { Component } from "react";

const axios = require("axios");

class ListTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/auth/transaction")
      .then(res => {
        return res.data;
      })
      .then(transactions => this.setState({ transactions }));
  }
  render() {
    let trans = this.state.transactions.map(trans => (
      <div>
        <ul>
          <li>Date: {trans.date} </li>
          <li>Cost: {trans.cost} </li>
          <li>Item: {trans.title} </li>
          <li>Category: {trans.category} </li>
          <li>Subscription: {trans.subscription} </li>
        </ul>
      </div>
    ));
    return (
      <div>
        List Transactions
        {trans}
      </div>
    );
  }
}

export default ListTransactions;
