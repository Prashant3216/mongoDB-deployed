const {Schema, model, Model}=require("mongoose")

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

const ticketModel= new model("ticket", userSchema)

module.exports=ticketModel