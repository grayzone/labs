import React from "react";

import Counter from "../containers/Counter";
//import Todos from "./Todos";
import Demo1 from "../containers/Demo1";
import StatelessDemo from "./Stateless";
import UserList from "./UserList";
//import TodoMVC from "../containers/TodoMVC";

const App = () => (
  <div>
    <Counter />
    <Demo1 />
    <StatelessDemo />
    <UserList />
  </div>
);

export default App;
