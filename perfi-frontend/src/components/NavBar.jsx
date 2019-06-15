import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewAccount from './NewAccount.jsx';
import Login from './Login.jsx';

const LoginComponent = () => (<Login />);

var DumbComponent = () => {
    return(
        <div></div>
    );
};

function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Transaction/">Transaction</Link> </li>
            <li> <Link to="/Budget/">Budget</Link> </li>
            <li> <Link to="/Login/">Login</Link> </li>
          </ul>
        </nav>
        <Route path="/" exact component={DumbComponent} />
        <Route path="/Home/" component={DumbComponent} />
        <Route path="/Transaction/" component={DumbComponent} />
        <Route path="/Budget/" component={DumbComponent} />
        <Route path="/Login" component={LoginComponent}/>
        <Route path="/newaccount" component={NewAccount}/>
      </div>
    </Router>
  );
}

export default NavBar;
