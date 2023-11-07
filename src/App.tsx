import React, { useState } from "react";
import "./App.css";

interface ClickedProps {
  clientX: number;
  clientY: number;
}

function App() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([]);

  function getCores(evento: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = evento;

    setClickedPoints([...clickedPoints, { clientX, clientY }]);
  }
  return (
    <div className="App" onClick={getCores}>
      {clickedPoints.map((clickedPoint) => {
        return (
          <div
            style={{
              left: clickedPoint.clientX,
              top: clickedPoint.clientY,
              position: "absolute",
              borderRadius: "50%",
              background: "red",
              width: "5px",
              height: "5px",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default App;
