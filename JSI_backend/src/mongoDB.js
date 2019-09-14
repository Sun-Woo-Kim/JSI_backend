const config = require("dotenv").config();
let mongoose = require("mongoose");

exports.connect = function() {
  mongoose
    .connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => {
      console.log("Connected to the database..."); // >>> export DEBUG=app:*
    })
    .catch(() => {
      console.log("error");
    });
};
