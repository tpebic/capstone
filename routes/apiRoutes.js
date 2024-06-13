const express = require('express');
const router = express.Router();
const User = require('../models/User.js'); // Ensure correct path to the model

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
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

// New route to get logs
router.get('/logs', async (req, res) => {
    try {
        // Fetch logs from the database or any other source
        const logs = await getLogsFromDatabase(); // Ensure to replace this with actual log fetching logic
        res.json(logs);
    } catch (error) {
        res.status(500).send('Error fetching logs');
    }
});

// New route to get audit logs
router.get('/audit-logs', async (req, res) => {
    try {
        // Fetch audit logs from the database or any other source
        const auditLogs = await getAuditLogsFromDatabase(); // Ensure to replace this with actual audit log fetching logic
        res.json(auditLogs);
    } catch (error) {
        res.status(500).send('Error fetching audit logs');
    }
});

async function getLogsFromDatabase() {
    // Mocked logs for demonstration; replace with actual database logic
    return [
        { message: 'Log entry 1', timestamp: '2024-06-13T18:20:21Z' },
        { message: 'Log entry 2', timestamp: '2024-06-13T18:21:22Z' }
    ];
}

async function getAuditLogsFromDatabase() {
    // Mocked audit logs for demonstration; replace with actual database logic
    return [
        { Timestamp: '2024-06-13T18:22:23Z', Username: 'user1', Activity: 'Login' },
        { Timestamp: '2024-06-13T18:23:24Z', Username: 'user2', Activity: 'Data update' }
    ];
}

module.exports = router;