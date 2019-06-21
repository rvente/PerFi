(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/App.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/App.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Global.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/Global.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  text-align: center;\n}\n\n.card-container-outer {\n  display: flex;\n  padding: 25px;\n}\n\n.card {\n  margin: 20px;\n  display: flex;\n  vertical-align: top;\n  flex-flow: row wrap;\n  justify-content: center;\n  border: 1px solid lightgrey;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  transition: all 0.4s ease-in-out;\n}\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.4s ease-in-out;\n}\n.card:hover .button-list-container {\n  opacity: 1;\n  transition: all 0.4s ease-in-out;\n}\n.card img {\n  min-width: 100%;\n  height: 275px;\n  border-radius: 5px 5px 0px 0px;\n  object-fit: fill;\n}\n.card ul {\n  list-style-type: none;\n  margin: 0px;\n  padding: 20px;\n}\n.card h1 {\n  text-align: center;\n}\n.card h2 {\n  padding: 0px;\n  margin: 0px;\n  color: #36648b;\n}\n\n.card-portrait {\n  width: 325px;\n  height: auto;\n}\n\n.card-login {\n  width: 300px;\n  height: 200px;\n  padding: 15px;\n}\n.card-login h1 {\n  padding: 10px;\n  margin: 0px;\n}\n.card-login td {\n  padding: 10px;\n}\n\n.center {\n  margin: auto;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n}\n\nnav {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\nnav ul {\n  list-style-type: none;\n  margin: 0px;\n  text-align: center;\n  background-color: #36648b;\n  display: flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  justify-content: center;\n}\nnav li {\n  float: top;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\nnav li a {\n  display: inline;\n  color: white;\n  padding: 15px;\n  text-decoration: none;\n  text-align: center;\n  align-content: center;\n  transition: all 0.4s ease-in-out;\n}\nnav li a:hover {\n  background-color: #3d719d;\n  border-radius: 5px;\n  transition: all 0.2s ease-in-out;\n  animation-delay: 0.2s;\n}\nnav li a:active {\n  transition: all 0.01s ease-in-out;\n  box-shadow: 0px 0px 8px 3px #528bbc;\n}\n\n@media only screen and (max-width: 500px) {\n  nav ul {\n    padding: 5px;\n    display: block;\n  }\n  nav ul a {\n    margin: 0px;\n    padding: 10px;\n  }\n}\n\nbutton {\n  background-color: #36648b;\n  text-align: center;\n  justify-content: center;\n  color: white;\n  font-size: 15px;\n  margin: 5px;\n  padding: 10px;\n  border-width: 0px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n\n.button-list-container {\n  /* visibility: hidden; */\n  opacity: 0;\n  margin: 15px;\n  transition: all 0.4s ease-in-out;\n}\n.button-list-container ul {\n  list-style-type: none;\n  margin: 0;\n  text-align: center;\n  display: flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  justify-content: center;\n  align-items: center;\n}\n.button-list-container ul li {\n  float: top;\n}\n\n.green {\n  border-color: #3ab93a;\n  background-color: #eaf9ea;\n  color: #5acc5a;\n}\n.green:hover {\n  text-shadow: 0px 0px 2px grey;\n  color: white;\n  /* font-weight: bold; */\n  background-color: #a8e4a8;\n}\n\n.red {\n  border-color: red;\n  background-color: #fff0f0;\n  color: #ff3333;\n}\n.red:hover {\n  text-shadow: 0px 0px 2px grey;\n  color: white;\n  /* font-weight: bold; */\n  background-color: #ff9999;\n}\n\n.blue {\n  border-color: #3a3ab9;\n  background-color: #eaeaf9;\n  color: #5a5acc;\n}\n.blue:hover {\n  text-shadow: 0px 0px 2px grey;\n  color: white;\n  /* font-weight: bold; */\n  background-color: #a8a8e4;\n}\n\n.wrapper ul li a {\n  display: inline;\n  color: white;\n  text-decoration: none;\n  font-size: calc(5px + 2vmin);\n  transition: all 0.3s ease-in-out;\n  text-align: center;\n  align-content: center;\n}\n\n.wrapper-home ul li {\n  display: inline;\n}\n\n.login-boxes table {\n  text-align: left;\n  background-color: white;\n  margin: auto;\n}\n\ninput {\n  border-radius: 5px;\n}\n\nbutton {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\nbutton {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n  background-color: #36648b;\n  text-align: center;\n  justify-content: center;\n  color: white;\n  font-size: 15px;\n  margin: 5px;\n  padding: 10px;\n  border-width: 0px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n\n.button-list-container {\n  /* visibility: hidden; */\n  opacity: 0;\n  margin: 15px;\n  transition: all 0.4s ease-in-out;\n}\n.button-list-container ul {\n  list-style-type: none;\n  margin: 0;\n  text-align: center;\n  display: flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  justify-content: center;\n  align-items: center;\n}\n.button-list-container ul li {\n  float: top;\n}\n\n.green {\n  border-color: #3ab93a;\n  background-color: #eaf9ea;\n  color: #5acc5a;\n}\n.green:hover {\n  text-shadow: 0px 0px 2px grey;\n  color: white;\n  /* font-weight: bold; */\n  background-color: #a8e4a8;\n}\n\n.red {\n  border-color: red;\n  background-color: #fff0f0;\n  color: #ff3333;\n}\n.red:hover {\n  text-shadow: 0px 0px 2px grey;\n  color: white;\n  /* font-weight: bold; */\n  background-color: #ff9999;\n}\n\n.blue {\n  border-color: #3a3ab9;\n  background-color: #eaeaf9;\n  color: #5a5acc;\n}\n.blue:hover {\n  text-shadow: 0px 0px 2px grey;\n  color: white;\n  /* font-weight: bold; */\n  background-color: #a8a8e4;\n}\n\n.wrapper ul li a {\n  display: inline;\n  color: white;\n  text-decoration: none;\n  font-size: calc(5px + 2vmin);\n  transition: all 0.3s ease-in-out;\n  text-align: center;\n  align-content: center;\n}\n\n.wrapper-home ul li {\n  display: inline;\n}\n\n*:focus {\n  outline: 0 !important;\n  -moz-outline-radius: 5px;\n  outline-color: #36648b;\n  outline-offset: 5px;\n}\n\nh1,\nh2,\nh3 {\n  color: #36648b;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/components/AddTransaction.jsx":
/*!*******************************************!*\
  !*** ./src/components/AddTransaction.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./src/components/NavBar.jsx");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _ListTransactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListTransactions */ "./src/components/ListTransactions.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.js");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/AddTransaction.jsx";







 // import plus from "../assets/plus.png";

