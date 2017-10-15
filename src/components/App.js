import React from "react";

import Counter from "../containers/Counter";
import Todos from "./Todos";
import Demo1 from "../containers/Demo1";
import StatelessDemo from "./Stateless";
import UserList from "./UserList";

const App = () => (
  <div>
    <Counter />
    <Todos />
    <Demo1 />
    <StatelessDemo />
    <UserList />
  </div>
);

export default App;
