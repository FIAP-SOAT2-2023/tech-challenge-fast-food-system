import Sequelize from 'sequelize';
import sequelize from '../database/connection';


export default sequelize.define("Item", {
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
