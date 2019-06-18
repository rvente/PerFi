import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {register} from '../store/index';

const RegisterComponent = () => {
  return (
    <div>
      This is a register component
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(register({email, password}))
       .then(() => {
          ownProps.history.push('/account')
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterComponent);
