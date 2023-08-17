import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../database/connection";

interface AddressAttributes {
  uuid?: string;
  customerId: string;
  streetName: string;
  number: string;
  neighborhood: string;
  complement: string;
  zipCode: string;
  state: string;
  city: string;
  country: string;
}

class AddressModel extends Model<AddressAttributes> implements AddressAttributes {
  public uuid!: string;
  public customerId!: string;
  public streetName!: string;
  public number!: string;
  public neighborhood!: string;
  public complement!: string;
  public zipCode!: string;
  public state!: string;
  public city!: string;
  public country!: string;
}
AddressModel.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    customerId: {
      type: DataTypes.UUID,
    },
    streetName: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    complement: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Address",
  }
);

export default AddressModel;
