const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
var jobTypeDB=mongoose.createConnection(process.env.MONGOURL+"/eval12")

const jobSchema = Schema({
  company: String,
  postedAt: String,
  city: String,
  location: String,
  role: String,
  level: String,
  contract: String,
  position: String,
  language: String,
});

const jobModel = jobTypeDB.model("jobtype", jobSchema);

module.exports = jobModel;
