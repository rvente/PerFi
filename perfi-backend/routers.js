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
    router.get('/users',(req,res) => {
        User.findAll()
            .then(userResponse => {
                res.status(200).json(userResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    })

    // ADD USER, async call as the next call is not contingent upon it
    // {"username":"timTam", "email":"tam@email","firstname":"tim", "lastname":"tam", "password":12345}
    router.post('/users', async function(req,res) {
        User.create({
                username:req.body.username, 
                email:req.body.email,
                firstname:req.body.firstname, 
                lastname:req.body.lastname, 
                password:req.body.password})
        .then(newUser => {
            console.log({newUser});
            return {id};
        })
        .catch(error => {
            res.status(400).send(error)
        })
    })


    // reference link: https://expressjs.com/en/guide/writing-middleware.html
    // GET SPECIFIC USER (where id of user has been appended to "http://localhost:3000/routers/users/" in thunk axios request in /reducer/index)
/*    router.get('/users/:id', function(request, response) {
        User.findOne({where: {id:request.params.id}})
            .then(userResponse => {
                response.status(200).json(userResponse)
            })
            .catch(error => {
                response.status(400).send(error)
            })
    })
*/  

    // DELETE USER by id, async call as the next call is not contingent upon it
    // make it a
/*    router.delete('/users/:id', async function(req,res,next) {
        User.destroy({where: {id:req.params.id}})
            .catch(error => {
                response.status(400).send(error)
            })
            .next();
    })
*/
    
    // route requests for a specific user
    router.route('/users/:id')
    // reference link: https://expressjs.com/en/guide/writing-middleware.html
    // GET SPECIFIC USER (where id of user has been appended to "http://localhost:3000/routers/users/" in thunk axios request in /reducer/index)
        .get(function(request, response) {
            User.findOne({
                where: {id:request.params.id}
                })
                .then(userResponse => {
                    response.status(200).json(userResponse)
                })
                .catch(error => {
                    response.status(400).send(error)
                })
        })
    // PUT NEW INFORMATION FOR A USER
        .put(async function(req, res) {
            User.findOne({
                where: {id:req.params.id}
                })
                .then(user =>  {
                    user.updateAttributes({
                        username:req.body.username, 
                        email:req.body.email,
                        firstname:req.body.firstname, 
                        lastname:req.body.lastname, 
                        password:req.body.password
                        })
                })
                .catch(error => {
                    res.status(400).send(error)
                })
            })
    // DELETE USER by id, async call as the next call is not contingent upon it
    // make it asynchronous
        .delete(async function(req,res,next) {
            User.destroy({
                where: {id:req.params.id}
                })
                .catch(error => {
                    response.status(400).send(error)
                })
                .next();
                })

    

    // route requests for the transactions of a user

 /*   // CHANGE BUDGET
    app.put('/users/:id', queries.changeBudget)
// TRANSACTION METHODS
    //ADD TRANSACTION
    app.post('transactions', queries.addtransaction)
    //DELETE TRANSACTION
    app.delete('transactions/:id', queries.deleteTransaction)
    */

    //GET ALL TRANSACTION
    router.get('/transactions',(req,res,next) => {
        Transaction.findAll({where: {userid:1}})

            .then(transactionResponse => {
                res.status(200).json(transactionResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
            .next();
    })    

    // GET SPECIFIC transactions of a user (where userid has been appended to "http://localhost:3000/routers/transactions/" in thunk axios request in ./reducer/index)
    router.get('/transactions/:id', function(req, res) {
        Transaction.findOne({where: {userid:req.params.id}})
            .then(transactionResponse => {
                res.status(200).json(transactionResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    })

