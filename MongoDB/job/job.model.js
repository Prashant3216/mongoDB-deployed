const { Schema, model } = require("mongoose");

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

const jobModel = new model("jobtype", jobSchema);

module.exports = jobModel;
