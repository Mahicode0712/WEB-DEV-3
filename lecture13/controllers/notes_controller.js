const notes = require('../models/data');

const getNotes = (req, res) => {
    res.status(200).send(notes); 
}

module.exports = { getNotes };
