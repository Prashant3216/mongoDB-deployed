const { Router } = require("express");
const gameModel=require("./game.model")

const app = Router();

app.post("/", async (req, res) => {
    let body=req.body
    try {
     await gameModel.insertMany(body);
      return res.status(200).send("data added successfully");
    } catch (error) {
      return res.status(405).send(error.message);
    }
  });
  app.get("/user/:name", async (req, res) => {
    let {name}=req.params

    try {
      let products=await gameModel.findOne({name});
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  app.get("/random/word", async (req, res) => {
    try {
    let alpha="abcdefghijklmnopqrstuvwxyz"
    let n=getRandomIntInclusive(1,26)
    let str=""
    for(let i=0; i<n; i++){
       str+=alpha[getRandomIntInclusive(0,25)]
    }
    return res.status(200).send({"string":str});
      
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });



  module.exports = app;