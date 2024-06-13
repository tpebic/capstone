const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const FinancialData = sequelize.define('FinancialData', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    data: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

User.hasMany(FinancialData, { foreignKey: 'userId' });
FinancialData.belongsTo(User, { foreignKey: 'userId' });

module.exports = FinancialData;