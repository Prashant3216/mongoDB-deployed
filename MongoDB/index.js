
const express=require('express')
const cors=require("cors")
const useModel=require("./user/user.model")
const mongoose=require("mongoose")

const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{res.send('hello')})

app.listen(8080, async ()=>{
    await mongoose.connect("mongodb+srv://prashant3216:Mingi3216@@cluster0.cznl6yu.mongodb.net/eval_10")
    console.log('server started on port 8080')
})