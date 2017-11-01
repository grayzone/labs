import React from "react";

import Counter from "../containers/Counter";
//import Todos from "./Todos";
import Demo1 from "../containers/Demo1";
import StatelessDemo from "./Stateless";
import UserList from "./UserList";
//import TodoMVC from "../containers/TodoMVC";
// import MenuApp from "../containers/MenuSection";
import PageContentApp from "../containers/PageContent";

const App = () => (
  <div>
    <Counter />
    <Demo1 />
    <StatelessDemo />
    <UserList />
    <PageContentApp />
  </div>
);

export default App;
