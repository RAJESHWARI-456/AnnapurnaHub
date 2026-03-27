const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ngoId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { 
    type: String, 
    enum: ['Available', 'Requested', 'Accepted', 'Completed', 'Cancelled'], 
    default: 'Available' 
  },
  quantity: { type: String, required: true },
  foodDetails: { type: String, required: true },
  pickupTime: { type: String, required: true },
  location: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
