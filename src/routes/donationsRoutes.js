const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.get('/', donationController.getAllDonations);
router.post('/', donationController.createDonation);
router.get('/user/:id', donationController.getDonationsByUser);
router.get('/shelter/:id', donationController.getDonationsByShelter);

module.exports = router;
