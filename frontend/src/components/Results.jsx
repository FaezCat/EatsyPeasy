import { Fragment } from "react";
import SingleResult from "./SingleResult";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Results(props) {

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="page-number-display">
        4 of 4
      </div>
      <h1>Your Customized Selections</h1>
      <div>
        <SingleResult itemData={props.itemData} defaultValue={0}/>
        <SingleResult itemData={props.itemData} defaultValue={1}/>
        <SingleResult itemData={props.itemData} defaultValue={2}/>
      </div>
      <h3>Need some input? Generate a poll to share with your friends!</h3>
      
 {/* TO DO: Button */}
      {/* <Button 
          style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
          onClick={() => {props.clickHandler(""); navigate('/poll'); console.log("");}}>Generate Poll
      </Button> */}

    </Fragment>
 )
}