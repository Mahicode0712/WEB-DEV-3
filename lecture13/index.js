const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //it'll give short information and in combined detailed information will be given in console


app.use("/api", notesRoutes);

app.listen(3000, () => {
  console.log("Server is running on PORT: 3000");
});
