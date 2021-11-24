import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import "../styles/SingleResult.scss";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import getRestaurantPhoto from "../helpers/GetRestaurantPhoto";
import { ImageListItem } from "@mui/material";
import Button from '@mui/material/Button';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Quicksand, sans-serif'
}));

export default function SingleResult(props) {
  const navigate = useNavigate();

  const { itemData, defaultValue, selectedRestaurants, setSelectedRestaurants, parentComponent, userName } = props;

  const [selectedIndex, setSelectedIndex] = useState(defaultValue);

  const handleChange = (event) => {
    const newSelectedRestaurants = [...selectedRestaurants];

    newSelectedRestaurants[defaultValue] = itemData[event.target.value];
    setSelectedIndex(event.target.value);
    console.log("event target value:", event.target.value);
    console.log("newSelectedRestaurants", newSelectedRestaurants)
    console.log("newSelectedRestaurants default value", newSelectedRestaurants[defaultValue])

    setSelectedRestaurants(newSelectedRestaurants);
  };

  const selectedRestaurant = selectedRestaurants[defaultValue];
  console.log("selectedRestaurant", selectedRestaurant)
  console.log("selectIndex", selectedIndex)
  console.log('type of defaultValue:', typeof(defaultValue))
  console.log(selectedRestaurant.restaurant_name)

  const restaurantImage = getRestaurantPhoto(selectedRestaurant);
  console.log("restaurant image:", restaurantImage);

  const [pollVote, setPollVote] = useState(null)

  useEffect(() => {
    if (pollVote && userName) {
    console.log("pollVote", pollVote);
    axios({
      method: 'post',
      url: 'http://localhost:3000/polls/submit', //make sure to point this to backend
      data: {
        place_id: selectedRestaurant.place_id,
        name: userName,
        alpha_numeric_id: "test"
      }
    })
    .then(function (response) {
      console.log("axios request posted");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }, [pollVote])

  return (
    <div className="column">
      <Stack
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 2 }}>
      <Item>

      {(parentComponent === "Results") && 
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="restaurant-simple-select-label">Choice {defaultValue + 1}</InputLabel>
          {/* Select - This is for the drop down */}
          <Select
            labelId="restaurant-select-label"
            id="restaurant-simple-select"
            value={selectedIndex}
            label="Restaurant"
            onChange={handleChange}
            style={{fontFamily: 'Quicksand, sans-serif'}}
          >
          {itemData.map((item, index) => {
            return <MenuItem key={index} value={index}>{item.restaurant_name}</MenuItem>
          })}
          </Select>
        </FormControl>
      </Box>
      }
      
      {/* TO DO: get image, other info from API */}
          <ImageListItem key={props.defaultValue.restaurant_name}>
            <img
              // src={`https://thingproxy.freeboard.io/fetch/${restaurantImage}`}
              src={`data:image/jpeg;base64,/${restaurantImage}`}
              alt={`temp`}
              />
          </ImageListItem>
        </Item>
        <Item>
          <h3>Menu</h3>
          <h3>Popular Dish </h3>
          <h3>Popular Vegan/Vegetarian/Gluten-Free Dish</h3>
        </Item>
        <Item>
          <h3>Rating: {selectedRestaurant.ave_rating}</h3>
          <h3>Business Hours:</h3>
          <h4> {selectedRestaurant.business_hours}</h4>
          <h3>Contact Information:</h3>
          <h4>{selectedRestaurant.phone_number}</h4>
          <h3>Directions:</h3>
          <h4>{selectedRestaurant.maps_directions}</h4>
        </Item>

        {(parentComponent === "PollingPage") && 
          <Button 
            style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
            onClick={() => {
              setPollVote(pollVote); //trigger to do POST request
              setTimeout(() => {navigate('/poll/:alpha_numeric_id/results')}, 2000);
            }}>I Choose you!
          </Button>
        }
      </Stack>
    </div>

  )
}


