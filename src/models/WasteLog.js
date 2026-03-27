const mongoose = require('mongoose');

const wasteLogSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  mealType: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner'], required: true },
  category: { type: String, enum: ['Edible', 'Inedible'], required: true },
  estimatedWeight: { type: Number, required: true }, // in kg
  reason: { type: String, required: true },
  photoUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('WasteLog', wasteLogSchema);
