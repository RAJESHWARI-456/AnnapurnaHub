const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  barcode: { type: String },
  threshold: { type: Number, default: 10 },
  location: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
