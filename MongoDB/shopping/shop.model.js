const {Schema, model}=require("mongoose")

const shopSchema=Schema({
    title:String,
    quantity: String,
    priority:String,
    date_timestamp:String,
    description: String,
    })

const shopModel= model("shopping",shopSchema )

module.exports=shopModel