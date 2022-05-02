Purpose from Curriculum Development Team: Make a Pokemon app that displays data inside server-side rendered views, learners will gain a deeper understanding of what they built in class and should have some fun with doing it. Encourage students to review class material and use it as a guide also encourage them to use the express documentation. Discourage them from using online tutorials to help them with this because they will have difficulty finding an online tutorial that is at the same level as this assignment, it will be either be too advanced or too simple and will in most cases confuse learners away from this assignments purpose. 

Learning Objectives
Practicing index and show routes with express
Prerequisites
JavaScript
Express
Node
The User Stories
When a user goes to the /pokemon route they will see an index of pokemon: the names of each pokemon rendered to the page.
When a user clicks on the name of the pokemon, they will be taken to that pokemon's show page, and will see the pokemon's name and image.
Let's Start Catching 'em All!
Set up the file structure
In terminal 1 at a time:

inside your homework folder:

mkdir pokemon_app

cd pokemon_app

mkdir models

touch models/pokemon.js

touch server.js

touch .gitignore

npm init -y

 

Approximate File Structure
 

 

🔴 Commit:
"All my files are created"
 

Install NPM packages
In terminal:

Make sure that you are on the same directory level as your package.json (why?)

npm i express

check your package.json

 

Approximate package.json
 

 

🔴 Commit:
"All my npm packages are added"
 

Set up your server
-In your server.js file, set up your server

require express
set express() to a variable
set a variable of port to 3000
set your app to listen to the port and include a console.log(), so that you can tell when your server is running
include a get route / that will res.status(200).json({message: 'Welcome to the Pokemon App!'}); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
In terminal
nodemon or nodemon server.js (if you set your package.json to start server.js you do't need to put it after nodemon )
GOTCHA! : nodemon will only work if you run it from the same location as your package.json
In the browser
go to localhost:3000
check that you have your Welcome to the Pokemon App! message displaying
 

🔴 Commit:
"My server is set up and running"
 

Set up your 'database'
You have created a file called pokemon.js
Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework, copy and paste it as is! You'll notice the image url's are missing something, this is intentional, do not edit anything directly inside the 'database'!
const pokemon = [
            {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
            {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
            {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
            {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
            {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
            {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
            {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
         ];
Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
Set this 'database' to a variable called pokemon in your server.js file
Create a get route /pokemon that will res.status(200).json(pokemon), which will display your pokemon data as json in the browser
 

🔴 Commit:
"Connected my database, can see json in the browser"
 

 
Set up your index view to show your pokemon data
 

Send all pokemon data
res.status(200).json({pokemon: pokemon})
 

🔴 Commit:
"I can view a list of all my pokemon in the browser"
 

Setting up your show route
Inside your server.js, add a new get route /pokemon/:id
That will res.status(200).json({id: req.params.id});
So, when you go to localhost:3000/pokemon/whatever
whatever will show up in the browser
 

 

Hungry for More?
 

Sign up for Code Wars (Links to an external site.) and try out a challenge (or a few!) in order to keep honing your JavaScript skills!
