import { useState } from "react";
import ProgressBar from "./progressBar/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <ProgressBar color="light-orange" width="300px" value={value} max="100" />
    </div>
  );
}
