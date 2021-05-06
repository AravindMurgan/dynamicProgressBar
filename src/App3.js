import React from "react";
import CakeContainer from "./Redux/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HooksCakeContainer from "./Redux/HooksCakeContainer";
import IceCreamContainer from "./Redux/IceCreamContainer";

function App3() {
  return (
    <Provider store={store}>
      <div className="app">
        {/* <HooksCakeContainer />
        <CakeContainer /> */}
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App3;
