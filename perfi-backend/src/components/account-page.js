import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './store/index'
import Cookies from 'js-cookie'

const AccountPage = (props) => {
  const {user, handleClick} = props

  if (!Cookies.get("loggedIn")) {
    console.log('hey');
    return <Redirect to='/' />
  }

  return (
    <div>
      <div>
        <header>Account</header>
      </div>
      <div className='h100 w100 flex column align-items-center justify-center'>
        <div className='flex'>
          <h1>Welcome back {user.email}!</h1>
        </div>
        <div>
          <button className='btn bg-red white p1 rounded' onClick={handleClick}>Logout</button>
        </div>
      </div>
    </div>
  )
}

// maps whether user logged in to state
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// dispatches logout for user
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick () {
      dispatch(logout())
        .then(() => {
          ownProps.history.push('/')
        })
        .then(() => {
          Cookies.set("loggedIn", false)
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
