require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const donationRoutes = require('./routes/donationsRoutes');

const app = express();
const PORT = process.env.PORT || 3019;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/v1/donations', donationRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Donation Service running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Donation Service listening on port ${PORT}`);
});
