const express = require('express');
const router = express.Router();
const WasteLog = require('../models/WasteLog');
const { protect, authorize } = require('../middleware/authMiddleware');

// Log waste
router.post('/', protect, authorize('Staff', 'Admin', 'Student', 'User', 'NGO'), async (req, res) => {
  console.log(`📡 Incoming Waste Log: ${req.body.mealType}`);
  try {
    const log = await WasteLog.create(req.body);
    console.log(`✅ Waste Log Saved to Atlas: ${log._id}`);
    res.status(201).json(log);
  } catch (err) {
    console.log(`❌ Waste Log Save Failed: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

// Get logs
router.get('/', protect, authorize('Staff', 'Admin', 'Student', 'User', 'NGO'), async (req, res) => {
  try {
    const logs = await WasteLog.find().sort('-date');
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
