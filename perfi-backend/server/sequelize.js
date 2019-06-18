var Sequelize = require('sequelize');
var db = new Sequelize('posgres://localhost:5432/perfiDatabase');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
/*
const User = UserModel(db, Sequelize);

// define temp models here
const User = db.define('users', {
	username: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
		validate: {
			isEmail: true
		}
	},
	firstname: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	}, 
	password: {
		type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.DOUBLE
    }
})
const Transaction = db.define('transactions', {
	date: {
		type: Sequelize.STRING
	},
	cost: {
		type: Sequelize.INTEGER
	},
	title: {
		type: Sequelize.STRING
	},
	category: {
		type: Sequelize.STRING
	},
	userid: {
		type: Sequelize.STRING
	}
})

// model associations
db.Transaction.belongsTo(db.User);
db.User.hasMany(db.Transaction);
*/

// INSTANCE METHODS: USER


// CLASS METHODS: USER
    // ADD USER
    export const addUser = db.User.addUser = function({username,email,first, last, pass})
    {
        db.User.create({username:username, email:email,firstname:first, lastname:last, password:pass})
        .then(newUser => {
            console.log({newUser});
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
    // REMOVE USER
    
// INSTANCE METHODS: TRANSACTIONS
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
   

