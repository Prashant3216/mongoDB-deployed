const {Schema, model}=require("mongoose")

const userSchema=Schema({
    name:String,
    email:String,
    password:String
})

const userModel= model("user",userSchema )

module.exports=userModel