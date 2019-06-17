const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/perfi', {logging:false})


// creates dummy database
// defines User module
const User = db.define('users', {
	id: {
		type: Sequelize.INTEGER,
		unique:true
	},
	username: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	firstname: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	}, 
	password: {
		type: Sequelize.STRING
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
})


module.exports = {
	db, User, Transaction
}


