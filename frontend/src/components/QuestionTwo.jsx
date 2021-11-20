import { Fragment, useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

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
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input type="text" placeholder="What type of food are you craving?" name="search" value={choices} onChange={(event) => setChoices(event.target.value)}
></input>
      </form>
      <form value={dietaryPrefs}></form> {/*form for dietary preferences*/}
      {/* <Button confirm onClick={() => {console.log("saved answer for Q1")}}>Save</Button> */}
      <Button variant="contained" onClick={
        () => {
        props.clickHandler(finalAnswerOutput(choices, dietaryPrefs)); 
        navigate('/questionthree'); 
        console.log("hola");
        }
      }>Save</Button>
    </Fragment>
  );
}