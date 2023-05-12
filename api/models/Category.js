const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},{timestamps: true})

module.exports = mongoose.model("Category", CategorySchema) //paasing own name and then actual schema