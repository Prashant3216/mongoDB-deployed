const {Schema, model}=require("mongoose")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

var shoppingDB=mongoose.createConnection(process.env.MONGOURL+"/eval11")

const shopSchema=Schema({
    title:String,
    quantity: String,
    priority:String,
    date_timestamp:String,
    description: String,
    })

const shopModel=shoppingDB.model("shopping",shopSchema )

module.exports=shopModel