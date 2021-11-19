import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get("http://localhost:3000/polls").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>Poll Data</h1>
    </div>
  );
}

export default App;
