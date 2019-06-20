import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

const initialState = {
  user: {},
  transactions: []
};

const GET_USER = "GET_USER";
const GET_ACCOUNT = "GET_ACCOUNT";
const GET_TRANSACTIONS = "GET_TRANSACTIONS";

const ADD_TRANSACTION = 'ADD_TRANSACTION' //using '/transactions'

// implemented but not used yet
//const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION' //using 'transactions/:id'
//const EDIT_TRANSACTION = 'EDIT_TRANSACTION' //using 'transaction/:id'

// const ADD_BUDGET = 'ADD_BUDGET'
// const REMOVE_BUDGET = 'REMOVE_BUDGET'

const gotMe = (user) => ({
  type: GET_USER,
  user
});

const gotTransactions = transactions => ({
  type: GET_TRANSACTIONS,
  transactions
});

const addTransaction = () =>({
  type:ADD_TRANSACTION
});


export const getTransactions = () => dispatch => {
  return axios
    .get("http://localhost:3000/routers/transactions")
    .then(res => {
      return res.data;
    })
    .then(transactions => dispatch(gotTransactions(transactions)))
    .catch(console.error.bind(console));
};

export const getAccount = () => dispatch => {
  return axios
    .get("http://localhost:3000/auth/account")
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

// get user verification
export const getMe = () => dispatch => {
  return axios
    .get("http://localhost:3000/auth/me")
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

// for logging in, beginning session
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

export const register = formData => dispatch => {
  return console.log(formData);
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    case GET_ACCOUNT:
      return {
        ...state,
        user: action.user
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions
      };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);


// TRANSACTIONS THUNKS
// const ADD_TRANSACTION = 'ADD_TRANSACTION' //using '/transactions'
export const addTransactionThunk = (object) => dispatch =>
{
    return axios.post('http://localhost:3000/routers/transactions', object)
    .then(() => dispatch(addTransaction()));
}


//Implemented but not used yet
/*
//const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION' 'transactions/:id'
export const removeTransactionThunk = (id) =>
{
    let url = "/routers/transactions" + id;
    return axios.delete(url);
}

// const EDIT_TRANSACTION = 'EDIT_TRANSACTION' 'transaction/:id'
export const editTransactionThunk = (id) =>
{
    let url = '/routers/transactions' + id;
    return axios.put(url);
}
*/
