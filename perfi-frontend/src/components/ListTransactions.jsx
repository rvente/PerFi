import React, { Component } from "react";
import { connect } from "react-redux";
import {removeTransactionThunk} from "../store/index";
class ListTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  deleteTransaction = (id) =>
  {
      this.props.deleteTransaction(id);
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
        <button type="button" onClick={this.deleteTransaction(tran.id)}>
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

const mapState = state => {
  return { transactions: state.transactions};
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: (object) => dispatch(removeTransactionThunk(object))
  };
};
export default connect(mapState, mapDispatchToProps)(ListTransactions);