class Transaction extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      cost: 0,
      title: "",
      category: "",
      userid: this.props.user.id,
      // must FIX to actual userid of logged in user
      subscription: 0,
      visible: false
    };

    this.deleteTransaction = event => {
      this.props.deleteTransaction(event.target.value);
    };

    this.handlename = event => {
      this.setState({
        title: event.target.value
      });
    };

    this.handleamt = event => {
      this.setState({
        cost: event.target.value
      });
    };

    this.handlecat = event => {
      this.setState({
        category: event.target.value
      });
    };

    this.handledate = event => {
      this.setState({
        date: event.target.value
      });
    };

    this.handlesub = event => {
      this.setState({
        subscription: event.target.value
      });
    };

    this.changePage = this.changePage.bind(this);
    this.testForm = this.testForm.bind(this);
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  changePage() {
    this.props.history.push("/Transactions");
  }

  testForm(e) {
    e.preventDefault(); //console.log(e.target.value);

    console.log(this.state.name); // make object here
    //let transactionObject = {"date":this.state.date,"cost":this.state.cost, "title":this.state.title, "category":this.state.category, "userid":this.state.userid,"subscription":this.state.subscription};
    // call add transaction thunk here

    this.props.addTransaction(this.state);
  }

  displayForm() {
    this.closeModal();
  }

  render() {
    let sorted = this.props.transactions.sort((a, b) => {
      let x = a.date.replace(/-/g, "").replace(/[\/]/g, "");
      let y = b.date.replace(/-/g, "").replace(/[\/]/g, "");

      if (x < y) {
        return 1;
      }

      if (x > y) {
        return -1;
      }

      return 0;
    });
    let trans = sorted.map(trans => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-portrait",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Date: ", trans.date, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Cost: ", trans.cost, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Item: ", trans.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Category: ", trans.category, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Subscription: ", trans.subscription, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      value: trans.id,
      type: "button",
      onClick: this.deleteTransaction,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Delete Transaction")))));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-portrait",
      id: "addcard",
      onClick: () => this.openModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      visible: this.state.visible,
      width: "400",
      height: "300",
      effect: "fadeInDown",
      onClickAway: () => this.closeModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "Add Transaction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-boxes",
      id: "add-form" // style={{ display: "none" }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.testForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, " Name: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handlename,
      type: "text",
      name: "transaction_name",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, " Amount: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handleamt,
      type: "text",
      pattern: "[0-9]*",
      name: "transaction_amount",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, " Category: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      onChange: this.handlecat,
      name: "one",
      className: "dropdown-select",
      text: "Category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Food",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Transit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "Transit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Entertainment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Entertainment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Health",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Clothing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "Entertainment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Tech",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Health")), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, " Subscription? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handlesub,
      type: "text",
      name: "transaction_sub",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, " Date (MMDDYYYY): "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handledate,
      type: "text",
      pattern: "[0-9]*",
      name: "Delta",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }), " ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "Add Transaction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "javascript:void(0);",
      onClick: () => this.closeModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Close"))), trans));
  }

}

