import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "./NavBar";
import {addTransactionThunk} from '../store/index';
import { connect } from "react-redux";

class Transaction extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
    this.testForm = this.testForm.bind(this);
  }

  state = {
      date:"", 
      cost: 0,
      title:"", 
      category:"", 
      userid: this.props.user.id, // must FIX to actual userid of logged in user
      subscription: 0
  }
 
  changePage() {
    this.props.history.push(`/Transactions`);
  }

  handlename = (event) =>
  {
      this.setState({
        title: event.target.value
      })
  }
  handleamt = (event) =>
  {
      this.setState({
        cost: event.target.value
      })
  }

  handlecat = (event) =>
  {
     this.setState({
       category:event.target.value
     })
  }
  handledate = (event) =>
  {
    this.setState({
      date: event.target.value
    })
  }
  handlesub = (event) =>
  {
    this.setState({
      subscription:event.target.value
    })
  }

  testForm(e) {
    e.preventDefault();
    //console.log(e.target.value);
    console.log(this.state.name);
    // make object here
    //let transactionObject = {"date":this.state.date,"cost":this.state.cost, "title":this.state.title, "category":this.state.category, "userid":this.state.userid,"subscription":this.state.subscription};
    // call add transaction thunk here
    this.props.addTransaction(this.state);
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Add Transaction</h1>
        <div className="login-boxes">
          <form onSubmit={this.testForm}>
            <table>
              <tbody>
                <tr>
                  <td> Name: </td>
                  <td>
                    {" "}
                    <input onChange = {this.handlename} type="text" name="transaction_name" required />{" "}
                  </td>
                </tr>
                <tr>
                  <td> Amount: </td>
                  <td>
                    {" "}
                    <input onChange = {this.handleamt}type="text" name="transaction_amount" required />{" "}
                  </td>
                </tr>
                <tr>
                  <td> Category: </td>
                  <td>
                    {" "}
                    <input onChange = {this.handlecat} type="text" name="transaction_cat" required />{" "}
                  </td>
                </tr>
                <tr>
                  <td> Subscription? </td>
                  <td>
                    {" "}
                    <input onChange = {this.handlesub} type="text" name="transaction_sub" required />{" "}
                  </td>
                </tr>
                <tr>
                  <td> Date (MMDDYYYY): </td>
                  <td>
                    {" "}
                    <input onChange = {this.handledate} type="text" name="Delta" required />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Add Transaction</button>
              
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (object) => dispatch(addTransactionThunk(object))
  };
};

// maps whether user logged in to state
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(withRouter(Transaction));
//export default withRouter(Transaction);
