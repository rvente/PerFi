import React, { Component } from "react";
import { connect } from "react-redux";
import PieChart from "react-minimal-pie-chart";

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Food: 0,
      Entertainment: 0,
      Transit: 0,
      Health: 0,
      Clothing: 0,
      Technology: 0,
      Other: 0,
      Categories: [
        "Food",
        "Entertainment",
        "Transit",
        "Health",
        "Clothing",
        "Technology",
        "Other"
      ]
    };
  }
  componentWillUpdate() {
    let arr1 = this.props.transactions;
    let sum = 0;
    let dict = {};
    let sums = {};
    this.state.Categories.forEach(item => (dict[item] = []));
    this.state.Categories.forEach(item => (sums[item] = []));
    // arr1.forEach(trans => {
    //   console.log(trans.title);
    //   dict[trans.category].push(trans);
    // });
    console.log(dict);
    // for (let i in dict) {
    //   let sumFor = dict[i].reduce((a, b) => a + b);
    //   sums[i.category].push(sumFor);
    //   this.setState({ [i]: sums[i].category });
    // }
  }
  render() {
    return (
      <div>
        Pie
        <div className="pie">
          <PieChart
            data={[
              { title: "Food", value: 10, color: "#E38627" },
              { title: "Transit", value: 15, color: "#C13C37" },
              { title: "Entertainment", value: 20, color: "#6A2135" },
              { title: "Health", value: 10, color: "#E38627" },
              { title: "Clothing", value: 15, color: "#C13C37" },
              { title: "Technology", value: 20, color: "#6A2135" },
              { title: "Other", value: 20, color: "#6A2135" }
            ]}
          />
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return { transactions: state.transactions };
};
export default connect(mapState)(Pie);
