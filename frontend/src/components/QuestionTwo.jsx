import { Fragment, useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
// "FreeSolo" is the autocomplete form component
import FreeSolo from "./Q2_Comps/AutocompleteComp";
import DenseTable from "./Q2_Comps/Q2Table";


export default function QuestionTwo(props) {
  const navigate = useNavigate();

  const [choices, setChoices] = useState([]);
  const [dietaryPrefs, setDietaryPrefs] = useState([]);

  // this function concatenates the two arrays it takes in for a final output
  const finalAnswerOutput = (choices, dietaryPrefs) => {
    const answerArray = choices.concat(dietaryPrefs);
    return answerArray;
  }

  const addChoice = (choice) => {
    if (choices.includes(choice)) {
      return
    }

    if (choice !== null) {
      setChoices((prev) => ([...prev, choice]));
    }
  };

  const removeChoice = (choice) => {
    const choicesList = [...choices];
    for (let i = 0; i < choicesList.length; i++) {
      if (choice === choicesList[i]) {
        console.log("they've matched - the choice is:", choicesList[i])
        choicesList.splice(i, 1);
        setChoices(choicesList);
        return;
      }
    }
  }

  return(
    <Fragment>
      <div className="page-number-display">
        2 of 4
      </div>
      <br />
      <FreeSolo onClick={addChoice}/>
      <br />
      {choices.length > 0 && <DenseTable foodCategories={choices} deleteFoodCategory={removeChoice}/>}
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