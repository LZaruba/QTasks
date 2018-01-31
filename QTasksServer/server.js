require('babel-register');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/Task'),
  bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/tasksRoutes'); //importing route
routes(app); //register the route

var controller = require('./api/controllers/tasksController'); //importing route
function generateContent() {
	controller.generateNewTask();
}
generateContent();
setInterval(generateContent, 3000);

//app.use(function(req, res, next) {
//	res.status(404).send({
//		url : req.originalUrl + ' not found'
//	});
//	next();
//});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.status(404).send({
		url : req.originalUrl + ' not found'
	});

    // Pass to next layer of middleware
    next();
});

app.listen(port);

console.log('QTasks RESTful API server started on: ' + port);