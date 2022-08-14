import React from "react";
import './App.css';
import Search from "./Search.js"

function App() {
  return (
    <div className="App background">

     <h2 className="header">Current Weather Conditions</h2>
        <Search />

        <p id="github-link">
          <a
            href="https://github.com/ltasker443/weather-react"
            target="blank"
            id="github-link"
            >Open-source</a> by Laura Tasker
      </p>
      </div>
  );
}
export default App;
