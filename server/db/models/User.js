const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  user_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
