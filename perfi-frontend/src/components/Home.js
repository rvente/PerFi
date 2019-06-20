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
    this.props.getTransactions(this.props.user.id);
  }

  render() {
    return (
      <div>
        <NavBar />
        <ListTransactions />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: (userID) => dispatch(getTransactions(userID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
