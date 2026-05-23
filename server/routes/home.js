const express = require("express");
const router = express.Router();
const homeController = require("../controller/home.js");

router.post("/analyze", homeController.postAnalyzeForm);
router.post("/expression", homeController.postExpressionForm);

module.exports = router;