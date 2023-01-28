const express = require("express");
const router = express.Router();

//GET all youtube subscribers
router.get("/", (req, res) => {
  res.json({ mssg: "GET all yt subscribers" });
});

//GET a single youtube subscriber
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single yt subscribers" });
});
//POST a new youtube subscriber
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new yt subscribers" });
});
//DELETE a  youtube subscriber
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a yt subscribers" });
});
//UPDATE a youtube subscriber
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a yt subscribers" });
});

module.exports = router;
