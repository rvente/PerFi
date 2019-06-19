import React from "react";

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <table>
            <tbody>
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
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input type="password" name="password" />
                </td>
              </tr>
            </tbody>
          </table>
      </div>
          <button type="submit">
            Submit
          </button>
    </form>
  );
};

export default LoginForm;
