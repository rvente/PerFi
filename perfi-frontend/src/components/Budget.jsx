import React, { Component } from "react";
import NavBar from "./NavBar";
import Pie from "./Pie";

class Budget extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        THIS IS THE BUDGET PAGE
        <Pie />
      </div>
    );
  }
}

export default Budget;
