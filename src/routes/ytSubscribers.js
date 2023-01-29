const express = require("express");
const router = express.Router();
const {
  getSubscribers,
  getSubscriber,
  createSubscriber,
  deleteSubscriber,
  updateSubscriber,
  getNameSubscribers,
} = require("../controllers/ytSubscriberController");

//GET all youtube subscribers
router.get("/", getSubscribers);

//GET request for the path '/subscribers/names
router.get("/names", getNameSubscribers);

//GET a single youtube subscriber
router.get("/:id", getSubscriber);

//POST a new youtube subscriber
router.post("/", createSubscriber);

//DELETE a  youtube subscriber
router.delete("/:id", deleteSubscriber);

//UPDATE a youtube subscriber
router.patch("/:id", updateSubscriber);

module.exports = router;
