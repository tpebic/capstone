const express = require('express');
const router = express.Router();
const User = require('../models/User.js'); // Ensure correct path to the model

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        onsole.log("uline 8")
        const users = await User.findAll();
        console.log("users are: ", users)
        res.json(users);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

// Route to add a new user
router.post('/users/add', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const newUser = await User.create({ username, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send('Error adding user');
    }
});

// Route to delete a user
router.delete('/users/:username', async (req, res) => {
    const { username } = req.params;
    try {
        await User.destroy({ where: { username } });
        res.status(200).send('User deleted');
    } catch (error) {
        res.status(500).send('Error deleting user');
    }
});

module.exports = router;