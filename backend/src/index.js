const app = require("./config/server");
require("./app/routes/login")(app);
require("./app/routes/comic")(app);
require("./app/routes/sexoption")(app);
require("./app/routes/editorial")(app);

app.listen(
    app.get("port"), 
    () =>console.log(`Ejecutando servidor en puerto ${app.get("port")}`)
);


