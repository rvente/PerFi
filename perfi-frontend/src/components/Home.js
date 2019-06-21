import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import ListTransactions from "./ListTransactions";
// import { connect } from "http2";
import { connect } from "react-redux";
import { login } from "../store/index";
import { getTransactions } from "../store/index";
import { stat } from "fs";
// import PieChart from "react-minimal-pie-chart";
import Pie from "./Pie";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Food: 0,
      Entertainment: 0,
      Transit: 0,
      Health: 0,
      Clothing: 0,
      Technology: 0,
      Other: 0,
      Categories: [
        "Food",
        "Entertainment",
        "Transit",
        "Health",
        "Clothing",
        "Technology",
        "Other"
      ]
    };
  }
  componentWillUpdate() {
    this.props.getTransactions(this.props.user.id);
  }

  // componentDidUpdate() {
  //   let arr1 = this.props.transactions;
  //   let sum = 0;
  //   let dict = {};
  //   this.state.Categories.forEach(item => (dict[item] = []));
  //   arr1.forEach(trans => {
  //     console.log(trans.title);
  //     dict[trans.category].push(trans);
  //   });
  //   for (let i in dict) {
  //     sum += i.cost;
  //     this.setState({ [i]: sum });
  //   }
  // }

  // findSum() {
  //   arr = this.props.transactions;
  //   arr.map;
  // }

  render() {
    return (
      <div>
        <NavBar />
        <Pie />
        <ListTransactions />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.transactions);
  return {
    user: state.user,
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: userID => dispatch(getTransactions(userID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
