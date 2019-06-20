import React from "react";
import { connect } from "react-redux";
import { login } from "../store/index";
import { getTransactions } from "../store/index";

import LocalLoginForm from "./login-form";

const Login = props => {
  const { handleSubmit, handleClick } = props;

  return (
      <div className="center">
        <div className="card card-login">
            <LocalLoginForm handleSubmit={handleSubmit} handleClick={handleClick} />
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
        ownProps.history.push("/Home");
      })
    },

    handleClick() {
      ownProps.history.push("/newaccount");
    }
    // getTrans: dispatch(getTransactions)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
