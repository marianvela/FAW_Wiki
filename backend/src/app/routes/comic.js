const conn = require("../../config/database");


module.exports = (app) => {

    // GET
    app.get('/comic', (req, res) => {
        let consulta = "SELECT comicID, userID, editorialID, comic, year, synopsis FROM comic";
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

    app.get('/comic/:id', (req, res) => {
        let consulta = `SELECT comicID, userID, editorialID, comic, year, synopsis FROM comic WHERE comicID = ${req.params.id}`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({
                    status: 0,
                    mensaje: "Error al consultar tabla"
                });
            } 
            else if(rows.length > 0){
                res.json({
                    status: 1,
                    mensaje: "Datos obtenidos de tabla",
                    value: rows[0]
                });
            }
            else {
                res.status(500).json({
                    status: 0,
                    mensaje: `No se encontró el id = ${req.params.id}`
                });
            }
        });
    });

    // POST
    app.post('/comic', (req, res) => {
        let consulta = `INSERT INTO comic (comic, userID, editorialID, year, synopsis) VALUES ('${req.body.comic}',${req.body.userID},${req.body.editorialID},'${req.body.year}','${req.body.synopsis}')` ;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({
                    status: 0,
                    mensaje: "No se pudo insertar"
                });
            } 
            else {
                res.json({
                    status: 1,
                    mensaje: "Insertado satisfactoriamente"
                });
            }
        });
    });

    //DELETE
    app.delete('/comic/:id', (req, res) => {
        let consulta = `DELETE FROM comic WHERE comicID = ${req.params.id}`;
        conn.query(consulta, (err, rows, cols) => {
            if(err) {
                res.status(500).json({
                    status: 0,
                    mensaje: "No se pudo borrar"
                });
            } 
            else {
                res.json({
                    status: 1,
                    mensaje: `Se eliminó correctamente el id = ${req.params.id}`
                });
            }
        });
    });

    // PUT
    app.put('/comic/:id', (req, res) => {
        let consulta = `UPDATE comic SET 
        comic = '${req.body.comic}',
        editorialID = ${req.body.editorialID},
        year = '${req.body.year}',
        synopsis = '${req.body.synopsis}'
        WHERE comicID = ${req.params.id}`;
        console.log(consulta);
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
                    mensaje: `Se actualizó el id = ${req.params.id}`
                });
            }
        });
    });
}
