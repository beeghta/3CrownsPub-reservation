const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Xurl#TJy*413",
    database: "3crowns",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;