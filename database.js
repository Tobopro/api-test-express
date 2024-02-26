const mysql = require("mysql2");

//BDD
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "api-express"
})

module.exports = pool.promise();
