import React, { useState } from "./react";
import "./App.scss";
import PokeList from "./PokeList";
import Data from "./data/Pokemon.json";

function App() {
  const [data] = useState(Data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <main>
        <PokeList data={data}></PokeList>
      </main>
    </div>
  );
}

export default App;
