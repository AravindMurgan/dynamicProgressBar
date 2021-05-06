import React, { useState } from "react";
import ClassForm from "./ReactForms/ClassForm";
import FunctionForm from "./ReactForms/FunctionForm";
import CakeContainer from "./Redux/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App3() {
  return (
    <Provider store={store}>
      <div className="app">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App3;
