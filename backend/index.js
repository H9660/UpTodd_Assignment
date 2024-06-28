const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const DemoSession = require('./model/DemoSession'); // Assuming the User model is defined in user.js
const connectDB = require('./db.js')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;
connectDB()

app.use(cors())
app.use(express.json())

app.post('/api/book-demo', async (req, res) => {
    const { name, email, phone, babyStage } = req.body;

    try {
        const newSession = new DemoSession({
            name,
            email,
            phone,
            babyStage,
        });

        const savedSession = await newSession.save();
        res.status(201).json(savedSession); // Respond with the saved user object
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Failed to create demo session' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
