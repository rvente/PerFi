import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "./NavBar";
import { addTransactionThunk } from "../store/index";
import { connect } from "react-redux";
import ListTransactions from "./ListTransactions";
import Modal from "./Modal";
import { removeTransactionThunk } from "../store/index";
// import plus from "../assets/plus.png";

class Transaction extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
    this.testForm = this.testForm.bind(this);
  }

  state = {
    date: "",
    cost: 0,
    title: "",
    category: "",
    userid: this.props.user.id, // must FIX to actual userid of logged in user
    subscription: 0,
    visible: false
  };

  deleteTransaction = event => {
    this.props.deleteTransaction(event.target.value);
  };

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  changePage() {
    this.props.history.push(`/Transactions`);
  }

  handlename = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleamt = event => {
    this.setState({
      cost: event.target.value
    });
  };

  handlecat = event => {
    this.setState({
      category: event.target.value
    });
  };
  handledate = event => {
    this.setState({
      date: event.target.value
    });
  };
  handlesub = event => {
    this.setState({
      subscription: event.target.value
    });
  };

  testForm(e) {
    e.preventDefault();
    //console.log(e.target.value);
    console.log(this.state.name);
    // make object here
    //let transactionObject = {"date":this.state.date,"cost":this.state.cost, "title":this.state.title, "category":this.state.category, "userid":this.state.userid,"subscription":this.state.subscription};
    // call add transaction thunk here
    this.props.addTransaction(this.state);
  }

  displayForm() {
    this.closeModal();
  }

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
      <div>
        <NavBar />

        <div className="card-container">
          <div
            className="card card-portrait"
            id="addcard"
            onClick={() => this.openModal()}
          />
          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInDown"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <h1>Add Transaction</h1>
              <div
                className="login-boxes"
                id="add-form"
                // style={{ display: "none" }}
              >
                <form onSubmit={this.testForm}>
                  <table>
                    <tbody>
                      <tr>
                        <td> Name: </td>
                        <td>
                          {" "}
                          <input
                            onChange={this.handlename}
                            type="text"
                            name="transaction_name"
                            required
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> Amount: </td>
                        <td>
                          {" "}
                          <input
                            onChange={this.handleamt}
                            type="text"
                            pattern="[0-9]*"
                            name="transaction_amount"
                            required
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> Category: </td>
                        <td>
                          <select
                            onChange={this.handlecat}
                            name="one"
                            className="dropdown-select"
                            text="Category"
                          >
                            <option value="Food">Food</option>
                            <option value="Transit">Transit</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Health">Health</option>
                            <option value="Clothing">Entertainment</option>
                            <option value="Tech">Health</option>
                          </select>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> Subscription? </td>
                        <td>
                          {" "}
                          <input
                            onChange={this.handlesub}
                            type="text"
                            name="transaction_sub"
                            required
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> Date (MMDDYYYY): </td>
                        <td>
                          {" "}
                          <input
                            onChange={this.handledate}
                            type="text"
                            pattern="[0-9]*"
                            name="Delta"
                            required
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="submit">Add Transaction</button>
                  {/* <button type="button" onClick={this.changePage} /> */}
                </form>
              </div>
              <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                Close
              </a>
            </div>
          </Modal>
          {trans}
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: object => dispatch(addTransactionThunk(object)),
    deleteTransaction: object => dispatch(removeTransactionThunk(object))
  };
};

// maps whether user logged in to state
const mapStateToProps = state => {
  return {
    user: state.user,
    transactions: state.transactions
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Transaction));
//export default withRouter(Transaction);
