const notes = require("../models/data");

const getNotes = (req, res) => {
  res.status(200).send(notes);
};
const getNoteById = (req, res) => {
  let { id } = req.params;
  let note = notes.find((note) => note.id === Number(id));
  res.status(200).send(note);
  if (!note) {
    res.status(404).send({ message: "Note not found" });
  }
  res.status(200).send(note);
};

module.exports = { getNotes, getNoteById };
