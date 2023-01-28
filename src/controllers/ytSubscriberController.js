const ytSubscribers = require("../models/subscribers");
const mongoose = require("mongoose");

//default route
const HomeRoute = async (req, res) => {
  try {
    return res
      .status(200)
      .json(
        "Its a Home route after the URL endpoint using /subscribers for geting all subscriber"
      );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get all ytSubscriber
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await ytSubscribers.find({});
    res.status(200).json(subscribers);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get a single ytSubscriber for a specific id
const getSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such id" });
    }
    const subscriber = await ytSubscribers.findById(id);
    if (!subscriber) {
      return res.status(400).json({ error: "No such id" });
    } else {
      res.status(200).json(subscriber);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// GET request for the path of './subscriber/names'
const getNameSubscribers = async (req, res) => {
  try {
    // get all subscribers
    const subscriber = await Subscriber.find({}).select(
      "-__v -_id -subscribedDate"
    );
    //get all subscriber with a status code of 200
    return res.status(200).json(subscriber);
  } catch (error) {
    //incase of error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

// create new ytSubscriber
const createSubscriber = async (req, res) => {
  const postBody = req.body;

  //add doc to db
  try {
    const subscriber = await ytSubscribers.create(postBody);
    res.status(200).json(subscriber);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a ytSubscriber
const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such id" });
    }
    const subscriber = await ytSubscribers.findByIdAndDelete({ _id: id });

    if (!subscriber) {
      return res.status(400).json({ error: "No such id" });
    } else {
      res.status(200).json(subscriber);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//update a ytSubscriber
const updateSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such id" });
    }
    const subscriber = await ytSubscribers.findByIdAndDelete(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );
    if (!subscriber) {
      return res.status(404).json({ error: "No such id" });
    } else {
      res.status(200).json(subscriber);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  HomeRoute,
  getSubscribers,
  getSubscriber,
  createSubscriber,
  deleteSubscriber,
  updateSubscriber,
  getNameSubscribers,
};
