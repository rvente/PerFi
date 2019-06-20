import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import ListTransactions from "./ListTransactions";
// import { connect } from "http2";
import { connect } from "react-redux";
import { login } from "../store/index";
import { getTransactions } from "../store/index";
import { stat } from "fs";

class Home extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
    return (
      <div>
        <NavBar />
        <header>Home</header>
        <ListTransactions />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: () => dispatch(getTransactions())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
