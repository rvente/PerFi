// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/App.css";
import "./css/Global.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import store, { getMe } from "./store/index";
import Login from "./components/login";
import AccountPage from "./components/account-page";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewAccount from "./components/NewAccount.jsx";
import LoginComponent from "./components/Login-Old.jsx";
import Transaction from "./components/AddTransaction.jsx";
// dumb component used for templating
var DumbComponent = () => {
  return <div />;
};

const Main = withRouter(
  class extends Component {
    // componentDidMount() {
    //   store.dispatch(getMe()).then(() => {
    //     this.props.history.push("/");
    //   });
    // }

    render() {
      return (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route exact path="/account" component={Home} />
          <Route path="/Home/" component={Home} />
          <Route path="/Transaction/" component={Transaction} />
          {/* <Route path="/Budget/" component={DumbComponent} /> */}
          <Route path="/Account/" component={DumbComponent} />
          <Route path="/Login/" component={LoginComponent} />
          <Route path="/NewAccount/" component={NewAccount} />
          <Route path="/Budget/" component={Home} />
        </Switch>
      );
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
