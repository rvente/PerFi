import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";


// FOR initially no user logged in
const initialState = {
  user: {}
};

// GET USER from database to confirm login
const GET_USER = "GET_USER";
const NEW_USER = "NEW_USER";
// unimplemented
// const ADD_TRANSACTION = 'ADD_TRANSACTION'
// const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'
// const ADD_BUDGET = 'ADD_BUDGET'
// const REMOVE_BUDGET = 'REMOVE_BUDGET'

const gotMe = (user) => ({
  type: GET_USER,
  user
});

const newUser = () => ({
  type: NEW_USER
})

// FOR registering a new user, adds user object into table
export const registerThunk = (userData) => dispatch => {
  return axios.post('http://localhost:3000/routers/users',userData)
    .catch(console.error.bind(console));
}

// get user verification
export const getMe = () => dispatch => {
  return axios
    .get("http://localhost:3000/auth/me")
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

// FOR logging in, beginning session 
// RETURNS user as object
// {"email":"john@john.com", "password":"12345"}
export const login = formData => dispatch => {
  return axios
    .put("http://localhost:3000/auth/login", formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

// for logging out, ending session
export const logout = () => dispatch => {
  return axios
    .delete("/auth/logout")
    .then(() => dispatch(gotMe(initialState.user)))
    .catch(console.error.bind(console));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    case NEW_ACCOUNT:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default createStore(
  reducer,
  registerThunk,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
