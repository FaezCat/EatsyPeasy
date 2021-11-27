import { Fragment, useState, useEffect } from "react";
import SingleResult from "./SingleResult";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import generateRandomString from "../helpers/UniqueLink";
import axios from "axios";
import { getPrice, getQuery } from "../helpers/GooglePlacesAPIFunctions";
import {
  createRestaurantObjs,
  addDetailsToRestaurantObjs,
} from "../helpers/CreateRestaurantObjs";
import LinearIndeterminate from "./LoadingBar";

export default function Results(props) {

  const navigate = useNavigate();

  // const [selectedRestaurants, setSelectedRestaurants] = useState([props.itemData[0], props.itemData[1], props.itemData[2]]);
  
  const [itemData, setItemData] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  // console.log(props.answers)
  // console.log("itemData", props.itemData)
  // console.log("selectedRestaurants", selectedRestaurants)
  useEffect(() => {
      const range = getPrice(props.answers.answerThree);
      const query = getQuery(props.answers.answerOne, props.answers.answerTwo);
      //API cors proxy that has some limits (do not use):
      //const url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?";

      //API cors proxy that works (for our project scale):
      const url =
        "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?";
      const params = {
        query: query,
        minprice: range[0],
        maxprice: range[1],
        key: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
      };

      axios
        .get(url, { params })
        .then(function (response) {
          const createdRestObjs = createRestaurantObjs(response);
          console.log("initial objs from first call:", createdRestObjs);
          return createdRestObjs;
        })
        .then((createdRestObjs) => {
          const updatedObjs = addDetailsToRestaurantObjs(createdRestObjs);
          console.log("updated objs 2nd call:", updatedObjs);
          return updatedObjs;
        })
        .then(function (updatedObjs) {
          console.log(
            "the .then updated objs before state update:",
            updatedObjs
          );
          setItemData(updatedObjs);
          setSelectedRestaurants([updatedObjs[0], updatedObjs[1], updatedObjs[2]]);
          console.log([updatedObjs[0], updatedObjs[1], updatedObjs[2]])
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);

  const [poll, setPoll] = useState(null); //poll should be one object matching the ERD later

  //let pollObj = null;

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
    .then((pollObj)=>{
      navigate('/linkpage', { state: {poll: poll} });
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
      poll[restHours] = JSON.stringify(selectedRestaurants[i].business_hours);
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
      {selectedRestaurants.length > 0 && <h1>Your Customized Selections</h1>}
      <div>
        {(itemData[0] && selectedRestaurants.length > 0) && <SingleResult itemData={itemData} defaultValue={0} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="Results"/>}
        {(itemData[1] && selectedRestaurants.length > 0) &&  <SingleResult itemData={itemData} defaultValue={1} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="Results"/>}
        {(itemData[2] && selectedRestaurants.length > 0) && <SingleResult itemData={itemData} defaultValue={2} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="Results"/>}
        {selectedRestaurants.length === 0 && <LinearIndeterminate />}
      </div>
      {selectedRestaurants.length > 0 && <h3>Need some input? Generate a poll to share with your friends!</h3>}
      
      {selectedRestaurants.length > 0 && <Button 
          style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
          onClick={() => {
            const pollObj = createPoll(selectedRestaurants);
            setPoll(pollObj); //trigger to do POST request
          }}>Generate Poll
      </Button>}
    </Fragment>
 )
}