const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Poll = sequelize.define('Poll', {
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0
  },
  targetRoles: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

module.exports = Poll;
