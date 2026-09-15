const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const app = express();
app.use(express.json());

app.use("/api", notesRoutes);

app.listen(3000, () => {
  console.log("Server is running on PORT: 3000");
});
