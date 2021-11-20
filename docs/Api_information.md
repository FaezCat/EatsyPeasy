Interesting Keys in Return JSON Data from Google Place Details API:

formatted_address: self explanatory (it’s the address)

formatted_phone_number: self explanatory

opening_hours.weekday_text: returns an array of opening hours from Monday to Sunday

photos: returns an array of objects each containing either height (maxheight for search purposes) or width (maxwidth for search purposes) and then “html_attributions” which is required in addition to the height or width to then fetch and image from the place Photo API

place_id: returns the place ID used to search in the first place

rating: appears to return a total average rating

reviews: returns an array of objects - we may not use this honestly

types: returns an array of “categories” - examples for McDongs includes cafe, restaurant, food, establishment

user_ratings_total: displays the total # of ratings
