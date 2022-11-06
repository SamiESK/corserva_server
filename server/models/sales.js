const Sequelize = require('sequelize');
const db = require('../util/database');

const Sale = db.define('sales',{
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    allowNull: false,
    primaryKey: true
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Sale;