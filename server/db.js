const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "bogvyoe71lqe2k0ka7a9-mysql.services.clever-cloud.com",
    user: "root",
    password: "Xurl3FGRpJknuY9kjK5xbsJrTJy*413",
    database: "bogvyoe71lqe2k0ka7a9",
    waitForConnections: true,
    connectionLimit: 2,
    DB_PORT: 3306
});

module.exports = pool;