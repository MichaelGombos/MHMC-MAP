import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [orientation, setOrientation] = useState("unset");

  const handleOrientation = (event) => {
    console.log("Yeah, something...", event);

    setOrientation(event.alpha);
  };

  window.addEventListener("deviceorientation", handleOrientation, true);

  return (
    <>
      asd
      <div>
        <p>Orientation.Aplha (left and right panning) {orientation}°</p>
      </div>
    </>
  );
}

export default App;
