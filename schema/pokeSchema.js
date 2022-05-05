// Import mongoose
const mongoose = require ("mongoose")


// create NEW SCHEMA
    const pokeSchema = new mongoose.Schema ({
       name: {type:String, required:true },
       img:{type: String, required:true}
     });
     

// convert schema to model
const pokeModel = mongoose.model("Pokemon", pokeSchema)

// export 
module.exports = pokeModel
