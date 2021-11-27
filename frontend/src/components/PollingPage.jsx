import { Fragment, useState, useEffect } from "react";
import SingleResult from "./SingleResult";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { organizePollJSON } from "../helpers/organizePollJSON";
import { addDetailsToRestaurantObjs } from "../helpers/CreateRestaurantObjs";
import "../styles/PollingPage.scss";

export default function PollingPage(props) {

  const { alpha_numeric_id } = useParams();

  const navigate = useNavigate();

  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    
    axios({
      method: 'get', //need to update this to GET the 3 rest objs to populate this page
      url: `http://localhost:3000/polls/show/${alpha_numeric_id}`, //make sure to point this to backend
    })
    .then(function (response) {
      console.log("should be the returned 1 poll:", response);
      //add a function to oragnize the incoming poll data array
      const createdRestObjs = organizePollJSON(response);
      console.log("createdRestObjs", createdRestObjs);
      //and make the get call for photo etc
      const updatedObjs = addDetailsToRestaurantObjs(createdRestObjs);
      console.log("updatedObjs", updatedObjs);
      return updatedObjs;
    })
    .then((updatedObjs)=> {
      setSelectedRestaurants(updatedObjs);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  return (
    <Fragment>
      <div className="page-number-display">
        4 of 4
      </div>
      <div className="polling-page-title">
        <h1>Your Restaurant Selections</h1>
      </div>
      <div className="single-result-stacks">
        {selectedRestaurants[0] && <SingleResult itemData={""} defaultValue={0} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="PollingPage" userName= {userName} alpha_numeric_id={alpha_numeric_id}/>}
        {selectedRestaurants[1] && <SingleResult itemData={""} defaultValue={1} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="PollingPage" userName= {userName} alpha_numeric_id={alpha_numeric_id}/>}
        {selectedRestaurants[2] && <SingleResult itemData={""} defaultValue={2} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} parentComponent="PollingPage" userName= {userName} alpha_numeric_id={alpha_numeric_id}/>}
      </div>
      <Box
        component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}
        autoComplete="off"
        textAlign='center' 
        padding={5}
        >
        <h3>Click one of the choices above that you are craving!</h3>
        {<TextField 
          value={userName} 
          onChange={(event) => setUserName(event.target.value)} 
          InputLabelProps={{style: {fontFamily: 'Quicksand, sans-serif'}}} 
          fullWidth id="input-with-sx" 
          label="Identify Yourself :)"
          variant="outlined"
          error={userName === ""}
          helperText={userName === "" ? 'Name is required' : ' '}
          />}
      </Box>
    </Fragment>
 )
}