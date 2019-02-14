const mysql = require('mysql')
const config = require('../config/keys')

// create DB connection
const dbConfig = {
    connectionLimit: 10,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db
}
let db = mysql.createPool(dbConfig)

module.exports = db
