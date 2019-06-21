import React from "react";

const LoginForm = props => {
  const { handleSubmit, handleClick } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div >
        <h1> Log In to Perfi</h1>
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
                <input type="password" name="password" required />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="center">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClick}>
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
