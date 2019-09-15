import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

/** PORT */
const port = process.env.PORT || 8000;
app.set("port", port);

/** View */
app.set("view engine", "pug");
app.set("views", "./views");

/** Setting */
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));

/** API */
app.get("/", require("./routes/index"));
app.use("/api/todos", require("./routes/todos"));
// app.use("/api/courses", require("./api/courses"));
// app.use("/api/movies", require("./api/movies"));
// app.use("/api/user", require("./api/user"));

/** DB Connect */
let mongoDB = require("./mongoDB");
mongoDB.connect();

// ROUTERS
// app.listen(port, () => console.log(`Server listening on port ${port}`));

app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port")
  );
  console.log("  Press CTRL-C to stop\n");
});
