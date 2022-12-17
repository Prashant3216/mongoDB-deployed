const { Router } = require("express");
const jobModel=require("./job.model")

const app = Router();
app.post("/", async (req, res) => {
    let body=req.body
    // console.log(body)
    try {
     await jobModel.insertMany(body);
      return res.status(200).send("Job added successfully");
    } catch (error) {
      return res.status(405).send(error.message);
    }
  });


  app.get("/joblist", async (req, res) => {
    try {
      let products=await jobModel.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });

module.exports = app;