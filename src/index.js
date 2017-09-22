import React from "react";
import ReactDOM from "react-dom";
import Counter from "./containers/Counter";
import { Provider } from "react-redux";
import store from "./store";

var ContainersDIV = document.getElementById("containers");
if (ContainersDIV != null) {  
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    ContainersDIV
  );
}
