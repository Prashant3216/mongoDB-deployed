const {Router}=require("express")

const app=Router()

// singup API
app.use("/", async(req,res)=>{
res.send("working fine")
})

module.exports = app