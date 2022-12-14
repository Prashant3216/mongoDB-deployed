
const express=require('express')
const cors=require("cors")
const dotenv=require("dotenv")
const useModel=require("./user/user.model")
const mongoose=require("mongoose")
const userRoute=require("./user/user.route")
dotenv.config()
const app=express()
const PORT=process.env.PORT || 8080

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors())

app.use("/emi", userRoute)
app.get('/', (req, res)=>{res.send('hello')})



app.listen(PORT, async ()=>{
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGOURL)
    console.log('server started on port 8080')
})