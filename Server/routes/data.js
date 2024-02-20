const express = require("express");
const router =express.Router();

const {getData, insertData} = require('../controllers/getData');

router.post("/insertData",insertData)
router.get("/getData",getData);

module.exports =router;
