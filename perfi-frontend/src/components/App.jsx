import React, { Component } from 'react'; // Used to render app as a component
import NavBar from './NavBar';

import '../css/App.css';
import '../css/Global.css';

class App extends Component {
  render(){
    return (
        <div className="App">
          <NavBar/>
        </div>
    );
  }
}

export default App;
