const {Router} =require("express")
const ticketModel=require('./ticket.model')
const app=Router()

app.post("/", async (req,res)=>{
    let body=req.body
    try {
        await ticketModel.insertMany(body)
        return res.status(200).send("sigup Successfully")
    } catch (error) {
        return res.status(401).send("something went wrong")
    }
}
)

app.patch("/create/:id", async (req,res)=>{
    let {id}=req.params
    let ticketBody=req.body
    body.date_time=new Date()
    try {
        await ticketModel.updateOne({_id:id}, {$push:{tickets:ticketBody}})
        return res.status(200).send("Ticket created Successfully")
    } catch (error) {
        return res.status(401).send("something went wrong")
    }
}
)
app.post("/user", async (req,res)=>{
    let {email,password}=req.body

    try {
        let users=await ticketModel.findOne({email:email, password:password})
        return res.status(200).send(users)
    } catch (error) {
        return res.status(401).send("something is wrong")
    }
}
)

module.exports=app