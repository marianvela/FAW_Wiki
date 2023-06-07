const conn = require("../../config/database");

module.exports = (app) => {
    app.get('/sexoption', (req, res) => {
        let consulta = "SELECT sexID, descripcion FROM sex";
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({
                    status: 0,
                    mensaje: "Error al consultar tabla"
                });
            } 
            else {
                res.json({
                    status: 1,
                    mensaje: "Datos obtenidos de tabla",
                    value: rows
                });
            }
        });
    });
}