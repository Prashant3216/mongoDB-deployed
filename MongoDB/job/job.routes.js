const { Router } = require("express");
const shopModel=require("./shop.model")

const app = Router();
app.post("/", async (req, res) => {
    let body=req.body
    // console.log(body)
    try {
     await shopModel.insertMany(body);
      return res.status(200).send("Job added successfully");
    } catch (error) {
      return res.status(405).send(error.message);
    }
  });


  app.get("/joblist", async (req, res) => {
    try {
      let products=await shopModel.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });

module.exports = app;