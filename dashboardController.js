const path = require('path');

exports.dashboard = (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../public/views/user/dashboard.html'));
    } else {
        res.redirect('/auth/login');
    }
};

exports.admin = (req, res) => {
    if (req.session.user && req.session.user.role === 'admin') {
        res.sendFile(path.join(__dirname, '../public/views/admin/admin.html'));
    } else {
        res.status(403).send('Forbidden');
    }
};