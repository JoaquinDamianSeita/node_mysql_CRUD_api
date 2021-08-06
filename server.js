const express = require("express");
const apiRouter = require("./routes/index");

require('dotenv').config();

const app = express();

require("./db");

app.use(express.urlencoded());

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
