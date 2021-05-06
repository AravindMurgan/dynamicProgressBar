import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecreams } from "./cakeindex";

function IceCreamContainer() {
  const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> No of Icecreams - {noOfIcecreams} </h2>
      <button onClick={() => dispatch(buyIcecreams())}> Buy Icecream </button>
    </div>
  );
}

export default IceCreamContainer;
