import React from "react";
import ReactDOM from "react-dom";
import Counter from "./containers/Counter";
import {createStore} from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
//import store from "./store";

var ContainersDIV = document.getElementById("containers");
if (ContainersDIV != null) {
  const store = createStore(reducer);
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    ContainersDIV
  );
}
