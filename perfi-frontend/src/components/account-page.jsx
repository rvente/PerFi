import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/index";
import NavBar from "./NavBar.jsx";

const AccountPage = props => {
  const {user, handleClick} = props;

  if (!user.id) {
      return <Redirect to='/' />;
  }

  return (
      <div>
      <NavBar />
      <div className="center">
          {/* <header>Account</header> */}
      <div className="card card-account">
        <h1>Welcome back, {user.firstname}!</h1>
        <span>
      <table>
        <tbody>
          <tr> <td> Name: </td> <td> {user.firstname} {user.lastname} </td> </tr>
          <tr> <td> Username: </td> <td> {user.username} </td> </tr>
          <tr> <td> Email: </td> <td> {user.email} </td> </tr>
        </tbody>
      </table>
        </span>
        <span>
          <button onClick={handleClick}>Logout</button>
        </span>
      </div>
    </div>
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
            ownProps.history.push('/');
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
