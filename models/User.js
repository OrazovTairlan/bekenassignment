// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'regular'], default: 'regular' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);