const getImage = category => {
  let logo;

  switch (category) {
    case "tech":
      logo = "../assets/tech.png";

    case "food":
      logo = "../assets/food.png";

    case "clothing":
      logo = "../assets/clothing.png";

    case "transit":
      logo = "../assets/transit.png";

    case "health":
      logo = "../assets/health.png";

    case "entertainment":
      logo = "../assets/entertainment.png";
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: object => dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_3__["addTransactionThunk"])(object)),
    deleteTransaction: object => dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_3__["removeTransactionThunk"])(object))
  };
}; // maps whether user logged in to state


const mapStateToProps = state => {
  return {
    user: state.user,
    transactions: state.transactions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Transaction))); //export default withRouter(Transaction);

/***/ }),

/***/ "./src/components/Budget.jsx":
/*!***********************************!*\
  !*** ./src/components/Budget.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./src/components/NavBar.jsx");
/* harmony import */ var _Pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pie */ "./src/components/Pie.jsx");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/Budget.jsx";




class Budget extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), "THIS IS THE BUDGET PAGE", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Budget);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./src/components/NavBar.jsx");
/* harmony import */ var _ListTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTransactions */ "./src/components/ListTransactions.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Pie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pie */ "./src/components/Pie.jsx");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/Home.js";



 // import { connect } from "http2";




 // import PieChart from "react-minimal-pie-chart";



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    this.props.getTransactions(this.props.user.id);
  } // componentDidUpdate() {
  //   let arr1 = this.props.transactions;
  //   let sum = 0;
  //   let dict = {};
  //   this.state.Categories.forEach(item => (dict[item] = []));
  //   arr1.forEach(trans => {
  //     console.log(trans.title);
  //     dict[trans.category].push(trans);
  //   });
  //   for (let i in dict) {
  //     sum += i.cost;
  //     this.setState({ [i]: sum });
  //   }
  // }
  // findSum() {
  //   arr = this.props.transactions;
  //   arr.map;
  // }


  render() {
    if (!this.props.user.id) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pie__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListTransactions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }));
  }

}

