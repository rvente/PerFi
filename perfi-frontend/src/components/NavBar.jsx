import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/Global.css";


var DumbComponent = (props) => {
    return(
        <div>{props.output}</div>
    );
};

function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Student/">Student</Link>
            </li>
            <li>
              <Link to="/Campus/">Campus</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" exact component={DumbComponent} />
        <Route exact path="/Transaction/" component={DumbComponent} />
        <Route exact path="/Campus/" component={DumbComponent} />
        <Route exact path="/Budget/" component={DumbComponent} />
      </div>
    </Router>
  );
}

export default NavBar;
