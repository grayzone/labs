import { combineReducers } from "redux";
import counter from "./Counter";
import todos from "./Todos";
import visibilityFilter from "./VisibilityFilter";

const reducer = combineReducers({
  counter,
  todos,
  visibilityFilter
});

export default reducer;
