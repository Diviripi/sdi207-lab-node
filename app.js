// Módulos
var express = require('express');
var app = express();
var swig = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Variables
app.set('port', 8081);
app.use(express.static('public'));


//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig);
require("./routes/rcanciones.js")(app, swig); 
// lanzar el servidor
app.listen(app.get('port'), function() {
console.log("Servidor activo");
})
