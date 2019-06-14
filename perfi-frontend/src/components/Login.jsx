import React, { Component } from 'react';

class Login extends Component {
  render(){
    return (
      <div>
        <h1>Login</h1>
        <form action="/login" method="post">
        Email: <input type="text" /><br/>
        Password:<input type="text" /><br/><br/>
        <button type="submit">Login</button>
        <button type="button">New Account</button>
        </form>
      </div>
    );
  }
}

export default Login;
