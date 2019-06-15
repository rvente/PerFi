import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginComponent from './Login.jsx';


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
            <li> <Link to="/Account/">Account</Link> </li>
          </ul>
        </nav>
        <Route exact path="/" exact component={DumbComponent} />
        <Route path="/Home/" component={DumbComponent} />
        <Route path="/Transaction/" component={DumbComponent} />
        <Route path="/Budget/" component={DumbComponent} />
        <Route path="/Account/" component={LoginComponent}/>
        <Route path="/NewAccount/" component={NewAccount}/>
      </div>
    </Router>
  );
}

export default NavBar;
