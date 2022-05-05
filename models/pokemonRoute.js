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
 
 const Poke = require("../schema/pokeSchema")

pokemonRoute.post("/", (req, res)=>{
    const newPokemon= req.body

    poke.create(newPokemon, (err, pokemon)=>{
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({pokemon})
        }
    })
})

pokemonRoute.get("/:id", (req, res)=>{
    const id = req.params.id
    poke.findById(id, (err, pokemon)=>{
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

    poke.findByIdAndUpdate(id, updatedPokemon, {new: true},(err, updatedPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(202).json(updatedPokemon)
        }
    })
})

pokemonRoute.get("/name/:name", (req, res)=>{
    const name = req.params.name
    // returns an array [] of ALL things that match
    // findOne returns an object of EXACTLY ONE THING
    poke.findOne({name: name, img: img}, (err, pokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json(pokemon)
        }
    })
})

module.exports = pokemonRoute;