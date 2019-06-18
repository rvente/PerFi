import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const initialState = {
  user: {}
}

const GET_USER = 'GET_USER'
const GET_ACCOUNT = 'GET_ACCOUNT'

// unimplemented
const ADD_TRANSACTION = 'ADD_TRANSACTION'
const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'
const ADD_BUDGET = 'ADD_BUDGET'
const REMOVE_BUDGET = 'REMOVE_BUDGET'

const gotMe = (user) => ({
  type: GET_USER,
  user
})

export const getAccount = () => dispatch => {
  return axios.get('http://localhost:3000/auth/account')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))
}


// get user verification
export const getMe = () => dispatch => {
  return axios.get('http://localhost:3000/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))
}

// for logging in, beginning session
export const login = (formData) => dispatch => {
  return axios.put('http://localhost:3000/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))
}

// for logging out, ending session
export const logout = () => dispatch => {
  return axios.delete('/auth/logout')
    .then(() => dispatch(gotMe(initialState.user)))
    .catch(console.error.bind(console))
}

// for registering a new user
export const register = () => dispatch => {
  return axios.post('http://localhost:3000/auth/newaccount')
    .then((res)=>console.log(res))
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    case GET_ACCOUNT:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
