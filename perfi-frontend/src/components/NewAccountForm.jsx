import React from 'react';

const NewAccountForm = (props) => {
  const {handleSubmit} = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Username</label>
                </td>
                <td>
                  <input type="text" name="username"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input type="email" name="email"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name</label>
                </td>
                <td>
                  <input style={{width:"67px"}} type="text" name="firstname"/>
                  <input style={{width:"67px"}} type="text" name="lastname"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password</label>
                </td>
                <td>
                  <input type="password" name="password"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Budget</label>
                </td>
                <td>
                  <input type="number" name="budget"/>
                </td>
              </tr>
              <button type="submit">Register</button>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default NewAccountForm;
