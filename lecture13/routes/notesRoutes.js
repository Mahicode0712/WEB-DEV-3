const express = require("express");
const router = express.Router();
const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes_controller");
const { isAuthorized } = require("../middlewares/isAuthorized");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.get("/get-notes", isAuthorized,isLoggedIn, getNotes);
router.get("/get-note/:id", isAuthorized, isLoggedIn, getNoteById);
router.post("/create_note", isAuthorized, isLoggedIn, createNote);
router.put("/update-note/:id", isAuthorized, isLoggedIn, updateNote);
router.delete("/delete-note/:id", isAuthorized, isLoggedIn, deleteNote);

module.exports = router;
