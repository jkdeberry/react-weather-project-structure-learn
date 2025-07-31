import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <Weather defaultCity="Greenville" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/jkdeberry" target="_blank"  rel="noopener noreferrer">Jeanine DeBerry</a>{" "}
        and is {" "} 
        <a href="https://github.com/jkdeberry/dictionary-project-jd1" target="_blank" rel="noopener noreferrer">open-sourced on Github
      </a>
      </footer>
      </div>
    </div>
  );
}