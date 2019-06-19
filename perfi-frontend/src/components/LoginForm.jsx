import React from 'react';

const LoginForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td> Email: </td>
          <td> <input type="email" name="email" required/> </td>
        </tr>
        <tr>
          <td> Password: </td>
          <td> <input type="password" name="password" required/> </td>
        </tr>
        </tbody>
      </table>
      <button type="submit">Login</button>
      <button type="submit">New Account</button>
    </form>
  );
}

export default LoginForm;
