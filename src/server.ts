const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

/* Database connection */
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
main();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
