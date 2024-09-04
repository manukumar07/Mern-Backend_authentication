const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DB =
  "mongodb+srv://palmanukumar53:NuMLQ8f5pdHscg4Z@cluster0.2hu91.mongodb.net/";

const connectDb = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connection successfully");
  } catch (error) {
    console.error(" Connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
