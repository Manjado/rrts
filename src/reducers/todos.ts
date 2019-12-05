import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      //action; // thanks to the guard we know what exactly is in action
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
