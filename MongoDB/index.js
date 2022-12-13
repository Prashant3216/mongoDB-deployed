
const express=require('express')
const cors=require("cors")
const dotenv=require("dotenv")
const useModel=require("./user/user.model")
const mongoose=require("mongoose")
dotenv.config()
const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{res.send('hello')})

app.listen(`0.0.0.0:${PORT}`, async ()=>{
    await mongoose.connect(process.env.MONGOURL)
    console.log('server started on port 8080')
})