const { Router } = require("express");
const jobModel=require("./job.model")

const app = Router();

// Post Data API
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

// get Data API
  app.get("/joblist", async (req, res) => {
    try {
      let products=await jobModel.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });

//   Filter API with Role
  app.get("/joblist/filter", async (req, res) => {
    let {role}=req.query
    try {
      let products=await jobModel.find({role:role});
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });

// Sort API from latest_to_oldest
  app.get("/joblist/sort/latest_to_oldest", async (req, res) => {
    try {
      let products=await jobModel.find().sort({postedAt:-1});
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });
// Search API with query
  app.get("/joblist/search", async (req, res) => {
    let {language}=req.query
    try {
      let products=await jobModel.find({language:language});
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send("Something went wrong");
    }
  });

module.exports = app;