import React from 'react'

const RegisterForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      First Name: <input type="text" name="firstname"></input><br />
      Last Name: <input type="text" name="lastname"></input><br />
      Email: <input type="email" name="email"></input><br />
      Password: <input type="password" name="password1"></input><br/>
      Password Again: <input type="password" name="password2"></input><br/>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
