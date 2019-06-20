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
        let images = ["clothing", "food", "transit",
                      "entertainment", "health", "tech"];
        let fulldir;
        if (images.includes(category)) {
            fulldir = "assets/"+category+".png";
        } else if (category == "clothes") {
            fulldir = "assets/"+"clothing"+".png";
        } else {
            fulldir = "assets/"+"unknown"+".png";
        }
       return(<img src={fulldir} alt={category}/>);
    };

  deleteTransaction = (event) => {
      this.props.deleteTransaction(event.target.value);
  };

  render() {
    let trans = this.props.transactions.map(tran => (
      <div className="card card-portrait">
        {this.getImage(tran.category)}
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
