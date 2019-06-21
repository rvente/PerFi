import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "./NavBar";
import { addTransactionThunk } from "../store/index";
import { connect } from "react-redux";
import ListTransactions from "./ListTransactions";
import Modal from "./Modal";
import { removeTransactionThunk } from "../store/index";
// import plus from "../assets/plus.png";

const getImage = (category) => {
    // images[] must contain all images in the directory
    category = category.toLowerCase();
    let images = ["clothing", "food", "transit",
                  "entertainment", "health", "tech"];
    let fulldir;
    if (images.includes(category)) {
        fulldir = "/assets/"+category+".png";
    } else if (category === "clothes") {
        fulldir = "/assets/clothing.png";
    } else {
        fulldir = "/assets/unknown.png";
    }
    return(fulldir);
};

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
      <div className="card card-landscape text-left">
          <div>
            <img className="small round-lhs" src={getImage(trans.category)} alt=""/>
          </div>
        <div style={{height: "144px", width: "196px"}}>
        <table className=".table-padded">
          <ul>
          <tbody>
            <tr>
              <td>
                <li>Date: </li>
              </td>
              <td>
                <li>{trans.date} </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Cost:</li>
              </td>
              <td>
                <li>{trans.cost} </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Item:</li>
              </td>
              <td>
                <li>{trans.title} </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Type:</li>
              </td>
              <td>
                <li>{trans.category} </li>
              </td>
            </tr>
            <tr>
              {/* TODO: subscription is not working yet */}
              {/* <td> <li>Subscription:</li> </td> */}
              {/* <td> <li>{trans.subscription} </li> </td> */}
            </tr>
          </tbody>
          </ul>
        </table>
        </div>
            <div className="button-list-container">
              <ul>
                <li>
            <button className="x"
              value={trans.id}
              type="button"
              onClick={this.deleteTransaction} >
            </button>
                </li>
              </ul>
            </div>
      </div>
    ));

    return (
      <div>
        <NavBar />

        <div className="card-container">
          <div
            className="card card-addcard"
            id="addcard"
            onClick={() => this.openModal()}
          >
            {/* + plus sign commented out*/}
            <img src="/assets/plus.png" alt="" title="add transaction"/>
          </div>
          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInDown"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <a className="xmodal" href="javascript:void(0);" onClick={() => this.closeModal()}>
                x
              </a>
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
                            {/* TODO: make category unsubmittable */}
                            <option value="Category">Category</option>
                            <option value="Food">Food</option>
                            <option value="Transportation">
                              Transportation
                            </option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Health">Health</option>
                            <option value="Clothing">Entertainment</option>
                            <option value="Technology">Technology</option>
                            <option value="Other">Other</option>
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
            </div>
          </Modal>
          {trans}
        </div>
      </div>
    );
  }
}


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
