const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  rec_convo: String,
  info_convo: String,
  notes: String,
  applicationId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("Note", noteSchema)