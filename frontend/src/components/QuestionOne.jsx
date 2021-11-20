import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

export default function QuestionOne(props) {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");

  return(
    <Fragment>
      <div className="page-number-display">
        1 of 4
      </div>
      <p>
        Need help deciding where to eat? EatsyPeasy can help! Answer these 3 questions to see your customized selections or send a poll to your friends!
      </p>
      <form autoComplete="off" onSubmit={() => props.clickHandler(2)}>
        <input 
          type="text" 
          placeholder="What area do you want to eat in?" 
          name="search" 
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          >
        </input>
      </form>
      {/* <Button confirm onClick={() => {console.log("saved answer for Q1")}}>Save</Button> */}
      <Button variant="contained" onClick={() => {props.clickHandler(answer); navigate('/questiontwo'); console.log(answer);}}>Save</Button>
    </Fragment>
  );
}