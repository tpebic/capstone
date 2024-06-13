const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await User.create({ username, password: hashedPassword, role });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).send('Unauthorized');
        }
        if (bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            res.redirect('/dashboard');
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        res.status(500).json({ error: 'Error logging in user' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};