import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login.jsx';
import Transaction from './AddTransaction.jsx';
import RegisterComponent from './Register';
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
        {/* Login page */}
            <Route path="/" exact component={DumbComponent} />
        {/* Home page */}
            <Route path="/home/" component={DumbComponent} />
            <Route path="/transactions/" component={Transaction} />
            <Route path="/budgets/" component={DumbComponent} />
        {/* Account page */}
            <Route path="/account/" component={LoginComponent}/>
            <Route path="/newaccount/" component={RegisterComponent}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
