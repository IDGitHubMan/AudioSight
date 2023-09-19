import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VisualizerCont from "./assets/VisualizerCont";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VisualizerCont />
    </>
  );
}

export default App;
