const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');
const { protect, authorize } = require('../middleware/authMiddleware');

// Create donation
router.post('/', protect, authorize('Staff', 'Admin', 'Student', 'NGO', 'User'), async (req, res) => {
  console.log(`📡 Incoming Donation Attempt from: ${req.user.role}`);
  try {
    const donation = await Donation.create({ ...req.body, createdBy: req.user.id });
    console.log(`✅ Donation Saved to Atlas: ${donation._id}`);
    res.status(201).json(donation);
  } catch (err) {
    console.log(`❌ Donation Save Failed: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

// Get donations (all statuses or filtered by status query)
router.get('/', protect, async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== 'All') filter.status = status;

    const donations = await Donation.find(filter).populate('createdBy', 'name');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Cancel donation
router.put('/:id/cancel', protect, authorize('Staff', 'Admin', 'NGO', 'Student'), async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      { status: 'Cancelled' },
      { new: true }
    );
    if (!donation) return res.status(404).json({ message: 'Donation not found' });
    res.json(donation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Accept donation
router.put('/:id/accept', protect, authorize('NGO', 'Student', 'Staff'), async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id, 
      { status: 'Accepted', ngoId: req.user.id },
      { new: true }
    );
    res.json(donation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
