const express = require("express");
const businessRulesController = require("../controllers/BusinessRuleController");

const router = express.Router();

router
  .route("/")
  .get(businessRulesController.getAllBusinessRules)
  .post(businessRulesController.CreateBusinessRules);

router
  .route("/:id")
  .put(businessRulesController.updateBusinessRules)
  .get(businessRulesController.getBusinessRules)
  .delete(businessRulesController.deleteBusinessRules);

module.exports = router;
