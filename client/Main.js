import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
//    <Provider store={store}></Provider>

export default function Main() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
