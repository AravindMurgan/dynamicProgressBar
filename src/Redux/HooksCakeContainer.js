import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakes } from "./cakeindex";

function HooksCakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> No of Cakes - {noOfCakes} </h2>
      <button onClick={() => dispatch(buyCakes())}>Buy Cake </button>
    </div>
  );
}

export default HooksCakeContainer;
