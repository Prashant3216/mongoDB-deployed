const { Schema, model } = require("mongoose");

const qesSchema = Schema({
  category:String,
  difficulty:String,
  question:String,
  type:String,
  correct_answer:String,
  incorrect_answers:{type:Array}
});

const qesModel = new model("question", qesSchema);

module.exports = qesModel;
