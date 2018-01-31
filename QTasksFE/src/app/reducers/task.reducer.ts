import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../actions/actionsTypes';

const initialState = {
  visibilityFilter: VisibilityFilters.MY_TASKS,
  tasks: []
};

export function qTaskApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
          return Object.assign({}, state, {
            visibilityFilter: action.filter
          });
        case ADD_TASK:
          return Object.assign({}, state, {
            tasks: [
              ...state.tasks,
              action.task
            ]
          });
        case TOGGLE_TASK:
            return Object.assign({}, state, {
            tasks: state.tasks.map((task, id) => {
                if (id === action.id) {
                    return Object.assign({}, task, {
                });
            }
                return task;
            })
        });
        case REMOVE_TASK:
            return Object.assign({}, state, {
            tasks: state.tasks.map((task, id) => {
            if (id === action.id) {
                return Object.assign({}, task, {
                });
            }
                return task;
            })
        });
        default:
          return state;
      }
}