const mapStateToProps = state => {
  console.log(state.transactions);
  return {
    user: state.user,
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: userID => dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_5__["getTransactions"])(userID))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./src/components/ListTransactions.jsx":
/*!*********************************************!*\
  !*** ./src/components/ListTransactions.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/ListTransactions.jsx";





class ListTransactions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.getImage = category => {
      // images[] must contain all images in the directory
      category = category.toLowerCase();
      let images = ["clothing", "food", "transit", "entertainment", "health", "tech"];
      let fulldir;

      if (images.includes(category)) {
        fulldir = "assets/" + category + ".png";
      } else if (category === "clothes") {
        fulldir = "assets/" + "clothing" + ".png";
      } else {
        fulldir = "assets/" + "unknown" + ".png";
      }

      return fulldir;
    };

    this.deleteTransaction = event => {
      this.props.deleteTransaction(event.target.value);
    };

    this.state = {
      transactions: [],
      imageurl: "assets/unknown.png"
    };
  }

  componentDidMount() {
    this.props.getTransactions(this.props.user.id);
  }

  render() {
    let sorted = this.props.transactions.sort((a, b) => {
      let x = a.date.replace(/-/g, "").replace(/[\/]/g, "");
      let y = b.date.replace(/-/g, "").replace(/[\/]/g, "");

      if (x < y) {
        return 1;
      }

      if (x > y) {
        return -1;
      }

      return 0;
    }); // sorted = sorted.slice(0, 10);

    let trans = sorted.map(tran => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card card-portrait",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.getImage(tran.category),
      alt: tran.category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, " ", tran.title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Date: ", tran.date, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Cost: ", tran.cost, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      value: tran.id,
      type: "button",
      onClick: this.deleteTranaction,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Delete Transaction"))));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "all-trans",
      className: "card-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, trans);
  }

}

const mapState = state => {
  return {
    transactions: state.transactions,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTransaction: object => dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["removeTransactionThunk"])(object)),
    getTransactions: userID => dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["getTransactions"])(userID))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapState, mapDispatchToProps)(ListTransactions));

/***/ }),

/***/ "./src/components/Login-Old.jsx":
/*!**************************************!*\
  !*** ./src/components/Login-Old.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/Login-Old.jsx";



class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    console.log(this.props.history.push("/NewAccount"));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-boxes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      action: "/Login/",
      method: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, " Email: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "email",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, " Password: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), " ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: this.changePage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "New Account"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Login));

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.js */ "./src/css/style.js");

var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/Modal.js";


class Modal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    let effect = props.effect || "fadeInDown";
    this.setSize(effect);
    this.state = {
      visible: props.visible,
      style: _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect]
    };
  }

  componentWillReceiveProps({
    visible,
    effect = "fadeInDown"
  }) {
    this.setState({
      visible: visible
    });
    this.setSize(effect);
    this.setStyles(effect);
  }

  setStyles(effect) {
    if (this.props && this.props.styles) {
      _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel = Object(_Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel, this.props.styles);
    }
  }

  setSize(effect) {
    if (this.props && this.props.width) {
      if (this.props.width.charAt(this.props.width.length - 1) === "%") {
        // Use Percentage
        const width = this.props.width.slice(0, -1);
        _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel.width = width + "%";
      } else if (this.props.width.charAt(this.props.width.length - 1) === "x") {
        // Use Pixels
        const width = this.props.width.slice(0, -2);
        _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel.width = width + "px";
      } else {
        // Defaults
        _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel.width = this.props.width + "px";
      }
    }

    if (this.props && this.props.height) {
      if (this.props.height.charAt(this.props.height.length - 1) === "%") {
        // Use Percentage
        const height = this.props.height.slice(0, -1);
        _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel.height = height + "vh";
      } else if (this.props.height.charAt(this.props.height.length - 1) === "x") {
        // Use Pixels
        const height = this.props.height.slice(0, -2);
        _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel.height = height + "px";
      } else {
        // Defaults
        _css_style_js__WEBPACK_IMPORTED_MODULE_2__["default"][effect].panel.height = this.props.height + "px";
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: this.state.visible ? this.state.style.container : this.state.style.containerHidden,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: this.state.visible ? Object(_Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.style.panel) : this.state.style.panelHidden,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: this.state.visible ? this.state.style.mask : this.state.style.maskHidden,
      onClick: this.props.onClickAway ? this.props.onClickAway : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/NavBar.jsx";



function NavBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/Transaction/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Transaction"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/Budget/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Budget"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/Account/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Account"), " ")));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/NewAccount.jsx":
/*!***************************************!*\
  !*** ./src/components/NewAccount.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _NewAccountForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewAccountForm.jsx */ "./src/components/NewAccountForm.jsx");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/NewAccount.jsx";





const NewAccount = props => {
  const handleSubmit = props.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, " Make a New Account with PerFi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewAccountForm_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }));
}; // username email firstName lastName password
// redirects to home page after successful login


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const username = evt.target.username.value;
      const email = evt.target.email.value;
      const firstname = evt.target.firstname.value;
      const lastname = evt.target.lastname.value;
      const password = evt.target.password.value;
      const budget = evt.target.budget.value;
      dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["register"])({
        username,
        email,
        firstname,
        lastname,
        password,
        budget
      })).then(() => {
        ownProps.history.push("/");
      });
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(NewAccount));

