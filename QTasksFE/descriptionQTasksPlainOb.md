///////////////////
/// Core
//////////////////
{
  tasks: [{
    id: 1,
    title: 'Make use of service workers',
    project: 'Quick Tasks',
    assignee: 'Joe',
    deadline: '18-01-26',
    priority: 'critical'
    type: 'MY_TASKS',
  }, {
    id: 2,
    title: 'Prepare dummy backend',
    project: 'Quick Tasks ',
    assignee: 'Joe',
    deadline: '18-01-25',
    priority: null
    type: 'MY_TASKS',
  }],
  visibilityFilter: 'MY_TASKS'
}

types = {
    '1' : 'MY_TASKS',
    '2' : 'OVERDUE',
    '3' : 'ALL_TASKS'
}


//////////////////////
// Actions
////////////////////////

{ type: 'ADD_TASK', task: {} }
{ type: 'TOGGLE_TASK', id: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'MY_TASKS' }