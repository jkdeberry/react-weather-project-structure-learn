import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <h1></h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/jkdeberry" target="_blank"  rel="noopener noreferrer">Jeanine DeBerry</a>{" "}
        and is {" "} 
        <a href="https://github.com/jkdeberry/react-weather-project-structure-learn" target="_blank" rel="noopener noreferrer">open-sourced on Github
      </a>
      </footer>
      </div>
    </div>
  );
}