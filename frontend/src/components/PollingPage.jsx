import { Fragment, useState, useEffect } from "react";
import SingleResult from "./SingleResult";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';

export default function PollingPage(props) {

  const { alpha_numeric_id } = useParams();

  const navigate = useNavigate();

  console.log("alpha num id", alpha_numeric_id);

  // const [selectedRestaurants, setSelectedRestaurants] = useState([props.itemData[0], props.itemData[1], props.itemData[2]]);
  
  
  // console.log("itemData", props.itemData)
  // console.log("selectedRestaurants", selectedRestaurants)

  useEffect(() => {
 
    axios({
      method: 'get', //need to update this to GET the 3 rest objs to populate this page
      url: `http://localhost:3000/polls/show/${alpha_numeric_id}`, //make sure to point this to backend
    })
    .then(function (response) {
      console.log("axios request completed");
      console.log("should be the returned 1 poll:", response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  let userName = null;

  return (
    <Fragment>
      {/* <div className="page-number-display">
        4 of 4
      </div>
      <h1>Your Customized Selections</h1>
      <div>
        {props.itemData[0] && <SingleResult itemData={props.itemData} defaultValue={0} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="PollingPage" userName= {userName}/>}
        {props.itemData[1] && <SingleResult itemData={props.itemData} defaultValue={1} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="PollingPage" userName= {userName}/>}
        {props.itemData[2] && <SingleResult itemData={props.itemData} defaultValue={2} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="PollingPage" userName= {userName}/>}
      </div>
      <h3>Pick one of the choices above that you are craving!</h3>
      <TextField 
        value={userName} 
        // onChange={(event) => setAnswer(event.target.value)} 
        InputLabelProps={{style: {fontFamily: 'Quicksand, sans-serif'}}} 
        fullWidth id="input-with-sx" 
        label="Identify yourself :)"
        /> */}

    </Fragment>
 )
}