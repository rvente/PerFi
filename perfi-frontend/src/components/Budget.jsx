import React, { Component } from "react";
import NavBar from "./NavBar";

class Budget extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Pie />
        <div className="card-container" >
        <div className="card" style={{width: "200px", height: "150px", padding: "20px"}}>
            <div>
              <h2> {this.state.totalSpent} </h2>
            </div>
            <div>
            <p>
              Spent out of {this.props.user.budget} this month.
            </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Budget;
