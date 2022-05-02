//Set up your server
const express = require("express");
const Server = express();
const PORT = process.env.PORT || 3000
const pokemon = require("./models/pokemon")

const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors");


//check that you have your Welcome to the Pokemon App! message displaying
Server.get("/", (req, res) => {
    res.status(200).json({ message: 'Welcome to the Pokemon App!' });
})



//Create a get route /pokemon that will res.status(200).json(pokemon), which will display your pokemon data as json in the browser
Server.get("/pokemon", (req, res) => {
    res.status(200).json(pokemon)
})


//Setting up your show route .Inside your server.js, add a new get route /pokemon/:id
//That will res.status(200).json({id: req.params.id});
//So, when you go to localhost:3000/pokemon/whatever
//whatever will show up in the browser

Server.get("/pokemon/:id", (req, res) => {
    res.status(200).json({ id: req.params.id });
});

//Send all pokemon data
//res.status(200).json({pokemon: pokemon})

Server.post ("/pokemon", (req,res) => {
    res.status(200).json({pokemon: pokemon})
});


/*Update the route in the server.js to render the show view with the pokemon data
Oh no! The image is broken because in our database the image links don't have the .jpg ending, let's fix that programatically! Without going back to the database and editing it there, add on .jpg to the end of the pokemon's image data
 */

  //AVA TO THE RESCUE
  //NOT REQUIRED


/*Set up your index view to show your pokemon data
Continue working on your Index.jsx view so that you can see:
The name of each pokemon, as a list item, inside an unordered list
This list should be dynamically rendered by jsx based on your data from your 'database'
You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names
*/

 //AVA TO THE RESCUE
  //NOT REQUIRED


Server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
});