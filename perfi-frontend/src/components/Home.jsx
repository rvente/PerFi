import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <header>Home</header>
        {/*edit here*/}
      </div>
    );
  }
}

export default Home;
