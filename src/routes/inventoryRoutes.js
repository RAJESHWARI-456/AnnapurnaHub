const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem');
const { protect, authorize } = require('../middleware/authMiddleware');

// Get all inventory
router.get('/', protect, async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add inventory item
router.post('/', protect, authorize('Staff', 'Procurement', 'Admin', 'Student', 'User', 'NGO'), async (req, res) => {
  console.log(`📡 Incoming Inventory Add: ${req.body.name}`);
  try {
    const item = await InventoryItem.create(req.body);
    console.log(`✅ Inventory Saved to Atlas: ${item._id}`);
    res.status(201).json(item);
  } catch (err) {
    console.log(`❌ Inventory Save Failed: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

// Update item
router.put('/:id', protect, authorize('Staff', 'Procurement', 'Admin', 'Student', 'User', 'NGO'), async (req, res) => {
  try {
    const item = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
