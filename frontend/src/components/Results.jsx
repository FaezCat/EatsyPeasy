import { Fragment, useState } from "react";
import SingleResult from "./SingleResult";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Results(props) {

  const navigate = useNavigate();

  const [selectedRestaurants, setSelectedRestaurants] = useState([props.itemData[0], props.itemData[1], props.itemData[2]]);
  
  console.log("itemData", props.itemData)
  console.log("selectedRestaurants", selectedRestaurants)

  return (
    <Fragment>
      <div className="page-number-display">
        4 of 4
      </div>
      <h1>Your Customized Selections</h1>
      <div>
        <SingleResult itemData={props.itemData} defaultValue={0} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>
        <SingleResult itemData={props.itemData} defaultValue={1} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>
        <SingleResult itemData={props.itemData} defaultValue={2} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>
      </div>
      <h3>Need some input? Generate a poll to share with your friends!</h3>
      
 {/* TO DO: Button */}
      {/* <Button 
          style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
          onClick={() => {props.clickHandler(""); navigate(''); console.log("");}}>Generate Poll
      </Button> */}

    </Fragment>
 )
}