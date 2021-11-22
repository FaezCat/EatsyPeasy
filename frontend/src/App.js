import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree";
import Results from "./components/Results";
import { getPrice, getQuery } from "./helpers/GooglePlacesAPIFunctions";

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

  const [apiResponse, setapiResponse] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/polls").then((res) => {
      console.log(res);
    });

    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res);
    });

    if (results === true) {
      const range = getPrice(answers.answerThree);
      const query = getQuery(answers.answerOne, answers.answerTwo);
      //API cors proxy that has some limits (do not use):
      //const url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?";

      //API cors proxy that works (for our project scale):
      const url = "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?";
      const params = {
        query: query,
        minprice: range[0],
        maxprice: range[1],
        key: process.env.REACT_APP_GOOGLE_PLACES_API_KEY
      };
      
      axios
        .get(url, {params})
        .then(function (response) {
          // setapiResponse{id: each Json}
          // create function to get place_ids
          // 
          // return axios.get(20 api calls?? loop? use place_ids to get photo from photo api)
          
          // arrayOfIds = getPlaceIds(arrayOfResults);
          // setapiResponse(arrayOfIds);

          // after we import the function, we will run it with the response data which will return an array of restaurant objects
          // .then (setApiResponse(createRestaurantObjs(results)))
          // .then()

        })
        .then(function (response) {
          console.log(response);
          console.log(JSON.stringify(response.data));
          setapiResponse(response.data.results);
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
            element={<QuestionThree clickHandler={setAnswerThree} results={results} setResults={setResults} />}
          />
          <Route path="/results" element={<Results itemData={apiResponse}/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
