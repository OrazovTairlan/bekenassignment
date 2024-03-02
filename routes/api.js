// routes/api.js
const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

router.post('/items', async (req, res) => {
    try {
        const { name, description, images } = req.body;
        const newItem = new Item({ name, description, images });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating item' });
    }
});

// Add routes for updating and deleting items

module.exports = router;