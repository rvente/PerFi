import React, { Component } from 'react';
import { withRouter } from 'react-router';

class AddTransaction extends Component {
  constructor(props){
    super(props);

    this.changePage = this.changePage.bind(this);
    this.testForm = this.testForm.bind(this);
  }

  changePage(){
    this.props.history.push(`/Transactions`);
  }

  testForm(e){
    console.log(e.target.value);
  }

  render(){
    return (
        <div>
        <h1>Add Transaction</h1>
          <div className="login-boxes">
        <form onSubmit={this.testForm}>
          <table>
            <tbody>
            <tr>
              <td> Name: </td>
              <td> <input type="text" name="transaction_name" required/> </td>
            </tr>
            <tr>
              <td> Change in account: </td>
              <td> <input type="text" name="Delta" required/> </td>
            </tr>
              <tr>
                <td> Date (MMDDYYYY): </td>
                <td> <input type="text" name="Delta" required/> </td>
              </tr>
            </tbody>
          </table>
        <button type="submit">Add Transaction</button>
        <button type="button" onClick={this.changePage}>New Account</button>
        </form>
          </div>
      </div>
    );
  }
}

export default withRouter(AddTransaction);