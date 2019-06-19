import React from "react";
import {connect} from "react-redux";
import {register} from "../store/index";
import NewAccountForm from './NewAccountForm.jsx';

const NewAccount = (props) => {
  const {handleSubmit} = props;

  return (
    <div>
      <h1> Make a New Account with PerFi</h1>
      <NewAccountForm handleSubmit={handleSubmit}/>
    </div>
  );
}

// username email firstName lastName password
// redirects to home page after successful login
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const username = evt.target.username.value;
      const email = evt.target.email.value;
      const firstname = evt.target.firstname.value;
      const lastname = evt.target.lastname.value;
      const password = evt.target.password.value;
      dispatch(register({ username, email, firstname, lastname, password }))
      .then(() => {
        ownProps.history.push("/");
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(NewAccount);
