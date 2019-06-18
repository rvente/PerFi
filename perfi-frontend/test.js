const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/perfi', {logging:false})

db.authenticate().then(() => {
	console.log("Success!");
}).catch((err) => {
	console.log(err);
})

users.findAll({
	where: {
		id: 1
	}
}).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err);
}