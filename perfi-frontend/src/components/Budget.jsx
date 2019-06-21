import React, { Component } from "react";
import NavBar from "./NavBar";
import Pie from "./Pie";
import { connect } from "react-redux";

class Budget extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    totalSpent: 0
  };

  componentDidMount() {
    let total = 0;
    for (var i = 0; i < this.props.transactions.length; i++) {
      total = total + this.props.transactions[i].cost;
    }
    this.setState({
      totalSpent: total
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Pie />
        BUDGET: {this.props.user.budget}
        <br />
        <div>TOTAL SPENT: {this.state.totalSpent}</div>
      </div>
    );
  }
}

// get transactions from react store
const mapStateToProps = state => {
  return {
    user: state.user,
    transactions: state.transactions
  };
};

export default connect(
  mapStateToProps,
  null
)(Budget);
