//Set up your server
const express = require("express");
const Server = express();
const PORT = process.env.PORT || 3000
const pokemon = require("./models/pokemon")
const mongoConfig = require("./config")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors");
const { schema } = require("./schema/pokeSchema")
require("dotenv").config()

server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())
server.use ("/",pokemon)





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



Server.listen(PORT, () => {
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
});