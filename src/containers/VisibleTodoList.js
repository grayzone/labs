import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions/Todos";


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unkown filter: " + filter);
  }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
