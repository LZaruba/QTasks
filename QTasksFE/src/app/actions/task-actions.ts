import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { ADD_TASK, REMOVE_TASK, LOAD_TASKS, SET_VISIBILITY_FILTER, TOGGLE_TASK } from './actionsTypes';

@Injectable()
export class TaskActions {

  add(task) {
    return { type: ADD_TASK, task };
  }

  load(tasks) {
      return { type: LOAD_TASKS, tasks };
  }

  toggle(id) {
    return { type: TOGGLE_TASK, id };
  }

  remove(id) {
      return { type: REMOVE_TASK, id };
  }

  setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
  }
}
