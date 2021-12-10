const express = require("express");
const practiceController = require("../controllers/practiceController");

const router = express.Router();

router
  .route("/")
  .get(practiceController.getAllPractices)
  .post(practiceController.createPractice);

router
  .route("/:id")
  .put(practiceController.updatePractice)
  .get(practiceController.getPractice)
  .delete(practiceController.deletePractice);

module.exports = router;
