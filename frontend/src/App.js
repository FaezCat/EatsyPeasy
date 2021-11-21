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
  const setAnswerThree = (answerThree) => setAnswers({ ...answers, answerThree });

  const getPrice = (x) => {
    const pricePoint = x.sort(function(a, b){return a-b});
    const priceRange = [];
    priceRange[0] = pricePoint[0];
    priceRange[1] = priceRange[-1];
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
    // const config = {
    //   url: "https://maps.googleapis.com/maps/api/place/textsearch/json?",
    //     params: {
    //     query: `${answers.answerOne} ${answers.answerTwo}`,
    //     maxprice: range[0],
    //     minprice: range[1],
    //     key: process.env.REACT_APP_GOOGLE_PLACES_API_KEY
    //   },
    //   headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     }
    // };
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`
    var config = {
      method: 'get',
      url,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    //sample get: https://maps.googleapis.com/maps/api/place/textsearch/json?query=Downtown Calgary Chinese Vegetarian
    // axios.get(config).then((res) => {
    //   console.log(res);
    // });


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
