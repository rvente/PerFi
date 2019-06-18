import React from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import LoggedInHomePage from './LoggedInHomePage'
import {getMe, dispatch} from '../store/index'

const HomePage = () => {
  console.log(Cookies.get("loggedIn") === 'true');
  if(Cookies.get("loggedIn") === 'true'){
    console.log("youre logged in");
    return(
      <LoggedInHomePage/>
    )
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage;
