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
setInterval(generateContent, 30000);

app.use(function(req, res) {
	res.status(404).send({
		url : req.originalUrl + ' not found'
	});
});

app.listen(port);

console.log('QTasks RESTful API server started on: ' + port);