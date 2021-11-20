import { Fragment } from "react"
import Button from '@mui/material/Button';

export default function QuestionTwo() {
  return(
    <Fragment>
      <div className="page-number-display">
        2 of 4
      </div>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input type="text" placeholder="What type of food are you craving?" name="search"></input>
      </form>
      {/* <Button confirm onClick={() => {console.log("saved answer for Q1")}}>Save</Button> */}
      <Button variant="contained" onClick={() => {alert('clicked')}}>Save</Button>
    </Fragment>
  );
}