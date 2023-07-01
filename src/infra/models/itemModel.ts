import sequelize from 'infra/database/connection';
import Sequelize from 'sequelize';

export default sequelize.define('Item', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  observations: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
