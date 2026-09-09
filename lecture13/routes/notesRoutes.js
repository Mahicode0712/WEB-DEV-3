const express = require("express");
const router = express.Router();
const { getNotes, getNoteById } = require("../controllers/notes_controller");

router.get("/get-notes", getNotes);
router.get("/get-note/:id", getNoteById);
module.exports = router;
