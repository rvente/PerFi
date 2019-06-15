import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Transaction/">Transaction</Link>
            </li>
            <li>
              <Link to="/Budget/">Budget</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" exact component={DumbComponent} />
        <Route path="/Home/" component={DumbComponent} />
        <Route path="/Transaction/" component={DumbComponent} />
        <Route path="/Budget/" component={DumbComponent} />
      </div>
    </Router>
  );
}

export default NavBar;
