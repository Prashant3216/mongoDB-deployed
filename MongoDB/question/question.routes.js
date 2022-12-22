const { Router } = require("express");
const qesModel = require("./question.model");

const app = Router();

// get questions by filter  API
app.get("/", async (req, res) => {
    let { category, difficulty, ques } = req.query;
    ques= +ques
  // console.log(body)
  try {
    let questions= await qesModel.aggregate([
        { $match: { category: category, difficulty: difficulty } },
        { $sample: { size: ques } },
      ]);
    return res.status(200).send(questions);
  } catch (error) {
    return res.status(405).send(error.message);
  }
});

module.exports = app;