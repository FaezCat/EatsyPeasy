import axios from "axios";

export function createRestaurantObjs(results) {
  console.log("results.data:", results.data)
  const arrayOfResults = results.data.results;

  const arrayOfRestaurantObjs = [];

  for (const restaurant of arrayOfResults) {
    arrayOfRestaurantObjs.push(
      {
        place_id: restaurant.place_id,
        restaurant_name: restaurant.name,
        ave_rating: restaurant.rating,
        total_ratings: restaurant.user_ratings_total,
        restaurant_photo_ref: restaurant.photos[0].photo_reference,
        restaurant_photo_width: restaurant.photos[0].width, 
        // we need to update these together to what data we retrieve at first (that is unavailable from the places API)
      }
    );
  }
  return arrayOfRestaurantObjs;
}

function updateRestaurantObj(placeDetails, currentRestaurantObj, restaurantId) {
  const newRestaurantObj = {...currentRestaurantObj};

  newRestaurantObj.business_hours = placeDetails.opening_hours.weekday_text;
  newRestaurantObj.phone_number = placeDetails.formatted_phone_number;
  newRestaurantObj.maps_directions = placeDetails.url;

  return newRestaurantObj;
}

export async function addDetailsToRestaurantObjs(restaurantObjs, setRestaurantObjs) {
  
  const currentRestaurantObjs = [...restaurantObjs];
  
  const url = "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/details/json?";
  // this url is correct
  const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  
  // // option 1
  // for (let i = 0; i < currentRestaurantObjs.length; i++) {
  //   const restaurantId = currentRestaurantObjs[i].place_id;
  //   const params = {
  //     place_id: restaurantId,
  //     key: apiKey
  //   };
  //   axios.get(url, {params})
  //     .then((response) => {
  //       return newRestaurantObj = updateRestaurantObj(response, currentRestaurantObjs[i], restaurantId);
  //     })
  //     .then((newRestaurantObj) => {
  //       setRestaurantObjs({...restaurantObjs, restaurantId: newRestaurantObj});
  //     })
  // }


  // option 2
  const returnUpdatedObjs = [];
  const promises = [];
  console.log(restaurantObjs);
  console.log(currentRestaurantObjs);

    for (const restaurant of currentRestaurantObjs) {
      const restaurantId = restaurant.place_id;
      const params = {
        place_id: restaurantId,
        key: apiKey
      };
      console.log("url and params:", url, params);
      promises.push(()=> axios.get(url, {params}));
      //promises.push(axios.get(url, {params}).then(()=>console.log('promise pushed!')));
    }
    console.log(promises);

      await Promise.all(promises)
      .then((response) => {
        console.log("response after all promises executed:", response);
        // const newRestaurantObj = updateRestaurantObj(response, restaurant, restaurantId);
        // return newRestaurantObj;
      })
      // .then((newRestaurantObj) => {
      //   returnUpdatedObjs.push(newRestaurantObj);
      // })
      // .then(()=> setRestaurantObjs(returnUpdatedObjs));
}