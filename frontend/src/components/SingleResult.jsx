import { useState } from "react";
import { styled } from '@mui/material/styles';
import "../styles/SingleResult.scss";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Quicksand, sans-serif'
}));

export default function SingleResult(props) {

  const [selectedRestaurant, setSelectedRestaurant] = useState(props.defaultValue);

  const handleChange = (event) => {
    setSelectedRestaurant(event.target.value);
  };

  return (
    <div className="column">
      <Stack
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 2 }}>
        <Item>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="restaurant-simple-select-label">Choice {props.defaultValue + 1}</InputLabel>
          <Select
            labelId="restaurant-select-label"
            id="restaurant-simple-select"
            value={selectedRestaurant}
            label="Restaurant"
            onChange={handleChange}
            style={{fontFamily: 'Quicksand, sans-serif'}}
          >
          {props.itemData.map((item, index) => {
            return <MenuItem key={index} value={index}>{item.name} </MenuItem>
          })}
          </Select>
        </FormControl>
      </Box>

      {/* TO DO: get image, other info from API */}
          {/* <ImageListItem key={itemData[0].img}>
            <img
              src={itemData[0].img}
              alt={itemData[0].title}
              />
          </ImageListItem> */}
        </Item>
        <Item>
          <h3>Menu</h3>
          <h3>Popular Dish </h3>
          <h3>Popular Vegan/Vegetarian/Gluten-Free Dish</h3>
        </Item>
        <Item>
          <h3>Rating: {props.itemData[selectedRestaurant].rating}</h3>
          <h3>Business Hours</h3>
          <h3>Contact Information</h3>
          <h3>Direction</h3>
        </Item>
      </Stack>
    </div>

  )
}


