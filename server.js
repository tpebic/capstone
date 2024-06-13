const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Ensure this line is present to load .env variables

const config = require('./config/config.js'); // Ensure correct path to config

const authRoutes = require('./routes/authRoutes.js');
const dashboardRoutes = require('./routes/dashboardRoutes.js');
const userRoutes = require('./routes/userRoutes.js'); // Ensure this route file exists
const apiRoutes = require('./routes/apiRoutes.js'); // Ensure this route file exists

const sequelize = require('./db.js');
const User = require('./models/User.js');
const FinancialData = require('./models/FinancialData.js');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api', apiRoutes); // Use the new API routes

app.get('/demo', (req, res) => {
    console.log("Request received");
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});