const {Schema, model}=require("mongoose")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
var userDB=mongoose.createConnection(process.env.MONGOURL+"/eval13")

const userSchema=Schema({
    name:String,
    email:String,
    password:String
})

const userModel= userDB.model("user",userSchema )

module.exports=userModel