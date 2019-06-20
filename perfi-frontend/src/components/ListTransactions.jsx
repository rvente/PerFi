import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTransactionThunk } from "../store/index";
class ListTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }
  deleteTransaction = event => {
    this.props.deleteTransaction(event.target.value);
  };
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

    sorted = sorted.slice(0, 4);
    let trans = sorted.map(trans => (
      <div className="card card-portrait">
        <ul>
          <li>Date: {trans.date} </li>
          <li>Cost: {trans.cost} </li>
          <li>Item: {trans.title} </li>
          <li>Category: {trans.category} </li>
          <li>Subscription: {trans.subscription} </li>
          <li>
            <button
              value={trans.id}
              type="button"
              onClick={this.deleteTransaction}
            >
              Delete Transaction
            </button>
          </li>
        </ul>
      </div>
    ));
    return (
      <div id="all-trans" className="card-container">
        {trans}
      </div>
    );
  }
}

const getImage = category => {
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
};

const mapState = state => {
  return { transactions: state.transactions };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTransaction: object => dispatch(removeTransactionThunk(object))
  };
};
export default connect(
  mapState,
  mapDispatchToProps
)(ListTransactions);
