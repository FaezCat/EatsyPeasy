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
import { ImageListItem } from "@mui/material";
import { getPhotoUrl } from "../helpers/GetRestaurantPhotoUrl";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Quicksand, sans-serif'
}));

export default function SingleResult(props) {

  const { itemData, defaultValue, selectedRestaurants, setSelectedRestaurants } = props;

  const selectedRestaurant = selectedRestaurants[defaultValue];

  const imageUrl = getPhotoUrl(selectedRestaurant);
  
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
  
  console.log("selectedRestaurant", selectedRestaurant)
  console.log("selectIndex", selectedIndex)
  console.log('type of defaultValue:', typeof(defaultValue))
  console.log(selectedRestaurant.restaurant_name)

  return (
    <div className="column">
      <Stack
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 2 }}>
        <Item>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="restaurant-simple-select-label">Choice {defaultValue + 1}</InputLabel>
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

      {/* TO DO: get image, other info from API */}
          <ImageListItem key={props.defaultValue.restaurant_name}>
            <img
              // src={`https://thingproxy.freeboard.io/fetch/${restaurantImage}`}
              src={imageUrl}
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
      </Stack>
    </div>

  )
}


