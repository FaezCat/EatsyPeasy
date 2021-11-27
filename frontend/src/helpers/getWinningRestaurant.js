export function getWinningRestaurant(pollData) {
  let winningRestaurant = {};
  // pollData.restaurant_1_votes;
  // pollData.restaurant_2_votes;
  // pollData.restaurant_3_votes;
  // if (pollData.restaurant_1_votes > (pollData.restaurant_2_votes &&

  const restVotesObjs = {
    1: pollData.restaurant_1_votes,
    2: pollData.restaurant_2_votes,
    3: pollData.restaurant_3_votes,
  };
  const winningRestaurantKey = Object.keys(restVotesObjs).reduce((a, b) =>
    restVotesObjs[a] >= restVotesObjs[b] ? a : b
  ); //finds largest
  //could add some more logic here in cases where there is a tie...

  // const winningRestaurantObjKeys = Object.keys(pollData).filter(eachKey => eachKey.includes(winningRestaurantKey));

  // for (let key of winningRestaurantObjKeys) {
  //   winningRestaurant[key] = pollData[key];
  // }

  console.log("polldata inside of getWinningRestaurant:", pollData);

  winningRestaurant = {
    restaurant_name: pollData[`restaurant_${winningRestaurantKey}_name`],
    business_hours:
      pollData[`restaurant_${winningRestaurantKey}_business_hours`],
    phone_number: pollData[`restaurant_${winningRestaurantKey}_phone_number`],
    maps_directions:
      pollData[`restaurant_${winningRestaurantKey}_maps_directions`],
    // new addition - 11/27/2021
    website: pollData[`restaurant_${winningRestaurantKey}_website`],
  };
  return winningRestaurant;
}
