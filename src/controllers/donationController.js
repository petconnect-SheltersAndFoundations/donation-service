const Donation = require('../models/donationModels');

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDonationsByUser = async (req, res) => {
  try {
    const donations = await Donation.find({ user_id: req.params.id });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonationsByShelter = async (req, res) => {
  try {
    const donations = await Donation.find({ shelter_id: req.params.id });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
