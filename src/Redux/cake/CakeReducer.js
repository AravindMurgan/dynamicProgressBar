import { BUY_CAKE } from "./Types";

const initialState = {
  noOfCakes: 10
};

const CakeReducer = (state, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: noOfCakes - 1
      };
  }
};

export default CakeReducer;
