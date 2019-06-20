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
        {trans}
      </div>
    );
  }
}

const getImage = (category) => {
    let logo;
    switch (category) {
    case "tech":
        logo = "../assets/tech.png";
    case "food":
        logo = "../assets/food.png";
    case "clothing":
        logo = "../assets/clothing.png";
    case "transit":
        logo = "../assets/transit.png";
    case "health":
        logo = "../assets/health.png";
    case "entertainment":
        logo = "../assets/entertainment.png";
    }
}

const mapState = state => {
  return { transactions: state.transactions };
};

export default connect(mapState)(ListTransactions);
