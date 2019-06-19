const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/perfi', {logging:false})


// creates dummy database
// defines User module
const User = db.define('users', {
	username: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	firstname: {
		type: Sequelize.STRING
	},
	lastname: {
		type: Sequelize.STRING
	}, 
	password: {
		type: Sequelize.STRING
	},
	budget:{
		type: Sequelize.INTEGER
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
		type: Sequelize.INTEGER
	},
	subscription: {
		type: Sequelize.INTEGER
	}
	// accessor
	// mutator
})


/***/
/*
Transaction.belongsTo(User, {as: 'user'});
User.hasMany(Transaction, {as: 'Transaction'});
/***/ 


// exports db, User, and Transaction modules
module.exports = {
	db, 
	User, 
	Transaction
}


