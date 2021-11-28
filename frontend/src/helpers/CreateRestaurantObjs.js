import axios from "axios";

export function createRestaurantObjs(results) {
  // console.log("results.data:", results.data);
  const arrayOfResults = results.data.results;
  console.log("results of text search:", arrayOfResults);

  const arrayOfRestaurantObjs = [];

  for (let restaurant of arrayOfResults) {
    if (restaurant.business_status === "OPERATIONAL") {
      arrayOfRestaurantObjs.push({
        place_id: restaurant.place_id,
        // restaurant_name: restaurant.name,
        // ave_rating: restaurant.rating,
        // total_ratings: restaurant.user_ratings_total,
        // restaurant_photo_ref: restaurant.photos[0].photo_reference,
        // restaurant_photo_width: restaurant.photos[0].width,
        // we need to update these together to what data we retrieve at first (that is unavailable from the places API)
      });
    }
  }
  return arrayOfRestaurantObjs;
}

function updateRestaurantObj(restaurant, placeDetails) {
  console.log("details of 2nd api call:", placeDetails);
  restaurant.business_hours = placeDetails.opening_hours.weekday_text;
  restaurant.phone_number = placeDetails.formatted_phone_number;
  restaurant.maps_directions = placeDetails.url;
  restaurant.website = placeDetails.website;
  // new keys
  restaurant.restaurant_name = placeDetails.name;
  restaurant.ave_rating = placeDetails.rating;
  restaurant.restaurant_photo_ref = placeDetails.photos[0].photo_reference;
  restaurant.restaurant_photo_width = placeDetails.photos[0].width;
  restaurant.formatted_address = placeDetails.formatted_address;
  restaurant.user_ratings_total = placeDetails.user_ratings_total;
  restaurant.price_level = placeDetails.price_level;
  restaurant.open_now = placeDetails.opening_hours.open_now;

  // console.log("updated restaurant obj:", restaurant);
  return restaurant;
}

export async function addDetailsToRestaurantObjs(createdRestObjs) {
  const url =
    "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/details/json?";
  const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  const updatedObjs = [];
  const promises = [];

  for (const restaurant of createdRestObjs) {
    const restaurantId = restaurant.place_id;
    const params = {
      place_id: restaurantId,
      key: apiKey,
    };
    promises.push(
      axios.get(url, { params }).then((response) => {
        const placeDetails = response.data.result;
        // console.log("placeDetails:", placeDetails);
        updatedObjs.push(updateRestaurantObj(restaurant, placeDetails));
      })
    );
  }
  // console.log("promises:", promises);

  return await Promise.all(promises)
    .then(() => {
      // console.log("updatedObjsArray:", updatedObjs);
      return updatedObjs;
    })
    .catch((err) => {
      console.log(err);
    });
}
