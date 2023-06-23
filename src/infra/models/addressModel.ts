import Sequelize from "sequelize";
import db from "../database/connection";

export default db.define("Address", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  customerId: Sequelize.UUID,
  streetName: {
    type: Sequelize.STRING,
  },
  number: Sequelize.STRING,
  neighborhood: Sequelize.STRING,
  complement: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  state: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
});