/***/ }),

/***/ "./src/components/NewAccountForm.jsx":
/*!*******************************************!*\
  !*** ./src/components/NewAccountForm.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/NewAccountForm.jsx";


const NewAccountForm = props => {
  const handleSubmit = props.handleSubmit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "firstname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "lastname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Budget"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    name: "budget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Register")));
};

/* harmony default export */ __webpack_exports__["default"] = (NewAccountForm);

/***/ }),

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

/***/ }),

/***/ "./src/components/account-page.js":
/*!****************************************!*\
  !*** ./src/components/account-page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _NavBar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar.jsx */ "./src/components/NavBar.jsx");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/account-page.js";






const AccountPage = props => {
  const user = props.user,
        handleClick = props.handleClick;

  if (!user.id) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Welcome Back ", user.firstname, "!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Name: ", user.firstname, " ", user.lastname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Username: ", user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Email: ", user.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Logout"));
}; // maps whether user logged in to state


const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick() {
      dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_3__["logout"])()).then(() => {
        ownProps.history.push('/');
      });
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(AccountPage));

/***/ }),

/***/ "./src/components/login-form.jsx":
/*!***************************************!*\
  !*** ./src/components/login-form.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/login-form.jsx";


const LoginForm = props => {
  const handleSubmit = props.handleSubmit,
        handleClick = props.handleClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, " Login "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Password")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Register")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/components/login.jsx":
/*!**********************************!*\
  !*** ./src/components/login.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form */ "./src/components/login-form.jsx");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/components/login.jsx";






const Login = props => {
  const handleSubmit = props.handleSubmit,
        handleClick = props.handleClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleSubmit: handleSubmit,
    handleClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })));
}; // redirects to home page after successful login


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["login"])({
        email,
        password
      })).then(() => {
        ownProps.history.push("/Home");
      });
    },

    handleClick() {
      ownProps.history.push("/newaccount");
    } // getTrans: dispatch(getTransactions)


  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Login));

/***/ }),

/***/ "./src/css/App.css":
/*!*************************!*\
  !*** ./src/css/App.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/App.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/css/Global.css":
/*!****************************!*\
  !*** ./src/css/Global.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Global.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Global.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Global.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/css/fadeInDown.js":
/*!*******************************!*\
  !*** ./src/css/fadeInDown.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mask: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 10001
  },
  maskHidden: {
    display: "none"
  },
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000
  },
  containerHidden: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1
  },
  panel: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxSizing: "border-box",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transform: "translate3d(0, 0, 0)",
    transition: "transform 500ms cubic-bezier(0, 0, 0.25, 1), opacity 500ms cubic-bezier(0, 0, 0.25, 1)",
    zIndex: 10002
  },
  panelHidden: {
    transform: "translate3d(0, -100px, 0)",
    opacity: 0,
    zIndex: -1,
    height: 0,
    width: 0,
    overflow: "hidden"
  }
});

/***/ }),

/***/ "./src/css/style.js":
/*!**************************!*\
  !*** ./src/css/style.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fadeInDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fadeInDown */ "./src/css/fadeInDown.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  fadeInDown: _fadeInDown__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/App.css */ "./src/css/App.css");
/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_Global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/Global.css */ "./src/css/Global.css");
/* harmony import */ var _css_Global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Global_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/index */ "./src/store/index.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login */ "./src/components/login.jsx");
/* harmony import */ var _components_account_page_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account-page.js */ "./src/components/account-page.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.jsx");
/* harmony import */ var _components_NewAccount_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/NewAccount.jsx */ "./src/components/NewAccount.jsx");
/* harmony import */ var _components_Login_Old_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Login-Old.jsx */ "./src/components/Login-Old.jsx");
/* harmony import */ var _components_AddTransaction_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AddTransaction.jsx */ "./src/components/AddTransaction.jsx");
/* harmony import */ var _components_Budget_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Budget.jsx */ "./src/components/Budget.jsx");
var _jsxFileName = "/Users/marjanansar/PerFi/perfi-frontend/src/index.js";
// import React from "react";
















 // dumb component used for templating

