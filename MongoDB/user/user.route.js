const { Router } = require("express");
const useModel = require("./user.model");

const app = Router();

// singup API
app.post("/", async (req, res) => {
  let { name, email, password } = req.body;
  let user = await useModel.findOne({ email });
  try {
    if (!user) {
      return res.status(303).send("User is already register");
    }

    let newUser = useModel.insertOne({ name, email, password });
    await newUser.save();
    return res.status(200).send("User is successfully register");
  } catch (error) {
    return res.status(404).send("Something went wrong");
  }
});
// app.get("/login", async (req, res) => {
//     let { name, email, password } = req.body;
//     let user = await useModel.findOne({ email });
//     try {
//       if (!user) {
//         return res.status(303).send("User is already register");
//       }
  
//       let newUser = useModel.insertOne({ name, email, password });
//       await newUser.save();
//       return res.status(200).send("User is successfully register");
//     } catch (error) {
//       return res.status(404).send("Something went wrong");
//     }
//   });

module.exports = app;
