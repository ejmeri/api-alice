//sempre trocar aqui quando for subir em producao, depois faço uma regra mais certinha pra prod e homo
const mysql = require('../config/postgres');

if (!global.hasOwnProperty('db')) {
	var Sequelize = require('sequelize'),
		sequelize = null

	// the application is executed on the local machine ... use mysql
	sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, mysql.params);


	global.db = {
		Sequelize: Sequelize,
		sequelize: sequelize,
		Dream: sequelize.import(__dirname + '/dream'),
		
		// Ejota: sequelize.import(__dirname + '/ejota'),
		// add your other models here
		// up
	}

	/*
	  Associations can be defined here. E.g. like this:
	  global.db.User.hasMany(global.db.SomethingElse)
	*/


	// JOINERS
//	global.db.Question.belongsTo(global.db.Profile);

}

module.exports = global.db;