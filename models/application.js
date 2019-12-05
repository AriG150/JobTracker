const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: String,
  company: String,
  resume: {type: Boolean, default: false},
  coverLetter: {type: Boolean, default: false},
  recruiter: {type: Boolean, default: false}, 
  informational: {type: Boolean, default: false},
  offer: [offerSchema],
  note: [noteSchema],
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Application", applicationSchema)