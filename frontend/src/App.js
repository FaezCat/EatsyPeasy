import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree";
import Results from "./components/Results";
import LinkPage from "./components/LinkPage";
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
            element={<Results itemData={restaurantObjs} answers={answers}/>}
          />
          <Route path="/linkpage" element={<LinkPage />} />
          <Route path="/poll/:alpha_numeric_id/results" element={<PollingResults />} />
          <Route path="/poll/:alpha_numeric_id" element={<PollingPage />} />
        </Routes>
        <Footer />
      </div>
  );
}
export default App;
