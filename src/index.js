import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

var ContainersDIV = document.getElementById("containers");
if (ContainersDIV != null) {  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    ContainersDIV
  );
}
