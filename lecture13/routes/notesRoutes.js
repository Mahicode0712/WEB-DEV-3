const express = require("express");
const router = express.Router();
const { getNotes } = require("../controllers/node_controller");

router.get("/get-notes" ,getNotes);
module.exports = router;