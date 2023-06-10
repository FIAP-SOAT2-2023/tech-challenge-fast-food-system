// Item.js
const { DataTypes } = require('sequelize');
const sequelize = require('./database/connection');

const Item = sequelize.define('Item', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  observations: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Item;
