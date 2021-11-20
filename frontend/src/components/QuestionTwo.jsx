import { Fragment, useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import FreeSolo from "./AutocompleteComp";
// "FreeSolo" is the autocomplete form component

export default function QuestionTwo(props) {
  const navigate = useNavigate();

  const [choices, setChoices] = useState([]);
  const [dietaryPrefs, setDietaryPrefs] = useState([]);

  const finalAnswerOutput = (choices, dietaryPrefs) => {
    const answerArray = choices.concat(dietaryPrefs);
    return answerArray;
  }

  // const choicesContainer = []; to be used to house the choices

  return(
    <Fragment>
      <div className="page-number-display">
        2 of 4
      </div>
      <br />
      <FreeSolo />
      <br />
      <Button variant="contained" onClick={
        () => {
        props.clickHandler(finalAnswerOutput(choices, dietaryPrefs)); 
        navigate('/questionthree'); 
        }
      }>Next</Button>
    </Fragment>
  );
}