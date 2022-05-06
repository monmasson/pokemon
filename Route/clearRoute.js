//Add a Clear Route to Remove ALL Pokemon from database
const express = require("express")
const clearRoute = express.Router()
const Poke = require("../schema/pokeSchema")

//Add A Seed Route to Pokemon that adds the entire original pokemon array

const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];

clearRoute.delete("/clear", (req, res)=>{
    // delete many - take a param to match OR can be blank
    // if blank, it will delete EVERYTHING
    Poke.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})
module.exports = clearRoute;