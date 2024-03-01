import { useState } from "react";
import blankMap from "../src/assets/MCMH-MAP-BLANK.png";
import "./App.css";

const LocationText = ({ tag, h, subH, rotation }) => {
  const headerArray = h.split("/br");

  return (
    <div
      class="fixed-map-text"
      id={tag}
      style={{ transform: `rotate(${-rotation}deg)` }}
    >
      <h2>
        {headerArray.map((headerWord, headerIndex) => {
          return <span class={"forced-br"}>{headerWord}</span>;
        })}
      </h2>
      <p>{subH}</p>
    </div>
  );
};

function App() {
  const [orientation, setOrientation] = useState(0);

  const handleOrientation = (event) => {
    setOrientation(event.alpha);
  };

  window.addEventListener("deviceorientation", handleOrientation, true);

  return (
    <>
      <div
        class="map-wrapper"
        style={{ transform: `rotate(${orientation}deg)` }}
      >
        <div class="map-text-layer-wrapper">
          <div class="map-text-layer">
            <LocationText
              tag="system-services"
              h="System/brServices"
              subH="909 frostwood"
              rotation={orientation}
            />
            <LocationText tag="garage-2" h="garage 2" rotation={orientation} />
            <LocationText
              tag="garage-1"
              h="Employee/brParking"
              subH="Garage 1"
              rotation={orientation}
            />
            <LocationText
              tag="medical-plaza-1"
              h="Medical/brPlaza 1"
              subH="902 Frostwood"
              rotation={orientation}
            />
            <LocationText
              tag="west-pavilion"
              h="West Pavilion"
              subH="920 Frostwood"
              rotation={orientation}
            />
            <LocationText
              tag="medical-plaza-north"
              h="Medical/brPlaza North"
              subH="920 Frostwood"
              rotation={orientation}
            />
            <LocationText
              tag="garage-3"
              h="Garage 3"
              subH=""
              rotation={orientation}
            />
            <LocationText
              tag="east-tower"
              h="East Tower"
              subH="921 Gessner"
              rotation={orientation}
            />
            <LocationText
              tag="medical-plaza-3"
              h="Medical/brPlaza 3"
              subH="915 Gessner"
              rotation={orientation}
            />
            <LocationText
              tag="garage-4"
              h="Garage 4"
              subH=""
              rotation={orientation}
            />
            <LocationText
              tag="medical-plaza-4"
              h="Medical/brPlaza 4"
              subH="925 Gessner"
              rotation={orientation}
            />
            <LocationText
              tag="memorial-hermann-tower"
              h="Memorial/brHermann/brTower"
              subH="929 Gessner"
              rotation={orientation}
            />
            <LocationText
              tag="garage-5"
              h="Garage 5"
              subH=""
              rotation={orientation}
            />
          </div>
        </div>

        <img class="map-image-layer" src={blankMap}></img>
      </div>

      <div class="stats">
        <p>
          Angle:{" "}
          {typeof orientation == "number"
            ? orientation.toFixed()
            : "Invalid Device or Permissions."}
          °
        </p>
      </div>
    </>
  );
}

export default App;
