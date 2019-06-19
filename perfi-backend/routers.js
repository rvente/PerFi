const express = require('express')
const morgan = require('morgan')
const parser = require('body-parser')
const router = express.Router()
const {User,Transaction} = require('./db');
//const func = require('./queryTest')
module.exports = router

router.use(morgan('dev'))
router.use(parser.json())
router.use(
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
    //router.get('/users',allUsers()) 
    //console.log("here",func)
    //console.log(func.allUsers)
    //let result = func.allUsers();
    //console.log("there",result)
    router.get('/users',(req,res,next) => {
        User.findAll()
            .then(userResponse => {
                res.status(200).json(userResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
        //res.json(result);
    })
    //console.log(result)
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

