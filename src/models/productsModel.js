import Sequelize from 'sequelize';
import db from '../database/connection.js'

export default db.define("Product", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM('Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa'),
    allowNull: true,
  },
});
