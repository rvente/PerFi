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
        {getImage(trans.category)}
        <ul>
          <h2> {trans.title} </h2>
          <li>Date: {trans.date} </li>
          <li>Cost: {trans.cost} </li>
          {/* <li>Category: {trans.category} </li> */}
          {/* <li>Subscription: {trans.subscription} </li> */}
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
    // images[] must contain all images in
    let images = ["clothing", "food", "transit",
                  "entertainment", "health", "tech"];
    let fulldir;
    if (images.includes(category)) {
        fulldir = "assets/"+category+".png";
    } else if (category == "clothes") {
        fulldir = "assets/"+"clothing"+".png";
    } else if (category == "") {
        category = "unknown";
    }

    return <img src={fulldir} alt={category}/>;
};

const mapState = state => {
  return { transactions: state.transactions };
};

export default connect(mapState)(ListTransactions);
