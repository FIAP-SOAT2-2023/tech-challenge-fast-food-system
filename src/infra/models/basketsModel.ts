import Sequelize from 'sequelize';
import sequelize from '../database/connection';


export default sequelize.define("Basket", {
  basketId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
  },
  qrCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  NSU: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paidAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});
