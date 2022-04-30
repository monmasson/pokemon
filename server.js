const express = require("express");
const Server = express();
const PORT = process.env.PORT || 3000
const pokemon = require("./models/pokemon.js")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")

Server.get("/", (req, res) => {
    res.status(200).json({message: 'Welcome to the Pokemon App!'});
})

Server.get("/pokemon", (req, res) => {
    res.status(200).json(pokemon)
    })

    Server.get("/pokemon/:id", (req, res) => {
        res.status(200).json({id: req.params.id});
        })


Server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})
