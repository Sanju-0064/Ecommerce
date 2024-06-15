const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

const PORT = process.env.PORT || 1234;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("err", err);
  });
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}
app.use("/static", express.static(__dirname + "/public"));

app.use("/", routes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
