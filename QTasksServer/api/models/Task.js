/**
 * http://usejsdoc.org/
 */
'use strict';

class Task {
	constructor(id, project, title, assignee, deadline, url) {
		this.id = id;
		this.project = project;
		this.title = title;
		this.assignee = assignee;
		this.deadline = deadline;
		this.url = url;
	}
} 

module.exports = Task;
//
//var TaskSchema = new Schema({
//  name: {
//    type: String,
//    required: 'Kindly enter the name of the task'
//  },
//  Created_date: {
//    type: Date,
//    default: Date.now
//  },
//  status: {
//    type: [{
//      type: String,
//      enum: ['pending', 'ongoing', 'completed']
//    }],
//    default: ['pending']
//  }
//});
//
//module.exports = mongoose.model('Tasks', TaskSchema);
