const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  contaced: { type: Boolean, default: false },
  rejected: { type: Boolean, default: false },
  offer: { type: Boolean, default: false },
  counter: { type: Boolean, default: false },
  accept: { type: Boolean, default: false }
})

const noteSchema = new mongoose.Schema({
  rec_convo: String,
  info_convo: String,
  comments: String
})

const applicationSchema = new mongoose.Schema({
  name: String,
  company: String,
  resume: {type: Boolean, default: false},
  coverLetter: {type: Boolean, default: false},
  recruiter: {type: Boolean, default: false}, 
  informational: {type: Boolean, default: false},
  offer: {type: offerSchema, default: offerSchema},
  notes: [noteSchema],
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Offer', offerSchema);
module.exports = mongoose.model('Note', noteSchema);
module.exports = mongoose.model("Application", applicationSchema)