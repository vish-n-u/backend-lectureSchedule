const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const DB_URL = require("./config/db.config");


const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser())
app.get("/", (req, res) => {
  res.status(200).send("reached");
});
app.get("/working", (req, res) => {
  res.status(200).send("seemsToBeWorking...ig!");
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update with your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Add the allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add the allowed headers
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials, if needed
  next();
});
async function connectDb() {
  const conn = await mongoose.connect(DB_URL);
  const db = mongoose.connection;
  db.on("error", () => {
    console.log("#### Error while connecting to mongoDB ####");
  });
  db.once("open", () => {
    console.log("#### Connected to mongoDB ####");
  });
     require("./route/auth.route")(app)
     require("./route/course.route")(app)
     require("./route/user.route")(app)
     require("./route/schedule.route")(app)
    // require("./route/answerSheet.route")(app)
 

  app.listen("5000", () => {
    console.log("listening...");
  });
}
connectDb()