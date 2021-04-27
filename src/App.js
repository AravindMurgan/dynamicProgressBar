import { useEffect, useState } from "react";
import ProgressBar from "./progressBar/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevState) => {
        let newVal = prevState + 10;

        if (newVal === 100) {
          clearInterval(interval);
        }

        return newVal;
      });
    }, 1000);
  }, []);
  return (
    <div className="App">
      <ProgressBar color="#00FFFF" width="500px" value={value} max="100" />
    </div>
  );
}
