// routes/user.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models').User;

// Route for rendering the register page
router.get('/register', (req, res) => {
    res.render('register');
});

// Route for user registration
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Return success response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
