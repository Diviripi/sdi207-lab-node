var express = require('express');
var app = express();
var os = require('os');
var puerto = 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, UPDATE, PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
	// Debemos especificar todas las headers que se aceptan. Content-Type , token
	next();
   });


app.get('/fullname', function(req, res) {
    var name = req.params.name ||  req.query.name;
    var surname = req.params.surname || req.query.surname;
   
    if (name == null || surname == null) {
        res.status(500);
        res.json({ error: 'se ha producido un error' });
    } else {
        var fullname = name + ' ' + surname;
        res.status(200);
        res.send({ "fullname": fullname });
    }
});

app.post('/fullname', function(req, res) {
    var name = req.body.name;
    var surname = req.body.surname;
    if (name == null || surname == null) {
        res.status(500);
        res.json({ error: 'se ha producido un error' });
    } else {
        var fullname = name + ' ' + surname;
        res.status(200);
        res.send({ fullname: fullname });
    }
});
app.listen(puerto, function() {
	console.log('Servidor listo ' + puerto);
});
