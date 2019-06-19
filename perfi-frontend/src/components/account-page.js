import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/index";
import NavBar from "./NavBar.jsx";
import "../css/Global.css"

const AccountPage = props => {
  const {user, handleClick} = props;

  if (!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <NavBar />
      <header>Account</header>
      <h1>Welcome back {user.firstname}!</h1>
      <h2>Full Name:</h2> {user.firstname} {user.lastname}
      <h2>Email:</h2> {user.email}
      <h2>Username:</h2> {user.username}<br /><br /><br />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}



//   return (
//     <div className='h100 w100 flex column align-items-center justify-center'>
//       <div className='flex'>
//         <h1>Welcome back {user.email}!</h1>
//       </div>
//       <div>
//         <button className='btn bg-red white p1 rounded' onClick={handleClick}>Logout</button>
//       }
//       </div>
//     </div>
//   )
// }

// maps whether user logged in to state
const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}

// dispatches logout for user
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick () {
      dispatch(logout())
        .then(() => {
          ownProps.history.push('/')
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
