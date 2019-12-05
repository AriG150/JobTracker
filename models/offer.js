const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  contaced: { type: Boolean, default: false },
  rejected: { type: Boolean, default: false },
  offer: { type: Boolean, default: false },
  counter: { type: Boolean, default: false },
  accept: { type: Boolean, default: false },
  application_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("Offer", offerSchema)