// Basket.js
const { DataTypes } = require('sequelize');
const sequelize = require('./database/connection');

const Basket = sequelize.define('Basket', {
  basketId: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  qrCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NSU: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paidAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Basket;
