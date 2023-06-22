import Sequelize from 'sequelize';
import db from '../database/connection.js'

export default db.define("User", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  name: Sequelize.STRING,
  cpf: {
    type: Sequelize.STRING,
    unique: true
  },
  email: Sequelize.STRING,
});
