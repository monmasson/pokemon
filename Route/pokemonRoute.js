//Set up your 'database'
const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];
 const express = require("express")
const pokemonRoute = express.Router()
const Poke = require("../schema/pokeSchema")

//Create a get route /pokemon that will res.status(200).json(pokemon), which will display your pokemon data as json in the browser
pokemonRoute.get("/", (req, res) => {
    res.status(200).json(pokemon)
})

//When a user posts to /pokemon a user will receive the posted pokemon
/*pokemonRoute.post("/", (req, res)=>{
    const newPokemon= req.body

    Poke.create(newPokemon, (err, pokemon)=>{ 
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({pokemon})
        }
    })
})
*/

//Setting up your show route .Inside your server.js, add a new get route /pokemon/:id
//That will res.status(200).json({id: req.params.id});
//So, when you go to localhost:3000/pokemon/whatever
//whatever will show up in the browser

pokemonRoute.get("/show/:id", (req, res) => {
    res.status(200).json({ id: req.params.id });
});

//When a user goes to the /pokemon route they will see an array of pokemon


pokemonRoute.get("/:id", (req, res)=>{
    const id = req.params.id
    Poke.findById(id, (err, pokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(200).json(pokemon)
        }
    })
})

pokemonRoute.put("/:id", (req, res)=>{
    const id = req.params.id
    const updatedPokemon = req.body

    Poke.updateOne({_id:id}, updatedPokemon, {new: true},(err, updatedPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(202).json(updatedPokemon)
        }
    })
})
//When a user goes to /pokemon/:name, they will be see that pokemon's info by name
pokemonRoute.get("/:name", (req, res)=>{
    const name = req.params.name
    // returns an array [] of ALL things that match
    // findOne returns an object of EXACTLY ONE THING
    Poke.findOne({name: name, img: img}, (err, pokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json(pokemon)
        }
    })
})



pokemonRoute.post('/', (req, res) => {
  const freshPoke = req.body
  Poke.create(freshPoke, (error, createdPoke) => {
    if (error) {
      console.error(error);
      res.status(400).json({
        error: 'an error has occurred'
      })
    } else {
      console.log('Pokemon created successfully');
      res.status(201).json({
        message: 'Created Successfully',
        poke: createdPoke
      })
    }
  })
})

pokemonRoute.delete('/:id', (req, res) => {
      Poke.deleteOne({ // deletes one user
        _id: req.params.id // only the user we want to delete
      }, (error, resultB) => {
        if (error) {
          console.error(error); // error handling magic
          res.status(404).json({
            error: 'No Pokemon found!'
          })
        } else {
          console.log('Successfully deleted Pokemon');
          res.status(204).json({}); // sends back 204 when we succeed in both operations.
        }
      })
    })






module.exports = pokemonRoute;

