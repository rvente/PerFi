import React from "react";

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="email">Password</label>
          <input type="password" name="password" />
      </div>
          <button type="submit">
            Submit
          </button>
    </form>
  );
};

export default LoginForm;
