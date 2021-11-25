import { Fragment, useState, useEffect } from "react";
import SingleResult from "./SingleResult";
import { Link, useNavigate } from "react-router-dom";
import generateRandomString from "../helpers/UniqueLink";
import axios from "axios";
import TextField from '@mui/material/TextField';

export default function PollingPage(props) {

  const navigate = useNavigate();

  const [selectedRestaurants, setSelectedRestaurants] = useState([props.itemData[0], props.itemData[1], props.itemData[2]]);
  
  
  console.log("itemData", props.itemData)
  console.log("selectedRestaurants", selectedRestaurants)

  const [poll, setPoll] = useState(null); //poll should be one object matching the ERD later

  useEffect(() => {
    if (poll) {
    console.log("poll", poll);
    axios({
      method: 'post',
      url: 'http://localhost:3000/polls/create', //make sure to point this to backend
      data: poll
    })
    .then(function (response) {
      console.log("axios request posted");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }, [poll])

  const numericId = generateRandomString();
  
  function createPoll (selectedRestaurants) {
    const poll = {};
    for (let i = 0; i < selectedRestaurants.length; i++) {
      const restPlaceID = `restaurant_${i+1}_place_id`;
      const restName = `restaurant_${i+1}_name`;
      const restVotes = `restaurant_${i+1}_votes`;
      const restHours = `restaurant_${i+1}_business_hours`;
      const restNumber = `restaurant_${i+1}_phone_number`;
      const restWebsite = `restaurant_${i+1}_website`;
      const restMaps = `restaurant_${i+1}_maps_directions`;
      poll[restPlaceID] = selectedRestaurants[i].place_id;
      poll[restName] = selectedRestaurants[i].restaurant_name;
      poll[restVotes] = 0;
      poll[restHours] = selectedRestaurants[i].business_hours;
      poll[restNumber] = selectedRestaurants[i].phone_number;
      poll[restWebsite] = selectedRestaurants[i].website; 
      poll[restMaps] = selectedRestaurants[i].maps_directions;
    }
    poll["alpha_numeric_id"] = numericId;
    console.log("poll obj:", poll);
    return poll;
  }

  let userName = null;

  return (
    <Fragment>
      <div className="page-number-display">
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
        />

    </Fragment>
 )
}