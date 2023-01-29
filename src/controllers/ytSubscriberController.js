const ytSubscribers = require("../models/subscribers");
const mongoose = require("mongoose");

//get all ytSubscriber
const getSubscribers = async (req, res) => {
  try {
    // GET all subscribers from the db & exclude __v
    const subscribers = await ytSubscribers
      .find({})
      .sort({ createdAt: -1 })
      .select("-__v");
    // returns response with list of subscribers & status 200 (OK)
    res.status(200).json(subscribers);
  } catch (error) {
    // if error occurs, returns status 400 with error message
    return res.status(400).json({ error: error.message });
  }
};

//get a single ytSubscriber for a specific id
const getSubscriber = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    // check for valid Id, if not valid returns status 404 with error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such id" });
    }
    const subscriber = await ytSubscribers.findById(id).select("-__v");

    // if no subscriber found with given Id , return error with status 400
    if (!subscriber) {
      return res.status(400).json({ error: "No such id" });
    } else {
      res.status(200).json(subscriber);
    }
  } catch (error) {
    // if error occurs, return status 400 with error
    return res.status(400).json({ error: error.message });
  }
};

// GET request for the path of './names'
const getNameSubscribers = async (req, res) => {
  try {
    // get list of all subscribers
    const subscriber = await ytSubscribers
      .find({})
      .select("-__v -_id -subscribedDate");
    // If successful, return a response with status 200 with list of subscribers
    return res.status(200).json(subscriber);
  } catch (error) {
    // If error occurs, return a response with a status 404 with error message
    return res.status(404).json({ error: error.message });
  }
};

// create new ytSubscriber
const createSubscriber = async (req, res) => {
  const { name, subscribedChannel } = req.body;

  //add doc to db
  try {
    // creates subscriber and add to db with status 200 (OK)
    const subscriber = await ytSubscribers.create({ name, subscribedChannel });
    res.status(200).json(subscriber);
  } catch (error) {
    // if error occurs, return status of 400 with error message
    res.status(400).json({ error: error.message });
  }
};

//delete a ytSubscriber
const deleteSubscriber = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    // check for valid Id, if not valid returns status 404 with error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such id" });
    }
    const subscriber = await ytSubscribers.findByIdAndDelete({ _id: id });

    // if no subscriber found with given Id , return error with status 400
    if (!subscriber) {
      return res.status(400).json({ error: "No such id" });
    } else {
      // if success , return status 200 with success message
      res.status(200).json(subscriber);
    }
  } catch (error) {
    // if error occurs, return status 400 with error
    return res.status(400).json({ error: error.message });
  }
};

//update a ytSubscriber
const updateSubscriber = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    // check for valid Id, if not valid returns status 404 with error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such id" });
    }
    // update subscriber for particular id
    const subscriber = await ytSubscribers.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );

    // if no subscriber found with given Id , return error with status 400
    if (!subscriber) {
      return res.status(404).json({ error: "No such id" });
    } else {
      res.status(200).json(subscriber);
    }
  } catch (error) {
    // if error occurs, return status 400 with error message
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSubscribers,
  getSubscriber,
  createSubscriber,
  deleteSubscriber,
  updateSubscriber,
  getNameSubscribers,
};
