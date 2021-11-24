import { Fragment, useState, useEffect } from "react";
import SingleResult from "./SingleResult";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import generateRandomString from "../helpers/UniqueLink";

export default function Results(props) {

  const navigate = useNavigate();

  const [selectedRestaurants, setSelectedRestaurants] = useState([props.itemData[0], props.itemData[1], props.itemData[2]]);
  
  
  console.log("itemData", props.itemData)
  console.log("selectedRestaurants", selectedRestaurants)

  const [poll, setPoll] = useState({}); //poll should be one object matching the ERD later

  useEffect(() => {
    //post request here
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

  return (
    <Fragment>
      <div className="page-number-display">
        4 of 4
      </div>
      <h1>Your Customized Selections</h1>
      <div>
        {props.itemData[0] && <SingleResult itemData={props.itemData} defaultValue={0} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>}
        {props.itemData[1] && <SingleResult itemData={props.itemData} defaultValue={1} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>}
        {props.itemData[2] && <SingleResult itemData={props.itemData} defaultValue={2} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>}
      </div>
      <h3>Need some input? Generate a poll to share with your friends!</h3>
      
      <Button 
          style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
          onClick={() => {
            const pollObj = createPoll(selectedRestaurants);
            setPoll(pollObj); //trigger to do POST request
            setTimeout(() => {navigate('/linkpage', { state: {poll: pollObj} })}, 2000);
          }}>Generate Poll
      </Button>
    </Fragment>
 )
}