var DumbComponent = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  });
};

const Main = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    _store_index__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_8__["getMe"])()).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/",
      exact: true,
      component: _components_login__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/Home/",
      component: _components_Home__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/Account/",
      component: _components_account_page_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/Transaction/",
      component: _components_AddTransaction_jsx__WEBPACK_IMPORTED_MODULE_15__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/Login/",
      component: _components_Login_Old_jsx__WEBPACK_IMPORTED_MODULE_14__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/NewAccount/",
      component: _components_NewAccount_jsx__WEBPACK_IMPORTED_MODULE_13__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/Budget/",
      component: _components_Budget_jsx__WEBPACK_IMPORTED_MODULE_16__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  }

});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: _store_index__WEBPACK_IMPORTED_MODULE_8__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}))), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["register"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getTransactions, getAccount, getMe, login, logout, register, default, addTransactionThunk, removeTransactionThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactions", function() { return getTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccount", function() { return getAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMe", function() { return getMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransactionThunk", function() { return addTransactionThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTransactionThunk", function() { return removeTransactionThunk; });
/* harmony import */ var _Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





const initialState = {
  user: {},
  transactions: []
};
const GET_USER = "GET_USER";
const GET_ACCOUNT = "GET_ACCOUNT";
const GET_TRANSACTIONS = "GET_TRANSACTIONS";
const ADD_TRANSACTION = 'ADD_TRANSACTION'; //using '/transactions'

const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'; //using 'transactions/:id'
// implemented but not used yet
//const EDIT_TRANSACTION = 'EDIT_TRANSACTION' //using 'transaction/:id'
// const ADD_BUDGET = 'ADD_BUDGET'
// const REMOVE_BUDGET = 'REMOVE_BUDGET'

const gotMe = user => ({
  type: GET_USER,
  user
});

const gotTransactions = transactions => ({
  type: GET_TRANSACTIONS,
  transactions
});

const addTransaction = () => ({
  type: ADD_TRANSACTION
});

const removeTransaction = () => ({
  type: REMOVE_TRANSACTION
});

const getTransactions = userid => dispatch => {
  let url = "http://localhost:3000/routers/transactions/" + userid;
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(res => {
    return res.data;
  }).then(transactions => dispatch(gotTransactions(transactions))).catch(console.error.bind(console));
};
const getAccount = () => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:3000/auth/account").then(res => res.data).then(user => dispatch(gotMe(user))).catch(console.error.bind(console));
}; // get user verification

const getMe = () => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:3000/auth/me").then(res => res.data).then(user => dispatch(gotMe(user))).catch(console.error.bind(console));
}; // for logging in, beginning session

const login = formData => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:3000/auth/login", formData).then(res => res.data).then(user => dispatch(gotMe(user))).catch(console.error.bind(console));
}; // for logging out, ending session

const logout = () => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete("http://localhost:3000/auth/logout").then(() => dispatch(gotMe(initialState.user))).catch(console.error.bind(console));
};
const register = formData => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:3000/routers/users", formData);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return Object(_Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: action.user
      });

    case GET_ACCOUNT:
      return Object(_Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: action.user
      });

    case GET_TRANSACTIONS:
      return Object(_Users_marjanansar_PerFi_perfi_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        transactions: action.transactions
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a))); // TRANSACTIONS THUNKS
// const ADD_TRANSACTION = 'ADD_TRANSACTION' //using '/transactions'

const addTransactionThunk = object => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3000/routers/transactions', object).then(() => dispatch(addTransaction()));
}; //Implemented but not used yet
//const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION' 'transactions/:id'

const removeTransactionThunk = id => dispatch => {
  let url = "http://localhost:3000/routers/transactions/" + id;
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(url).then(() => dispatch(removeTransaction()));
};
/*
// const EDIT_TRANSACTION = 'EDIT_TRANSACTION' 'transaction/:id'
export const editTransactionThunk = (id) =>
{
    let url = '/routers/transactions' + id;
    return axios.put(url);
}
*/

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/marjanansar/PerFi/perfi-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/marjanansar/PerFi/perfi-frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map