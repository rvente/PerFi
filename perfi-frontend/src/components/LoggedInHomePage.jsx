import React from 'react';
import store, {getMe} from '../store/index.js';
import NavBar from './NavBar.jsx';

const LoggedInHomePage = () => {
  console.log(store.getState());
  return (
    <div>
    <NavBar/>
    <h1>You're logged in now!</h1>
    </div>
  )
}

export default LoggedInHomePage
