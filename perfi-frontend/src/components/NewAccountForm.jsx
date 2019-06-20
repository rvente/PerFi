import React from 'react';

const NewAccountForm = (props) => {
  const {handleSubmit} = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username"/>
        <br />
        <label>Email</label>
        <input type="email" name="email"/>
        <br />
        <label>Name</label>
        <input type="text" name="firstname"/>
        <input type="text" name="lastname"/>
        <br />
        <label>Password</label>
        <input type="password" name="password"/>
        <br />
        <label>Budget</label>
        <input type="number" name="budget"/>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default NewAccountForm;
