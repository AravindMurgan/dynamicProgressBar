import React, { useState, useEffect } from "react";
import MouseEvent from "./MouseEvent";

function Counter2() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <MouseEvent />}
    </div>
  );
}

export default Counter2;
