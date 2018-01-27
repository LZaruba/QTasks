/**
 * http://usejsdoc.org/
 */

var uniqid = require('uniqid');
var Task = require('../models/Task');

var data = new Map();

var projects = ["QTasks UI", "QTasks Testing", "QTasks Server"];
var titles = ["Write a complimentary note for someone", "Go green – don’t waste paper", "Make a conscious effort to recycle", "Is that litter on the floor? Pick it up and bin it", "Help somebody with a chore they need done!", 
	"Leave a kind message anywhere (in a library book, on a computer etc.)", "Buy someone a coffee", "We all love surprises! Buy someone an unexpected gift", "Read a good book recently? Pass it on to someone else", "Someone wronged you? Forgive them", 
	"It’s hard to stay connected – reach out to an elderly person you know", "Lend a friend a book you think they’d like", "Old laptop or mobile lying around? Donate it", "Share your lunch with a friend", "Visit a friend who’s sick"];
var assignees = ["Jasmine Short", "Joe North", "Sue Ogden", "Adam Bower", "Kimberly North", "Matt Vance"];

function getRandomItem(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function getRandomDeadline() {
	var date = new Date();
	date.setDate(date.getDate() + Math.floor(Math.random() * 100));
	return date;
}

exports.listAllTasks = function(req, resp) {
	var values = [];
	for(let v of data.values()) {
		values.push(v);
	}
	resp.json(values);
};

exports.getTask = function(req, resp) {
	resp.json(data.get(req.params.taskId));
};

exports.generateNewTask = function() {
	var taskId = uniqid("task-");
	var task = new Task(taskId, getRandomItem(projects), getRandomItem(titles), getRandomItem(assignees), getRandomDeadline(),
			"https://fakedomainforQTasks.com/task/" + taskId);
	data.set(taskId, task);
	if (data.size > 150) {
		var i = 0;
		var limit = Math.floor(Math.random() * data.size);
		for(let k of data.keys()) {
			if (i === limit) {
				data.delete(k);
				console.info("i'd like to delete key " + k);
				return;
			}
			i++;
		}
	}
};
