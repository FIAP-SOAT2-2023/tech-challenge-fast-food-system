import Sequelize from 'sequelize';
import db from '../database/connection.js'

export default db.define("User", {
  name: Sequelize.STRING,
  cpf: Sequelize.STRING,
  email: Sequelize.STRING,

});