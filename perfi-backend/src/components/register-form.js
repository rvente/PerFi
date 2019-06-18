import React from 'react'

const RegisterForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      Username: <input type="text" name="username"></input><br />
      Email: <input type="email" name="email"></input><br />
      First Name: <input type="text" name="firstname"></input><br />
      Last Name: <input type="text" name="lastname"></input><br />
      Password: <input type="password" name="password"></input><br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default RegisterForm;
