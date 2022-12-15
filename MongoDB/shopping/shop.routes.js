const { Router } = require("express");
const shopModel = require("./shop.model");

const app = Router();

app.post("/", async (req, res) => {
    try {
      let newProduct = shopModel.insertOne({...req.body,date_timestamp:new Date()});
      await newProduct.save();
      return res.status(200).send("Product added successfully");
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });
  app.get("/products", async (req, res) => {
    try {
      let products=await shopModel.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });



  module.exports = app;