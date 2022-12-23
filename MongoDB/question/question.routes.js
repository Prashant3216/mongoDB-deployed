const { Router } = require("express");
const qesModel = require("./question.model");

const app = Router();

// get questions by filter  API
app.get("/", async (req, res) => {
  let { category, difficulty, ques } = req.query;
  ques = +ques;
  console.log(category, difficulty, ques);
  // console.log(body)
  try {
    let questions = await qesModel.find({$and:[{category:category}, {difficulty:difficulty}]}).limit(ques)
    return res.status(200).send(questions);
  } catch (error) {
    return res.status(405).send(error.message);
  }
});
// app.get("/all", async (req, res) => {
    
//     try {
//       let questions = await qesModel.find()
//       return res.status(200).send(questions);
//     } catch (error) {
//       return res.status(405).send(error.message);
//     }
//   });

module.exports = app;
