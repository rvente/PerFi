const Sequelize = require('sequelize');
const{User,Transaction} = require('./db');
const db = new Sequelize('postgres://localhost/perfi')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

// CLASS METHODS: USER
    // ALL USERS
     const allUsers = User.allUsers = function()
    {
        //return array of usernames
        User.findAll().then(users => {
        console.log("All Users:", JSON.stringify (users, null, 4))});
    }
/*
    // ADD USER
    export const addUser = db.User.addUser = function({username,email,first, last, pass})
    {
        db.User.create({username:username, email:email,firstname:first, lastname:last, password:pass})
        .then(newUser => {
            console.log({newUser});
            return {id};
        });
    }
// GET USER
export const getUser = db.User.getUser = function({username,pass})
{
    return db.User.findOne ({
        where:{
            username:username,
            password:pass
        }
    })
}
// DELETE USER
export const deleteUser = db.User.deleteUser = function ({userID})
{
    db.User.destroy({
        where:{id:userID}
    })
}

// INSTANCE METHODS: USER
    // CHANGE BUDGET
    export const changeBudget = db.User.changeBudget = function ({userid, budget})
    {
        db.User.findOne({
            userid: userid
        })
        .then( user =>
            {
                user.updateAttributes({
                    budget:budget
                });
            }
        );
    }
// CLASS METHODS: TRANSACTIONS
    // FIND ALL TRANSACTIONS BASED ON USER ID
    export const findTransactions = db.Transaction.findTransactions = function(userID)
    {
        return db.Transaction.findAll({
            where: {
                userid: userID
            }
        })
    }

//ADD TRANSACTION BASED ON USER ID
export const addTransaction = db.Transaction.addTransaction = function(userID, date,cost,
    title,category)
{
    db.Transaction.create({date:date, cost:cost, title:title, category:category, userid:userID })
    .then(name =>
        console.log(name))
}

// DELETE TRANSACTION
export const deleteTransaction = db.Transaction.deleteTransaction = function(id)
{
    db.Transaction.destroy({
        where:{
            id:id
        }
    })
}
*/


module.exports = {
    allUsers
}