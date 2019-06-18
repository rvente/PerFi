import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {register} from '../store/index';
import RegisterForm from './RegisterForm';

const RegisterComponent = (props) => {
  const {handleSubmit} = props

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm handleSubmit={handleSubmit}/>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const firstname = evt.target.firstname.value
      const lastname = evt.target.lastname.value
      const email = evt.target.email.value
      const password = evt.target.password1.value
      dispatch(register({firstname, lastname, email, password}))
       .then(() => {
          ownProps.history.push('/account')
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterComponent);
