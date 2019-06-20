import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/index";
import NavBar from "./NavBar.jsx";

const AccountPage = props => {
  const {user, handleClick} = props;

  if (!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <NavBar />
      <header>Account</header>
      <h1>Welcome Back {user.firstname}!</h1>
      <p>Name: {user.firstname} {user.lastname}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );

}

// maps whether user logged in to state
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick () {
      dispatch(logout())
        .then(() => {
          ownProps.history.push('/')
        })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
