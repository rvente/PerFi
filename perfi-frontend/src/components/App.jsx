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
}

export default App;
