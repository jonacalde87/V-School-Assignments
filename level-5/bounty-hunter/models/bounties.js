const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bounty blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    bountyAmount: Number,
    living: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        enum: ["Sith", "Jedi"]
    }    
})

//               mongoose.model("ModelNameSingular", modelSchema);
module.exports = mongoose.model("Bounty", bountySchema)

/* EXAMPLE OF SCHEMA
const userSchema = new Schema({
    name: String, // Simple declaration of datatype that will be used:
    username: {   // You can add specifics to each one too that help with validation, like making something required, or unique
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailAddress: [String],
    gender: {
        type: String,
        enum: ["male", "female"] // Add 'enum' of an array of options to force selection between a given number of options.
    },
    admin: Boolean,
    location: String
});

*/
