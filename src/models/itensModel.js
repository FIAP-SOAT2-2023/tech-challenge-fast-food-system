import Sequelize from 'sequelize';
import db from '../database/connection.js'

export default db.define("Item", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  observations: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
