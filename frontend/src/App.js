import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Nav from "./components/Nav";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";

function App() {

  const [sampleState, setSampleState] = useState(1)

  function alterState(newState) {
    setSampleState(newState);
  }

  console.log("state value:", sampleState);

  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get("http://localhost:3000/polls").then((res) => {
      console.log(res);
    });

    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<QuestionOne clickHandler={alterState}/>} />
            
          <Route path="/questiontwo" element={<QuestionTwo/>} />
          
        </Routes>
        
      </div>
    </Router>
  );
}
export default App;