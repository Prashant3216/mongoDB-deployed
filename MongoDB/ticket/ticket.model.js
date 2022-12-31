const {Schema, model, Model}=require("mongoose")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
var ticketDB=mongoose.createConnection(process.env.MONGOURL+"/eval15")

const ticketSchema=Schema({
    category:String,
    title:String,
    message:String,
    date_time:String
})
const userSchema= Schema({
name:String,
email:String,
password:String,
tickets:[ticketSchema]
})

const ticketModel= ticketDB.model("ticket", userSchema)

module.exports=ticketModel