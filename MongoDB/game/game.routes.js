const { Router } = require("express");
const gameModel=require("./game.model")

const app = Router();

app.post("/", async (req, res) => {
    let body=req.body
    // console.log(body)
    try {
     await gameModel.insertMany(body);
      return res.status(200).send("data added successfully");
    } catch (error) {
      return res.status(405).send(error.message);
    }
  });
  app.get("/users", async (req, res) => {
    try {
      let products=await gameModel.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });
  module.exports = app;