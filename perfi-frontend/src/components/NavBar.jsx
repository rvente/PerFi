import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/Home">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Transaction/">Transaction</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Budget/">Budget</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Account/">Account</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
