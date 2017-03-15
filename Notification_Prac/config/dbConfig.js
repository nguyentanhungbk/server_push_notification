var Config = require('./config/applicationConfig');
var mysql = require('mysql');

var connections = mysql.createPool({
    connectionLimit: 100,
    host: Configuration.Data.Host,
    user: Configuration.Data.user,
    database: Configuration.Data.database,
});

module.exports = connections;
