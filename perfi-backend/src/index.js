import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import store, {getMe} from './components/store/index'
import Login from './components/login'
import AccountPage from './components/account-page'
import HomePage from './components/home-page'

const Main = withRouter(class extends Component {
  componentDidMount () {
    store.dispatch(getMe())
      .then(() => {
        this.props.history.push('/')
      })
  }


  render () {
    return (
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/account' component={AccountPage} />
        <Route component={Login} />
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
  document.getElementById('app')
)
