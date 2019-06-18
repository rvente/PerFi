import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import store, {getMe} from './store/index'
import LoginComponent from './components/Login'
import Transaction from './components/AddTransaction';
import RegisterComponent from './components/Register';

const DumbComponent = () => {return(<div></div>);};

const Main = withRouter(class extends Component {
  // componentDidMount () {
  //   store.dispatch(getMe())
  //     .then(() => {
  //       this.props.history.push('/')
  //     })
  // }

  render () {
    return (
      <Switch>
        <Route path="/" exact component={DumbComponent} />
        <Route path="/Home/" component={DumbComponent} />
        <Route path="/Transaction/" component={Transaction} />
        <Route path="/Budget/" component={DumbComponent} />
        <Route path="/Account/" component={LoginComponent}/>
        <Route path="/NewAccount/" component={RegisterComponent}/>
      </Switch>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root')
)
