const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/", require("./routes/authrouts"));

const CONNECTION_URL = "mongodb://0.0.0.0:27017/";

const PORT = 8800;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("data base connected");
    app.listen(PORT, () => {
      console.log("server is running in " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
