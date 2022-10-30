const express = require("express");
const { connectDB } = require("./db/connect");
require("dotenv").config();
const app = express();
// const mongoose = require("mongoose");
const task = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
// VARIABLES

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", task);
app.use(notFound);
app.use(errorHandler);

//  LISTENING SECTION
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening on port: ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
