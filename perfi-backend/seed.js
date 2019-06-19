const {db, User, Transaction} = require('./db')

const seed = async () => {
	try {
		await db.sync({force:true})
		await User.create({
			username: 'JohnnyBoy',
			email: 'john@john.com',
			password: '12345',
			firstname: 'John',
			lastname: 'Nhoj'
		})
		await User.create({
			username: 'TimmyBoy',
			email: 'Tim@tim.com',
			password: '12345',
			firstname: 'Tim',
			lastname: 'Mit'
		})

		await Transaction.create({
			date: '06-21-2019',
			cost: 5.00,
			title: 'matcha',
			category: 'food',
			userid: 1,
			subscription: 1
		})

		await Transaction.create({
			date: '06-22-2019',
			cost: 12.00,
			title: 'T-shirt',
			category: 'clothes',
			userid: 2,
			subscription: 0
		})

		console.log(`
			Seed success!
		`)
		db.close() 
	}
	catch (err) {
		console.log(`
			Seed didn't work!
			`)
		console.error(err.stack)
		db.close()
	}
}

seed()
