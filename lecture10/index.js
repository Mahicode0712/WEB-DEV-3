const express = require("express");
const app = express();
app.use(express.json());

//CRUD operations

let students = ["aditya", "muskan", "harsh"];
app.get("/student", (req, res) => {
  res.status(200).send(students);
});
//create
app.post("/student", (req, res) => {
  let data = req.body.name;

  students.push(data);
  res.status(200).send("student Added successfully");
});

app.put("/student/:index", (req, res) => {
  let id = req.params.index;
  let data = req.body.name;
  students[id] = data;
  res.status(200).send("student update successfully");
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});

//delete
app.delete("/student/:index", (req, res) => {
  let id = req.params.index;

  students.splice(id, 1);
  res.status(200).send("student deleted successfully");
});

//update
