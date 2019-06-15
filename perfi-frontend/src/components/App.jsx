<<<<<<< HEAD
import React from 'react';
import NavBar from './NavBar';
import '../css/Global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
    </div>
  );
=======
import React, { Component } from 'react'; // Used to render app as a component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';
import NewAccount from './NewAccount.jsx'
import '../css/App.css';

class App extends Component {
  render(){
    const LoginComponent = () => (<Login />);

    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/newaccount" component={NewAccount}/>
        </Switch>
      </Router>
    );
  }
>>>>>>> fd760f4872f86d49ccc12df8bc4bde6ec4cebfd7
}

export default App;
