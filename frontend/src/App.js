import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Question_1 from "./components/Question_1";

function App() {
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
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;