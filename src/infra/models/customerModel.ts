import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../database/connection";

interface CustomerAttributes {
  uuid: string;
  firstName: string;
  lastName: string | null;
  document: string;
  email: string;
  cellphone: string;
}
class CustomerModel
  extends Model<CustomerAttributes>
  implements CustomerAttributes
{
  public uuid!: string;
  public firstName!: string;
  public lastName!: string | null;
  public document!: string;
  public email!: string;
  public cellphone!: string;
}

CustomerModel.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    document: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    cellphone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Customer",
  }
);

export default CustomerModel;
