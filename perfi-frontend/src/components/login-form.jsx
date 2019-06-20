import React from "react";

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div>
	  <h1> Login </h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <input type="email" name="email" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input type="password" name="password" required/>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
	<div className="center">
          <button type="submit">
            Submit
          </button>
	  </div>
    </form>
  );
};

export default LoginForm;
