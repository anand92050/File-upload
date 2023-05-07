const express = require("express");
const router = express.Router();

const {LocalFileUpload}=require("../controllers/fileUpload");

//api route

router.post("/LocalFileUpload",LocalFileUpload);

module.exports = router;