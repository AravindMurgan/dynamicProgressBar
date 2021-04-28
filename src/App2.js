import React, { useEffect, useState } from "react";
import ProgressBar2 from "./progressBar/ProgressBar2";

function App2() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevState) => {
        const newValue = prevState + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);
  return (
    <>
      <h1>ProgressBar</h1>
      <ProgressBar2 value={value} max="100" />
    </>
  );
}

export default App2;
