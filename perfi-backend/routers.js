const express = require('express');
const router = express.Router()
const morgan = require('morgan')
const parser = require('body-parser')
const {allUsers} = require ('./queryTest')
const app = express()


app.use(morgan('dev'))
app.use(parser.json())
app.use(
    parser.urlencoded({
        extended:true
    })
)

// USER METHODS
    /*
    //ADD USER
    app.post('/users', queries.addUser)
    
    
    //GET USER
    app.get('/users/:id', queries.getUser)
    */

    //GET ALL USERS
    app.get('/users', allUsers)
    /*
    // DELETE USERS
    app.delete('users/:id', queries.deleteUser)
    // CHANGE BUDGET
    app.put('/users/:id', queries.changeBudget)

// TRANSACTION METHODS
    //ADD TRANSACTION
    app.post('transactions', queries.addtransaction)
    //DELETE TRANSACTION
    app.delete('transactions/:id', queries.deleteTransaction)
    //GET ALL TRANSACTION (per user)
    app.get('transactions/:user', queries.findTransactions)
    */