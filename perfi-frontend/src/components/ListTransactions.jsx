import React, { Component } from "react";
import { connect } from "react-redux";

const axios = require("axios");

class ListTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  render() {
    let trans = this.props.transactions.map(trans => (
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

const mapState = state => {
  return { transactions: state.transactions };
};

export default connect(mapState)(ListTransactions);
