export function organizePollJSON (response) {
  const createdRestObjs = []; //should return an array of the 3 rest objects
  
  createdRestObjs.push({
    place_id: response.data[0].restaurant_1_place_id
  });
  createdRestObjs.push({
    place_id: response.data[0].restaurant_2_place_id
  });
  createdRestObjs.push({
    place_id: response.data[0].restaurant_3_place_id
  });
  return createdRestObjs;
}