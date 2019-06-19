import React from 'react'
import Cookies from 'js-cookie'
import LoggedInHomePage from './LoggedInHomePage'

const HomePage = () => {
  if(Cookies.get("loggedIn") === 'true'){
    return(
      <LoggedInHomePage />
    )
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>You aren't logged in</p>
    </div>
  )
}

export default HomePage;
