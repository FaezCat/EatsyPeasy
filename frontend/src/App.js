import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree";
import Results from "./components/Results";
import LinkPage from "./components/LinkPage";
import { getPrice, getQuery } from "./helpers/GooglePlacesAPIFunctions";
import {
  createRestaurantObjs,
  addDetailsToRestaurantObjs,
} from "./helpers/CreateRestaurantObjs";
import PollingPage from "./components/PollingPage";
import PollingResults from "./components/PollingResults";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    answerOne: "",
    answerTwo: [],
    answerThree: [],
  });
  const [results, setResults] = useState(false);

  const setAnswerOne = (answerOne) => setAnswers({ ...answers, answerOne });
  const setAnswerTwo = (answerTwo) => setAnswers({ ...answers, answerTwo });
  const setAnswerThree = (answerThree) =>
    setAnswers({ ...answers, answerThree });

  const [restaurantObjs, setRestaurantObjs] = useState([]);

  useEffect(() => {
    if (results === true) {
      const range = getPrice(answers.answerThree);
      const query = getQuery(answers.answerOne, answers.answerTwo);
      //API cors proxy that has some limits (do not use):
      //const url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?";

      //API cors proxy that works (for our project scale):
      const url =
        "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?";
      const params = {
        query: query,
        minprice: range[0],
        maxprice: range[1],
        key: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
      };

      axios
        .get(url, { params })
        .then(function (response) {
          const createdRestObjs = createRestaurantObjs(response);
          console.log("initial objs from first call:", createdRestObjs);
          return createdRestObjs;
        })
        .then((createdRestObjs) => {
          const updatedObjs = addDetailsToRestaurantObjs(createdRestObjs);
          console.log("updated objs 2nd call:", updatedObjs);
          return updatedObjs;
        })
        .then(function (updatedObjs) {
          console.log(
            "the .then updated objs before state update:",
            updatedObjs
          );
          setRestaurantObjs(updatedObjs);
        })
        .then(()=>{
          navigate("/results");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [results]);

  return (
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
            element={
              <QuestionThree
                clickHandler={setAnswerThree}
                results={results}
                setResults={setResults}
              />
            }
          />
          <Route
            path="/results"
            element={<Results itemData={restaurantObjs} />}
          />
          <Route path="/linkpage" element={<LinkPage />} />
          <Route path="/poll/:alpha_numeric_id" element={<PollingPage />} />
          <Route path="/poll/:alpha_numeric_id/results" element={<PollingResults />} />
        </Routes>
      </div>
  );
}
export default App;
