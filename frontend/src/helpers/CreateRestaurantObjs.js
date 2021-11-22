function createRestaurantObjs(results) {
            
  const arrayOfResults = results.data.results;

  const arrayOfRestaurantObjs = [];

  for (const restaurant of arrayOfResults) {
    arrayOfRestaurantObjs.push(
      {
        place_id: restaurant.place_id,
        restaurant_name: restaurant.name,
        ave_rating: restaurant.rating,
        total_ratings: restaurant.user_ratings_total,
        opening_hours: restaurant.opening_hours
        // we need to update these together to what data we retrieve at first (that is unavailable from the places API)
      }
    );
  }
  return arrayOfRestaurantObjs;
}

function updateRestaurantObj(newDataResponse, currentApiResponse, place_id) {
  const newRestaurantObjs = [...currentApiResponse]
  
  for (const restaurant of newRestaurantObjs) {
    if (restaurant.place_id === place_id) {
      restaurant.whatever = newDataResponse.whatever;
      // THIS NEEDS UPDATING: we'll add in our additional required data fields here to be added to the object
    }
  }
  return newRestaurantObjs;

}

function addDetailsToRestaurantObjs(arrayOfRestaurantObjs, apiResponse, setApiResponse) {
  
  const currentApiResponse = [...apiResponse];
  
  const url = "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?";
  // this url is incorrect - we will have to update it to the details API one (not certain how - pls help @Claudia haha)
  const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY
  
  // option 1
  for (let i = 0; i < arrayOfRestaurantObjs.length; i++) {
    const restaurantId = arrayOfRestaurantObjs[i].place_id;
    const params = {
      place_id: restaurantId,
      key: apiKey
    };
    axios.get(url, {params})
      .then((response) => {
        updateRestaurantObj(response, currentApiResponse, restaurantId)
      })
      .then((newRestaurantObjs) => {
        setApiResponse(newRestaurantObjs)
      })
  }


  // option 2
  await Promise.all(() => {
    
    for (const restaurant of arrayOfRestaurantObjs) {
      const params = {
        place_id: restaurant.place_id,
        key: apiKey
      };
      axios.get(url, {params})
      .then((response) => {
        updateRestaurantObj(response, currentApiResponse, restaurant.place_id)
      })
      .then((newRestaurantObjs) => {
        setApiResponse(newRestaurantObjs)
      })
    }
  }).then(console.log("All states have updated?!"));
  
}