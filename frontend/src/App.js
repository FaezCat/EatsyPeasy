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
  const [results, setResults] = useState(false);

  const setAnswerOne = (answerOne) => setAnswers({ ...answers, answerOne });
  const setAnswerTwo = (answerTwo) => setAnswers({ ...answers, answerTwo });
  const setAnswerThree = (answerThree) => setAnswers({ ...answers, answerThree });

  const getPrice = (x) => {
    const pricePoint = x.sort(function(a, b){return a-b});
    const priceRange = [];
    priceRange[0] = pricePoint[0];
    priceRange[1] = priceRange[-1];
    console.log(priceRange);
    return priceRange;
  };

  useEffect(() => {
    axios.get("http://localhost:3000/polls").then((res) => {
      console.log(res);
    });

    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res);
    });

    const range = getPrice(answers.answerThree);

    //API cors proxy that has some limits (do not use):
    //const url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?";

    //API cors proxy that works (for our project scale):
    const url = "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?";
    const params = {
      query: `${answers.answerOne} ${answers.answerTwo}`,
      maxprice: range[0],
      minprice: range[1],
      key: process.env.REACT_APP_GOOGLE_PLACES_API_KEY
    };
    
    console.log("params", params);

    if (results === true) {
      axios.get(url, {params})
      .then(function (response) {
        console.log(response);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }, [results]);

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
            element={<QuestionThree clickHandler={setAnswerThree} setResults={setResults} />}
          />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
