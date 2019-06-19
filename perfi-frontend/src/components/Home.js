import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import ListTransactions from "./ListTransactions";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <header>Home</header>
        <ListTransactions />
        {/*edit here*/}
      </div>
    );
  }
}

export default Home;
