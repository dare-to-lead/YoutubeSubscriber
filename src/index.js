require("dotenv").config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL || "";
const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const ytSubscriberRouter = require("./routes/ytSubscribers");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/ytSubscribers", ytSubscriberRouter);

// Connect to DATABASE
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${PORT}!`)
);
