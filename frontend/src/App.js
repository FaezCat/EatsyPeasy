import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree";
import Results from "./components/Results";

function App() {
  const [answers, setAnswers] = useState({
    answerOne: "",
    answerTwo: [],
    answerThree: [],
  });

  const setAnswerOne = (answerOne) => setAnswers({ ...answers, answerOne });
  const setAnswerTwo = (answerTwo) => setAnswers({ ...answers, answerTwo });
  const setAnswerThree = (answerThree) =>
    setAnswers({ ...answers, answerThree });

  useEffect(() => {
    axios.get("http://localhost:3000/polls").then((res) => {
      console.log(res);
    });

    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Router>
      <div className="background">
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={<QuestionOne clickHandler={setAnswerOne} />}
          />
          <Route
            path="/questiontwo"
            element={<QuestionTwo clickHandler={setAnswerTwo} />}
          />
          <Route
            path="/questionthree"
            element={<QuestionThree clickHandler={setAnswerThree} />}
          />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
