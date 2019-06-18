import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
<<<<<<< HEAD:perfi-frontend/components/NavBar.jsx
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Transaction/">Transaction</Link> </li>
            <li> <Link to="/Budget/">Budget</Link> </li>
            <li> <Link to="/auth/account/">Account</Link> </li>
          </ul>
        </nav>
        <Route path="/" exact component={DumbComponent} />
        <Route path="/Home" component={DumbComponent} />
        <Route path="/auth/transaction" component={DumbComponent} />
        <Route path="/Budget" component={DumbComponent} />
        <Route path="/auth/account" component={LoginComponent}/>
        <Route path="/auth/newaccount" component={NewAccount}/>
      </div>
    </Router>
=======
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/Transaction/">Transaction</Link> </li>
          <li> <Link to="/Budget/">Budget</Link> </li>
          <li> <Link to="/Account/">Account</Link> </li>
        </ul>
      </nav>
>>>>>>> master:perfi-frontend/src/components/NavBar.jsx
  );
}

export default NavBar;
