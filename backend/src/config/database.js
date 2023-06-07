const mysql = require("mysql");
const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    // password: '',
    database: 'wiki'
});

conn.connect((err) => {
    if (err) {
        console.log(`Error en conexión a MySQL ${err.message}`);
    } else {
        console.log(`Conexión satisfactoria a la DB`);
    }
});

module.exports = conn;