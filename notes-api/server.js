const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/notes", notesRoutes);
app.listen(3001, () => {
  console.log("Server started at port 3001");
});