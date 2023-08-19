import db from "../database/connection";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';


class StatusModel extends Model<InferAttributes<StatusModel>, InferCreationAttributes<StatusModel>>{

    declare id: CreationOptional<number>
    declare uuid: CreationOptional<string>
    declare key: CreationOptional<string>
    declare name: CreationOptional<string>
}

StatusModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize: db,
  modelName: "Status",
})

export default StatusModel