import React, { useState } from "react";

function CakeContainer() {
  const [cake, setCake] = useState(10);
  return (
    <div>
      <h2> No of Cakes - {cake} </h2>
      <button> Buy Cake </button>
    </div>
  );
}

export default CakeContainer;
