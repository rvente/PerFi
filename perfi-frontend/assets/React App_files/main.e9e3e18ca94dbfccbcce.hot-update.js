webpackHotUpdate("main",{

/***/ "./src/components/Pie.jsx":
/*!********************************!*\
  !*** ./src/components/Pie.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "../../node_modules/recharts/es6/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/Pie.jsx";

 // import PieChart from "react-minimal-pie-chart";




class myPie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
      Categories: ["Food", "Entertainment", "Transit", "Health", "Clothing", "Technology", "Other"]
    };
  }

  componentDidMount() {
    this.props.getTransactions(this.props.user.id); // let arr1 = this.props.transactions;
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
    const data = [{
      name: "Food",
      value: food
    }, {
      name: "Transit",
      value: transportation
    }, {
      name: "Entertainment",
      value: ent
    }, {
      name: "Health",
      value: health
    }, {
      title: "Clothing",
      value: cloth
    }, {
      name: "Technology",
      value: tech
    }, {
      name: "Other",
      value: other
    }];
    console.log("FOOD", food);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Pie", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pie",
      style: {
        margin: "30px",
        padding: "100px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      width: "100%",
      height: 250,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["PieChart"], {
      height: 250,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
      isAnimationActive: false,
      data: data,
      cx: "50%",
      cy: "50%",
      outerRadius: 100,
      fill: "#8884d8",
      dataKey: "value",
      label: ({
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
        const RADIAN = Math.PI / 180; // eslint-disable-next-line

        const radius = 25 + innerRadius + (outerRadius - innerRadius); // eslint-disable-next-line

        const x = cx + radius * Math.cos(-midAngle * RADIAN); // eslint-disable-next-line

        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          x: x,
          y: y,
          fill: "#8884d8",
          textAnchor: x > cx ? "start" : "end",
          dominantBaseline: "central",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, data[index].name, " (", value, ")");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })))));
  }

}

const mapState = state => {
  return {
    user: state.user,
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: userID => dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_3__["getTransactions"])(userID))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapState, mapDispatchToProps)(myPie));

/***/ })

})
//# sourceMappingURL=main.e9e3e18ca94dbfccbcce.hot-update.js.map