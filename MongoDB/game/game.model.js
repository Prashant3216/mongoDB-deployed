const { Schema, model } = require("mongoose");

const gameSchema = Schema({
  name:String,
  level:String
});

const gameModel = new model("user", gameSchema);

module.exports = gameModel;
