const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { protect } = require('../middleware/authMiddleware');

// Create Booking
router.post('/', protect, async (req, res) => {
  const { date, mealType, preference } = req.body;
  try {
    const booking = await Booking.create({
      user: req.user.id,
      date,
      mealType,
      preference
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get ALL Bookings (for dashboard)
router.get('/', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).sort('-date');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get My Bookings
router.get('/me', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).sort('-date');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Cancel Booking
router.delete('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.user.toString() !== req.user.id) return res.status(401).json({ message: 'Not authorized' });

    await booking.deleteOne();
    res.json({ message: 'Booking removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
