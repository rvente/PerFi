import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props){
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(){
    console.log(this.props.history.push(`/Home`));
  }

  render(){
    return (
        <div>
        <h1>Login</h1>
          <div className="login-boxes">
        <form  action="/auth/account" method="put">
          <table>
            <tr>
              <td> Email: </td>
              <td> <input type="email" name="email" required/> </td>
            </tr>
            <tr>
              <td> Password: </td>
              <td> <input type="password" name="password" required/> </td>
            </tr>
          </table>
        <button type="submit">Login</button>
        <button type="button" onClick={this.changePage}>New Account</button>
        </form>
          </div>
      </div>
    );
  }
}

export default withRouter(Login);
