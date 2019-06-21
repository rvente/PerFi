import React from "react";
import {connect} from "react-redux";
import {register} from "../store/index";
import NewAccountForm from './NewAccountForm.jsx';

const NewAccount = (props) => {
  const {handleSubmit} = props;

  return (
    <div className="center">
      <div className="card card-login" style={{width:"400px", height:"auto"}}>
        <h1> Make a New Account with PerFi</h1>
        <NewAccountForm handleSubmit={handleSubmit}/>
      </div>
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
      const budget = evt.target.budget.value;

      dispatch(register({username, email, firstname, lastname, password, budget}))
      .then(() => {
        ownProps.history.push("/");
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(NewAccount);
