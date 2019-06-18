import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import NewAccount from './NewAccount.jsx';
import Login from './Login.jsx';
import Transaction from './AddTransaction.jsx';
import RegisterComponent from './Register.jsx';
import '../css/App.css';
import '../css/Global.css';

const LoginComponent = () => (<Login />);

// dumb component used for templating
var DumbComponent = () => {return(<div></div>);};

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Route path="/" exact component={DumbComponent} />
          <Route path="/Home/" component={DumbComponent} />
          <Route path="/Transaction/" component={Transaction} />
          <Route path="/Budget/" component={DumbComponent} />
          <Route path="/Account/" component={LoginComponent}/>
          <Route path="/NewAccount/" component={NewAccount}/>
          <Router path="/Register/" component={RegisterComponent}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
