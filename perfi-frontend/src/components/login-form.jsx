import React from "react";

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
          <table>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input type="email" name="email" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Password</label>
              </td>
              <td>
                <input type="password" name="password" />
              </td>
            </tr>
          </table>
      <div className="center">
          <button type="submit">
            Submit
          </button>
      </div>
    </form>
  );
};

export default LoginForm;
