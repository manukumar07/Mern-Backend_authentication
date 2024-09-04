const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/auth-route"); // Adjust the path accordingly
const connectDb = require("./config/db");

dotenv.config();

const app = express();

const PORT = 8000; // define port number

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth/", router); // Make sure authRouter is defined and exported

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});
//

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
