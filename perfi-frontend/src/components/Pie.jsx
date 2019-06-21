import React, { Component } from "react";
import { connect } from "react-redux";
// import PieChart from "react-minimal-pie-chart";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { getTransactions } from "../store/index";

class myPie extends Component {
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

  componentDidMount() {
    this.props.getTransactions(this.props.user.id);
    // let arr1 = this.props.transactions;
    // console.log(arr1);
    // console.log(this.props.transactions);
    // let sum = 0;
    // let dict = {};
    // let sums = {};
    // this.state.Categories.forEach(item => (dict[item] = []));
    // this.state.Categories.forEach(item => (sums[item] = []));
    // arr1.forEach(trans => {
    //   console.log(trans.title);
    //   dict[trans.category].push(trans);
    // });
    // console.log("DICTTTT", dict);
    // let empty = true;
    // for (let i in dict) {
    //   if (dict[i].length > 0) {
    //     empty = false;
    //   }
    // }
    // console.log(empty);
    // if (empty === false) {
    //   for (let i in dict) {
    //     if (dict[i].length > 0) {
    //       let sumFor = dict[i].reduce((a, b) => a.cost + b.cost);
    //       console.log("CATEGORY", i);
    //       console.log("SUM", sumFor);
    //       sums[i].push(sumFor);
    //       this.setState({ [i]: sums[i].category });
    //     }
    //   }
    //   console.log("TRANSIT", sums);
    // }
  }

  myFunction() {}
  render() {
    let food = 0;
    let ent = 0;
    let transportation = 0;
    let health = 0;
    let cloth = 0;
    let tech = 0;
    let other = 0;
    this.props.transactions.forEach(trans => {
      console.log(this.props.transactions[0].category);
      if (trans.category === "Food") {
        console.log("TRANSSS", trans.cost);
        food += trans.cost;
      }
      if (trans.category === "Entertainment") {
        console.log("TRANSSS", trans.cost);
        ent += parseInt(trans.cost);
      }
      if (trans.category === "Transportation") {
        console.log("TRANSSS", trans.cost);
        transportation += parseInt(trans.cost);
      }
      if (trans.category === "Health") {
        console.log("TRANSSS", trans.cost);
        health += parseInt(trans.cost);
      }
      if (trans.category === "Cloth") {
        console.log("TRANSSS", trans.cost);
        cloth += parseInt(trans.cost);
      }
      if (trans.category === "Technology") {
        console.log("TRANSSS", trans.cost);
        tech += parseInt(trans.cost);
      }
      if (trans.category === "Other") console.log("TRANSSS", trans.cost);
      {
        other += parseInt(trans.cost);
      }
    });

    const data = [
      { name: "Food", value: food },
      { name: "Transit", value: transportation },
      {
        name: "Entertainment",
        value: ent
      },
      { name: "Health", value: health },
      { title: "Clothing", value: cloth },
      {
        name: "Technology",
        value: tech
      },
      { name: "Other", value: other }
    ];

    console.log("FOOD", food);
    return (
      <div>
        Pie
        <div className="pie" style={{ margin: "30px", padding: "100px" }}>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart height={350}>
              <Pie
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index
                }) => {
                  console.log("HANDELINNGGGGGG?");
                  console.log("handling label?");
                  const RADIAN = Math.PI / 180;
                  // eslint-disable-next-line
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  // eslint-disable-next-line
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  // eslint-disable-next-line
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#8884d8"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {data[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return { user: state.user, transactions: state.transactions };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: userID => dispatch(getTransactions(userID))
  };
};

export default connect(
  mapState,
  mapDispatchToProps
)(myPie);
