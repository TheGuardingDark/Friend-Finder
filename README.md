# A Pessimist's Friend Finder :expressionless:
## Full-stack App using Express
### node/express/path/bootstrap/routing

DEPLOYED PROJECT
==============================
Follow this link to take the survey:
https://rocky-sands-51641.herokuapp.com/

You may use any name and a fake picture link for the required fields

APP FUNCTIONALITY
=====================

### HOME :house: 
-- Once on the Friend Finder homepage, the user will be asked to take a short survey. There is also a link on the bottom left which will take them to the Friend API.

### SURVEY :clipboard:
-- A simple survey will first ask for the user's name and then a link to a photo of their choosing. The user will then be given 10 questions which they can agree with on a scale of 1-5 where 1 is equivalent to strongly disgagree and 5 is strongly agree. 
-- Upon clicking Submit, the user's answers will be compared with the answers of all other individuals within the api. The difference between their answer and each individual will be added together and a match will be found based on the individual with the closest matching survey answers.
-- A modal will appear with the user's match, listing their name and displaying the photo they had submitted earlier. The user may exit the modal and take the survey again, they will be added into the api as a new entry each time.

### FRIEND API :skull:
-- The Friend API stores all individuals as an object with their name, photo, and survey scores. Navigating to the API will return a JSON list of friends and their individual stats. Each time a new user takes the survey they will be added to the API.
