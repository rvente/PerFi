const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/perfi', {logging:false})


// defines User module
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

module.exports = {
	db, User, Transaction
}


