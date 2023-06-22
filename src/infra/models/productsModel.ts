import Sequelize from 'sequelize';
import sequelize from '../database/connection';


export default sequelize.define("Product", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
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
