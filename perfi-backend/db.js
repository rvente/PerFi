const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/perfi', {logging:false})


// creates dummy database
// defines User module
const User = db.define('users', {
	username: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	firstname: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	lastname: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	password: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	budget:{
		type: Sequelize.INTEGER
	}
})

const Transaction = db.define('transactions', {
	date: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	cost: {
		type: Sequelize.INTEGER,
		validate: {
			notEmpty: true
		}
	},
	title: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	category: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	userid: {
		type: Sequelize.INTEGER,
		validate: {
			notEmpty: true
		}
	},
	subscription: {
		type: Sequelize.INTEGER,
		validate: {
			notEmpty: true
		}
	}
	// accessor
	// mutator
})


/***/
Transaction.belongsTo(User, {as: 'user'});
User.hasMany(Transaction, {as: 'Transaction'});
/***/


// exports db, User, and Transaction modules
module.exports = {
	db,
	User,
	Transaction
}
