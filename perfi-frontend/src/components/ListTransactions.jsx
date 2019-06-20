import React, { Component } from "react";
import { connect } from "react-redux";
import {removeTransactionThunk} from "../store/index";
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';

class ListTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  deleteTransaction = (event) =>
  {
      this.props.deleteTransaction(event.target.value);
  }
  render() {
    let trans = this.props.transactions.map(tran => (
      <div className="card card-portrait">
        <ul>
          <li>Date: {tran.date} </li>
          <li>Cost: {tran.cost} </li>
          <li>Item: {tran.title} </li>
          <li>Category: {tran.category} </li>
          <li>Subscription: {tran.subscription} </li>
        </ul>
        <button value = {tran.id} type="button" onClick={this.deleteTransaction}>
              Delete Transaction
        </button>
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
  return { transactions: state.transactions};
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: (object) => dispatch(removeTransactionThunk(object))
  };
};
export default connect(mapState, mapDispatchToProps)(ListTransactions);
