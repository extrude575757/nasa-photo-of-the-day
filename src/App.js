import React from "react";

import "./App.css";
import Astros from "./components/Astro/Astros";
import SearchBar from "./components/Searchbar/SearchBar";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <div className="cards">
            <Astros />
        </div>
      </div>
    </div>
  );
}

export default App;
