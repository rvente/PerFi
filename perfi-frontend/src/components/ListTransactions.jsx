import React, { Component } from "react";
import { connect } from "react-redux";

import {removeTransactionThunk} from "../store/index";

class ListTransactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
        transactions: [],
        imageurl: "assets/unknown.png"
    };
  }

   getImage = (category) => {
        // images[] must contain all images in the directory
       category = category.toLowerCase();
        let images = ["clothing", "food", "transit",
                      "entertainment", "health", "tech"];
        let fulldir;
        if (images.includes(category)) {
            fulldir = "assets/"+category+".png";
        } else if (category === "clothes") {
            fulldir = "assets/clothing.png";
        } else {
            fulldir = "assets/unknown.png";
        }
       return(fulldir);
    };

  deleteTransaction = (event) => {
      this.props.deleteTransaction(event.target.value);
  };

  render() {
    let sorted = this.props.transactions.sort((a, b) => {
      let x = a.date.replace(/-/g, "").replace(/[/]/g, "");
      let y = b.date.replace(/-/g, "").replace(/[/]/g, "");
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });

    // sorted = sorted.slice(0, 10);
    let trans = sorted.map(tran => (
      <div className="card card-portrait">
        <img src={this.getImage(tran.category)} alt={tran.category}/>
        <ul>
          <h2> {tran.title} </h2>
          <li>Date: {tran.date} </li>
          <li>Cost: {tran.cost} </li>
          {/* <li>Category: {tran.category} </li> */}
          {/* <li>Subscription: {tran.subscription} </li> */}
        <button value = {tran.id} type="button" onClick={this.deleteTranaction}>
              Delete Transaction
        </button>
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
