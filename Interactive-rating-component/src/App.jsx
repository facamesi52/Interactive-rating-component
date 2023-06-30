import React, { useState } from "react";
import "./App.css";
import Structure from "./Components/Structure";
import States from "./Components/States";

function App() {
  const [nota, setNota] = useState(0);
  const cambiaNota = (calificacion) => {
    return setNota(calificacion);
  };

  return (
    <div>
      <Structure cambiaNota={cambiaNota} calificacion={nota} />
      <States calificacion={nota} />
    </div>
  );
}

export default App;
