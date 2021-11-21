import "../styles/SingleResult.scss";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ImageListItem from '@mui/material/ImageListItem';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Quicksand, sans-serif'
}));

export default function SingleResult(props) {
  return (
    <div className="column">
      <Stack
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 2 }}>
        <Item>
          <h3> Restaurant Name </h3>
          <ImageListItem key={itemData.img}>
            <img
              src={itemData.img}
              alt={itemData.title}
              />
          </ImageListItem>
        </Item>
        <Item>
          <h4>Menu</h4>
          <h4>Popular Dish </h4>
          <h4>Popular Vegan/Vegetarian/Gluten-Free Dish</h4>
        </Item>
        <Item>
          <h4>Overall Review</h4>
          <h4>Business Hours</h4>
          <h4>Contact Information</h4>
          <h4>Direction</h4>
        </Item>
      </Stack>
    </div>

  )
}

const itemData =
  {
    img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/portion_sizes_slideshow/getty_rm_photo_of_fish_meal_on_small_plate.jpg',
    title: 'Restaurant-img'
  }
