import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./icecream/IceCreamReducers";

const rootReducer = combineReducers({
  cake: CakeReducer,
  icecream: iceCreamReducer
});

export default rootReducer;
