import React from 'react'
import {connect} from 'react-redux'
import {login} from './store/index'
import LoginForm from './login-form'
import NavigationBar from './navigation-bar'
import Cookies from 'js-cookie'

const Login = (props) => {
  const {handleSubmit} = props

  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <NavigationBar />
      <header>Log In</header>
      <div className='flex w50'>
          <LoginForm handleSubmit={handleSubmit} />
      </div>
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
        .then(() => {
          ownProps.history.push('/account')
        })
        .then(() => (Cookies.set('loggedIn', false)))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
