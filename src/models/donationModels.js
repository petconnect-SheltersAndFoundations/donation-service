const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  shelter_id: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  date: { type: Date, default: Date.now },
  message: { type: String }
});

module.exports = mongoose.model('Donation', donationSchema);
