const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };
