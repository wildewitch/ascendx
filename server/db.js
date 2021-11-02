//This file will log into the database via your POSTGRES LOG IN.

const Pool = require("pg").Pool;

//Creating an OBJECT for the login. All of this info needs to be consistent with the database.

const pool = new Pool({
	user: "postgres",
	password: "",
	host: "localhost",
	port: 5432,
	database: "ascendx",
});

module.exports = pool;
