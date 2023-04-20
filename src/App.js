import { useState } from "react";
import "./App.css";

function App() {
  const [darkLightModus, setDarkLightModus] = useState(true);
  return (
    <div
      className="App"
      style={{ backgroundColor: darkLightModus ? "white" : "black" }}
    >
      <button
        onClick={() => {
          setDarkLightModus(darkLightModus ? false : true);
        }}
      >
        Light/Dark
      </button>
    </div>
  );
}

export default App;
