import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props){
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(){
    console.log(this.props.history.push(`/newaccount`));
  }

  render(){
    return (
      <div>
        <h1>Login</h1>
        <form action="/login" method="post">
        Email: <input type="email" name="email" required/><br/>
        Password:<input type="password" name="password" required/><br/><br/>
        <button type="submit">Login</button>
        <button type="button" onClick={this.changePage}>New Account</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
