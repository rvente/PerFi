import React, {Component} from 'react'
import {login} from './store/index'
import RegisterForm from './register-form'

const RegisterPage = (props) => {
  const {handleSubmit} = props;

  return(
    <div>
      <h1>Register</h1>
      <RegisterForm handleSubmit={handleSubmit}/>
    </div>
  )
}

// redirects to home page after successful login
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login({email, password}))
       // .then(() => {
          ownProps.history.push('/account')
        //})
    }
  }
}

export default RegisterPage
