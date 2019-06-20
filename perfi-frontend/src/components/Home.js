import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import ListTransactions from "./ListTransactions";
// import { connect } from "http2";
import { connect } from "react-redux";
import { login } from "../store/index";
import { getTransactions } from "../store/index";

class Home extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    if (!this.props.user.id) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <NavBar />
        <header>Home</header>
        <ListTransactions />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: () => dispatch(getTransactions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
