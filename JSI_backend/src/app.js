import express from "express";
// const morgan = require("morgan");

// var cookieParser = require("cookie-parser");
// var bodyParser = require("body-parser");
// var path = require("path");
let app = express();

/** PORT */
const port = process.env.PORT || 8000;
app.set("port", port);

/** Setting */
// app.use(morgan("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

/** API */
// app.use("/api/courses", require("./api/courses"));
// app.use("/api/movies", require("./api/movies"));
// app.use("/api/user", require("./api/user"));

/** DB Connect */
let mongoDB = require("./mongoDB");
mongoDB.connect();

export default app;
