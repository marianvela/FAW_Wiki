const conn = require("../../config/database");

module.exports = (app) => {
    app.post("/login", (req, res, next) => {
        let consulta = `SELECT userID, mail, password, name FROM user WHERE mail LIKE '${req.body.mail}' AND password LIKE '${req.body.password}'`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.json({status: 0, mensaje: "Error en el servidor"});
            }
            else if(rows.length == 0) {
                res.json({status: 0, mensaje: "No se encontró un usuario con ese email y contraseña."});
            }
            else {
                res.json({status: 1, mensaje: "Usuario logueado correctamente.", user: rows[0]});
            }
        });
    });
    

    app.post('/signup', (req, res) => {
        let query = `INSERT INTO user (name, mail, password, sexID, birthday) VALUES ('${req.body.name}', '${req.body.mail}', '${req.body.password}', ${req.body.sexID}, '${req.body.birthday}')`;
        conn.query(query, (error, rows, col) => {
            if (error) {
                res.status(500).json({status: 0, message: "No se pudo insertar el usuario"});
            }
            else {
                res.json({status: 1, message: `Se inserto usuario satisfactoriamente`});
            }
        });
    });
}