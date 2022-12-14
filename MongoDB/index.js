
const express=require('express')
const cors=require("cors")

const useModel=require("./user/user.model")
const shopModel=require("./shopping/shop.model")
const mongoose=require("mongoose")
const userRoute=require("./user/user.route")
const shoppingRoute=require("./shopping/shop.routes")
const jobRoute=require("./job/job.routes")
const jobModel=require("./job/job.model")
const gameModel=require("./game/game.model")
const gameRoute=require("./game/game.routes")
const qesModel=require("./question/question.model")
const qesRoute=require("./question/question.routes")
const ticketRoute=require("./ticket/ticket.routes")
const ticketModel=require('./ticket/ticket.model')




const app=express()
const PORT=process.env.PORT || 8080

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors())

app.use("/emi", userRoute)
app.use("/shopping", shoppingRoute)
app.use("/job", jobRoute)
app.use("/game", gameRoute)
app.use("/question", qesRoute)
app.use("/ticket", ticketRoute)


app.get('/', (req, res)=>{res.send('hello')})

app.listen(PORT, async ()=>{
    mongoose.set('strictQuery', true)
    console.log('server started on port 8080')
})