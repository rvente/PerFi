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
    let sorted = this.props.transactions.sort((a, b) => {
      let x = a.date.replace(/-/g, "").replace(/[\/]/g, "");
      let y = b.date.replace(/-/g, "").replace(/[\/]/g, "");
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });

    let trans = sorted.map(trans => (
      <div className="card card-portrait">
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
        <div className="card-container">{trans}</div>
      </div>
    );
  }
}

const mapState = state => {
  return { transactions: state.transactions };
};

export default connect(mapState)(ListTransactions);
