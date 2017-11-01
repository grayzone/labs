import { combineReducers } from "redux";
import counter from "./Counter";
//import todos from "./Todos";
import visibilityFilter from "./VisibilityFilter";
import menu from "./MenuSection";

const reducer = combineReducers({
  counter,
  //  todos,
  menu,
  visibilityFilter
});

export default reducer;
