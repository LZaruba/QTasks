/**
 * http://usejsdoc.org/
 */

'use strict';
module.exports = function(app) {
	var tasks = require('../controllers/tasksController');

	app.route('/tasks').get(tasks.listAllTasks);
	app.route('/tasks/:taskId').get(tasks.getTask);
};
