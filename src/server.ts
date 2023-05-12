import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

/* Database connection */
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
main();
