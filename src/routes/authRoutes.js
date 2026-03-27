const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register User
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    user = await User.create({ name, email, password, role });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    
    if (user) {
      if (await user.comparePassword(password)) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
        return res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
      } else {
        return res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      // HACKATHON MODE: Auto-create user if doesn't exist
      user = await User.create({ name: 'Guest User', email, password, role: 'User' });
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });
      return res.status(201).json({ token, user: { id: user._id, name: user.name, role: user.role } });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
