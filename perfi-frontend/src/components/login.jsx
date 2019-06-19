import React from "react";
import { connect } from "react-redux";
import { login } from "../store/index";
import { getTransactions } from "../store/index";

import LocalLoginForm from "./login-form";

const Login = props => {
  const { handleSubmit } = props;

  return (
    <div className="">
      <h1>Log In</h1>
      <div className="">
        <LocalLoginForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

// redirects to home page after successful login
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({ email, password }))
      .then(() => {
        ownProps.history.push("/account");
      })
    }
    // getTrans: dispatch(getTransactions)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
