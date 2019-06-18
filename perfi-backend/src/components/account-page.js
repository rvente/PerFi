import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './store/index'

const AccountPage = (props) => {
  const {user, handleClick} = props

  console.log(user.id);
  // if (!user.id) {
  //   return <Redirect to='/' />
  // }

  return (
    <div>
      <header>Account</header>
      <button onClick={handleClick} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
