const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    password: "9604",
    user: "Nayan",
    database: "DB_test",
    port: "3306"
})


module.exports = pool