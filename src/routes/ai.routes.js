const express = require("express");

const {generateEmail}=require("../controllers/ai.controllers");

const router = express.Router();

router.post("/generate-email",generateEmail);

module.exports = router ;