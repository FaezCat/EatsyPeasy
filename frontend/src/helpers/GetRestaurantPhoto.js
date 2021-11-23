import axios from "axios";

export default async function getRestaurantPhoto(restaurantObj) {
  const url =
    "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/photo?";
  const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  const params = {
    photo_reference: restaurantObj.restaurant_photo_ref,
    maxwidth: restaurantObj.restaurant_photo_width,
    key: apiKey,
  };

  axios.get(url, { params }).then((response) => {
    console.log("photo query response data:", response.data);
    return response.data;
  });
}
