
const express=require('express')
const cors=require("cors")
const dotenv=require("dotenv")
const useModel=require("./user/user.model")
const shopModel=require("./shopping/shop.model")
const mongoose=require("mongoose")
const userRoute=require("./user/user.route")
const shoppingRoute=require("./shopping/shop.routes")

dotenv.config()
const app=express()
const PORT=process.env.PORT || 8080

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/emi", userRoute)
app.use("/shopping", shoppingRoute)

app.get('/', (req, res)=>{res.send('hello')})



app.listen(PORT, async ()=>{
    mongoose.set('strictQuery', true)
    // console.log(process.env.MONGOURL+"/eval11")
    // console.log(shopModel)
    await mongoose.connect(process.env.MONGOURL+"/eval11")
    console.log('server started on port 8080')
})