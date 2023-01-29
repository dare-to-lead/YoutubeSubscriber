const express = require("express");

//express app
const app = express();

//Parse JSON bodies using express.json() (middleware)
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
const ytSubscriberRouter = require("./routes/ytSubscribers");

//Home Route
app.get("/home", (req, res) => {
  res.status(200).json({
    greeting:
      "Hi, I am Anjum Shaikh, this is a backend API to Youtube Subscribers",
    routes: [
      {
        route: "/",
        response: "Response with an array subscribers(an Object)",
      },
      {
        route: "/names",
        response:
          "Response with an array of subscribers(an Object with only two fields name and subscribedChannel)",
      },
      {
        routes: "/:id",
        response:
          "Response with a subscriber*(an object)* with given id Response with status code 400 and Error message({message: error.message}) if id does not match",
      },
    ],
  });
});

//router middleware
//default route
app.use("/api/ytSubscribers", ytSubscriberRouter);

module.exports = app;
