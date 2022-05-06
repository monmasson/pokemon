const express = require("express")
const seedRoute = express.Router()
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

seedRoute.post("/seed", (req, res)=>{
    const newPokemon1= req.body

    Poke.insertMany(pokemon, (err, pokemon)=>{ 
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({pokemon})
        }
    })
})
module.exports = seedRoute;