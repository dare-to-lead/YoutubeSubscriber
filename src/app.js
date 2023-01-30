const express = require("express");

//express app
const app = express();

//Parse JSON bodies using express.json() (middleware)
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const {
  homeRoute,
  getSubscribers,
  getSubscriber,
  createSubscriber,
  deleteSubscriber,
  updateSubscriber,
  getNameSubscribers,
} = require("../src/controllers/ytSubscriberController");

//routes
const router = express.Router();

//Home Route
router.get("/", homeRoute);

//GET all youtube subscribers
router.get("/subscribers", getSubscribers);

//GET request for the path '/subscribers/names
router.get("/subscribers/names", getNameSubscribers);

//GET a single youtube subscriber
router.get("/subscribers/:id", getSubscriber);

//POST a new youtube subscriber
router.post("/subscribers", createSubscriber);

//DELETE a  youtube subscriber
router.delete("/subscribers/:id", deleteSubscriber);

//UPDATE a youtube subscriber
router.patch("/subscribers/:id", updateSubscriber);

module.exports = router;
