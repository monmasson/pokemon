//Set up your server
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000
const pokemon = require("./Route/pokemonRoute")
const seedRoute = require("./Route/seedRoute")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors");
const { schema } = require("./schema/pokeSchema")
const dotenv = require("dotenv");
dotenv.config();
const mongoConfig = require("./config");
const clearRoute = require("./Route/clearRoute");
require("dotenv").config()


server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())
server.use ("/",pokemon)
server.use("/",seedRoute)
server.use("/", clearRoute)





//check that you have your Welcome to the Pokemon App! message displaying
server.get("/", (req, res) => {
    res.status(200).json({ message: 'Welcome to the Pokemon App!' });
})



//Create a get route /pokemon that will res.status(200).json(pokemon), which will display your pokemon data as json in the browser
server.get("/pokemon", (req, res) => {
    res.status(200).json(pokemon)
})


//Setting up your show route .Inside your server.js, add a new get route /pokemon/:id
//That will res.status(200).json({id: req.params.id});
//So, when you go to localhost:3000/pokemon/whatever
//whatever will show up in the browser

server.get("/pokemon/:id", (req, res) => {
    res.status(200).json({ id: req.params.id });
});

//Send all pokemon data
//res.status(200).json({pokemon: pokemon})

server.post ("/pokemon", (req,res) => {
    res.status(200).json({pokemon: pokemon})
});



server.listen(PORT, () => {
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
});
