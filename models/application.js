const mongoose = require('mongoose');


const offerSchema = new mongoose.Schema({
  contaced: { type: Boolean, default: false },
  rejected: { type: Boolean, default: false },
  offer: { type: Boolean, default: false },
  counter: { type: Boolean, default: false },
  accept: { type: Boolean, default: false },
  application_id: mongoose.Schema.Types.ObjectId
})



const noteSchema = new mongoose.Schema({
  rec_convo: String,
  info_convo: String,
  notes: String,
  applicationId: mongoose.Schema.Types.ObjectId
})

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