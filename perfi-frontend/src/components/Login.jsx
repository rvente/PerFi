import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {login} from '../store/index';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';

const Login = (props) => {
  const {handleSubmit} = props

  return (
      <div>
      <h1>Login</h1>
      <div className="login-boxes">
        <LoginForm handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}


// redirects to home page after successful login
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login({email, password}))
        .then(() => {
          Cookies.set("loggedIn", 'true')
        })
        .then(() => {
          ownProps.history.push('/account')
        })

    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
