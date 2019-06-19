import React from 'react';
import {connect} from 'react-redux';
import {registerThunk} from '../store/index';
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
      const username = evt.target.username.value
      const email = evt.target.email.value
      const firstname = evt.target.firstname.value
      const lastname = evt.target.lastname.value
      const password = evt.target.password1.value

// registerThunk expects user as object to post to database
      dispatch(registerThunk({username, email, firstname, lastname, password}))
       .then(() => {
          ownProps.history.push('/account')
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterComponent);
