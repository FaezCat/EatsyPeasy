1. Project Planning
a) Project Description
You should have a document describing your project idea. In other words, what your project is all about. It should contain at least the following:
	•	Project title: YouChoose or EatsyPeasy or justeat?
	•	Project description - What problem your app solves: Helps indecisive users (and their friends) decide which restaurant to eat at
	•	Target audience - Your app will be useful to whom? Anyone indecisive about where to eat, or groups that need to select where to eat
	•	Team members: Faez Catrina, Cynthia Leung, Claudia Wong
Deliverable: Project description document

b) User Stories
User stories allow you to draft the high-level requirements based on the user needs. It should describe the interaction of the user and the app.
Deliverable: User stories document
Ideas
User flow for questions:
	1.	Location: Input postal code or address of closeby landmark (google), choose radius
	2.	What time will you be eating?  Breakfast, lunch or dinner - use Zomato
	3.	What kind of cuisine? Any food restrictions?
	⁃	use Zomato, choose multiple
	4.	What kind of price range? And average rating? - use Zomato or Google Places API, choose multiple.
	⁃	choose by: $, $$, $$$ etc
	⁃	star: “I want the best (4-5star)” or surprise me!


Results “page”:
Limits:
- choose 3?
- limit by google review score. Maybe minimum 4 stars.
1. menu to show “popular/suggestion dishes”, dishes for food restrictions, also confirm if the restaurant has dishes for that food restriction
	- suggested/popular dish: from ubereats api “picked for you” category
	- use ubereats api, open menu api, skip the dishes web scraping, zomato
	- if they are on ubereats api, render from there. If not, show zomato api image.
	- stretch: skip the dishes web scraping for menu
2. Show transit directions to restaurant
	- alternative: use google maps api, link to that restaurant and show directions
3. Show photos:
	- google review photos
	- if instagram. But how to know if restaurant has an IG account?
4. Unique email link to share with friends for polling. Maybe need to look into Borda count?
	- stretch: anonymous or named poll
	- anonymous polling will be easier for now, need to use email API
	- we should talk to spooky choice bois or camilla (Netflix project) for advice
	- perhaps make the unique id and record at this point
5. Book a table:
	- open table link or phone number for reservation


User stories
Must have
Tier 1 - work on this first (MVD):
As a user, I want to input a location to narrow down search results geographically. The radius will be pre-selected and is not user configurable.
As a user, I want to specify the kind of cuisine and any food restrictions (vegan, vegetarian, gluten-free) to help narrow down the search.
As a user, I want to specify the price range and average rating (Google Reviews) to narrow down the search.
As a user, I want to see the page of restaurant results that match my answers, and be able to compare multiple using the drop-down option.
As a user, I want to be able to generate a poll and share a unique link to my friends so that they can poll on the 3 options. The link should be able to auto-copy, so I can share the link using a messaging platform.
As a user, I want to be able to vote on a poll that has the 3 restaurant options and have that answer saved with my name.
As a user, I want to see the results of the poll and see associated information for the leading choice.

Tier 2 - work on this next:
As a user, I want to be able to see the link to the menu, click on it, and the menu open in a new tab.
As a user, I want to see suggested dishes (most popular) or dishes for my food restriction to narrow down the search.

Tier 3 - work on this next next:
As a user, I want to see basic review information from Google Places, such as: average rating, number of reviews, price category, and type of restaurant.
As a user, I want to see business hours of the restaurant to narrow down the search.
As a user, I want to see the contact information to be able to book a reservation.
As a user, I want to be able to see the link to the Google Maps directions, click on the link, and have it open a new tab with the Google Maps directions to that restaurant.



Stretch
As a user, I want to go backwards in the flow of questions if I make a mistake or change my mind.
As a user, I want to be able to share my unique link via social media and other methods.
As a user, on the results page, I want to see the latest or most relevant Google review.
As a user, on the display poll results page, I want to see the names of people related to their voting choice.
As a user, I want to be able to view this app on mobile. Idea: on the results page, it shows 2 columns/options instead of 3.

c) Wireframes
Wireframes are a visual representation of the skeletal structure of your app. It should lay out the structure hierarchy and relationships between the different element of your app. Ideally, you should use a simple design software to get your wireframes done (draw.io, balsamiq, etc).
Deliverable: Wireframe designs

d) Entity Relationship Diagram
You need to design the database ERD and define what are the tables and their relationships. You should use a design software (draw.io or any other) to draft the ERD.
Deliverable: ERD design

e) Stack Choices
What are the technologies you’re going to use to develop for your app. You need to think about:
	•	Front-End
	•	Back-End
	•	Database
Deliverable: Stack choices document
Front-end: React JS, SASS, Material UI for components
Back-end: Ruby on Rails, Active Record as ORM (make sure to switch Postgres instead of sqlite)
Db: Postgres
Hosting: Heroku (stretch goal)
Api testing: Postman or insomnia
API: Ubereats, Google Maps, Google Places, Zomato, Polling one (for emailing)
