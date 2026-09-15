const express = require("express");
const router = express.Router();
const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
} = require("../controllers/notes_controller");

router.get("/get-notes", getNotes);
router.get("/get-note/:id", getNoteById);
router.post("/create_note", createNote);
router.put("/update-note/:id", updateNote);
module.exports = router;
