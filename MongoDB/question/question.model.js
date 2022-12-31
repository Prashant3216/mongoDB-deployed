const { Schema, model } = require("mongoose");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
var questionsDB=mongoose.createConnection(process.env.MONGOURL+"/eval14")

const qesSchema = Schema({
  category:String,
  difficulty:String,
  question:String,
  type:String,
  correct_answer:String,
  incorrect_answers:{type:Array}
});

const qesModel = questionsDB.model("question", qesSchema);

module.exports = qesModel;
