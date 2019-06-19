import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewAccount from "./components/NewAccount.jsx";
import Login2 from "./components/Login.jsx";
import Transaction from "./components/AddTransaction.jsx";
import Login from "./components/login";
import AccountPage from "./components/account-page";
import Home from "./components/Home";

import "./css/App.css";
import "./css/Global.css";

const LoginComponent = () => <Login />;

// dumb component used for templating
var DumbComponent = () => {
  return <div />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/account" component={AccountPage} />
          <Route component={Login} />
          <Route path="/" exact component={DumbComponent} />
          <Route path="/Home/" component={Home} />
          <Route path="/Transaction/" component={Transaction} />
          <Route path="/Budget/" component={DumbComponent} />
          <Route path="/Account/" component={LoginComponent} />
          <Route path="/NewAccount/" component={NewAccount} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
