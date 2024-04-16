import React, { createContext, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { mainTheme } from "./Contexts/mainTheme";
import randomColor from "./Contexts/randomColor";

function App() {
  const [color, setColor] = useState({});
  const [numb, setNumb] = useState(0);
  const [numb2, setNumb2] = useState(0);

  useEffect(() => {
    setColor({
      backgroundColor: randomColor(),
      color: randomColor(),
    });
  });
  return (
    <>
      <div>
        <button onClick={() => setNumb((prev) => prev + 1)}>
          Change color and count
        </button>
        <mainTheme.Provider
          value={{
            color: color,
            text: numb,
          }}
        ></mainTheme.Provider>
      </div>
    </>
  );
}

export default App;
